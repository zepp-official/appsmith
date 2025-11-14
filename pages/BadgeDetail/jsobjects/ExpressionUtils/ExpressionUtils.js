export default {
	// Usage:
	// JSObject.conditionsToExpression(conditionsArray)
	// JSObject.expressionToConditions("a >= 1 && b < c")
	
  // Helpers (kept internal)
  _isNumericLiteral: function(s) {
    return /^-?\d+(\.\d+)?$/.test(String(s));
  },

  _isQuotedString: function(s) {
    return (/^".*"$/.test(s) || /^'.*'$/.test(s));
  },

  _unwrapParens: function(s) {
    s = s.trim();
    if (s.startsWith('(') && s.endsWith(')')) {
      // naive single-layer unwrap
      return s.slice(1, -1).trim();
    }
    return s;
  },

  // Split top-level by joiner (&& or ||) while ignoring joiner inside parentheses or quotes
  _splitTopLevel: function(str, joiner) {
    var parts = [];
    var buff = '';
    var depth = 0;
    var inSingle = false;
    var inDouble = false;
    var jl = joiner.length;

    for (var i = 0; i < str.length; i++) {
      // If we're at top-level and joiner matches, split
      if (!inSingle && !inDouble && depth === 0 && str.substr(i, jl) === joiner) {
        parts.push(buff.trim());
        buff = '';
        i += jl - 1; // skip the joiner
        continue;
      }

      var ch = str[i];
      buff += ch;

      if (ch === "'" && !inDouble) {
        inSingle = !inSingle;
      } else if (ch === '"' && !inSingle) {
        inDouble = !inDouble;
      } else if (!inSingle && !inDouble) {
        if (ch === '(') depth++;
        else if (ch === ')') depth = Math.max(0, depth - 1);
      }
    }

    if (buff.trim() !== '') parts.push(buff.trim());
    return parts;
  },

  // Regex for simple comparisons: left op right
  // groups: 1 = left, 2 = operator, 3 = right
  _COMPARISON_RE: /^([A-Za-z0-9_.]+)\s*(>=|<=|===|!==|==|!=|>|<)\s*([A-Za-z0-9_.]+|".*?"|'.*?'|-?\d+(\.\d+)?)$/,

  /**
   * Convert Type1 (array of condition objects) -> Type2 (expression string)
   * - conditions: array of { source, operator, goal, isMetric }
   * - Always joins with '&&'
   */
  conditionsToExpression: function(conditions) {
    if (!Array.isArray(conditions)) {
      throw new Error('conditions must be an array');
    }

    var parts = conditions.map(function(cond) {
      if (typeof cond !== 'object' || cond == null) {
        throw new Error('each condition must be an object');
      }

      var left = String(cond.source || cond.expressionLeft || '');
      var op = String(cond.operator || '==').trim();
      var goal = cond.goal;
      var rightStr;

      if (cond.isMetric === true) {
        rightStr = String(goal);
      } else {
        if (typeof goal === 'number' || this._isNumericLiteral(goal)) {
          rightStr = String(goal);
        } else {
          // ensure quotes and escape inner double quotes
          var g = String(goal).replace(/"/g, '\\"');
          rightStr = '"' + g + '"';
        }
      }

      return left + ' ' + op + ' ' + rightStr;
    }.bind(this));

    return parts.join(' && ');
  },

  /**
   * Convert Type2 (expression string) -> Type1 (array of condition objects)
   * Returns array of condition objects
   * - handles flat expressions joined by top-level && (respects parentheses/quotes while splitting)
   */
  expressionToConditions: function(expression) {
    if (typeof expression !== 'string') {
      throw new Error('expression must be a string');
    }

    var trimmed = expression.trim();
    var parts = null;

    // Only '&&' joiner is supported
    if (trimmed.indexOf('&&') !== -1) {
      parts = this._splitTopLevel(trimmed, '&&');
    } else {
      parts = [trimmed];
    }

    var conditions = parts.map(function(part) {
      var p = part.trim();
      var unwrapped = this._unwrapParens(p);
      var m = unwrapped.match(this._COMPARISON_RE);

      if (!m) {
        // fallback: return raw expression fragment
        return { expression: unwrapped };
      }

      var left = m[1];
      var op = m[2];
      var rightRaw = m[3];

      var goal, isMetric;

      if (this._isNumericLiteral(rightRaw)) {
        goal = Number(rightRaw);
        isMetric = false;
      } else if (this._isQuotedString(rightRaw)) {
        // strip quotes (handle " or ')
        goal = rightRaw.slice(1, -1).replace(/\\"/g, '"');
        isMetric = false;
      } else {
        // unquoted identifier -> metric reference
        goal = rightRaw;
        isMetric = true;
      }

      return {
        source: left,
        operator: op,
        goal: goal,
        isMetric: isMetric
      };
    }.bind(this));

    return conditions;
  }
};
