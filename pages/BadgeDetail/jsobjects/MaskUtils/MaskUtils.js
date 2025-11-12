export default {
	// --- Properties ---

	/**
	 * Base Mask Map:
	 * Hexadecimal string -> Decimal integer
	 */
	MASK_MAP: {
		"0x01": 1, // Steps, Calories, Sleep
		"0x02": 2, // Workout (Running, Swimming, Climbing, etc.)
		"0x04": 4  // Food log related
	},

	/**
	 * Reverse Mask Map:
	 * Decimal integer -> Hexadecimal string
	 */
	REVERSE_MASK_MAP: {
		1: "0x01",
		2: "0x02",
		4: "0x04"
	},

	// --- Methods ---

	/**
	 * Conversion Function 1: Converts a decimal integer mask value to an array of hexadecimal mask strings.
	 * @param {number} intMask - The integer mask value to convert (e.g., 7)
	 * @returns {string[]} - Array containing the selected hexadecimal mask strings (e.g., ["0x01", "0x02", "0x04"])
	 */
	intMaskToArray: (intMask) => {
		if (typeof intMask !== 'number' || intMask < 0) {
			return [];
		}
		
		const selectedMasks = [];
		
		// Use 'this' to access properties within the same JSObject
		const availableIntMasks = Object.values(this.MASK_MAP); 
		
		for (const maskValue of availableIntMasks) {
			// Use the Bitwise AND operator (&)
			if ((intMask & maskValue) !== 0) {
				// Use 'this' to access the reverse map
				const hexString = this.REVERSE_MASK_MAP[maskValue];
				if (hexString) {
					selectedMasks.push(hexString);
				}
			}
		}
		
		return selectedMasks;
	},

	/**
	 * Conversion Function 2: Converts an array of hexadecimal mask strings to a decimal integer mask value.
	 * @param {string[]} maskArray - Array of hexadecimal mask strings (e.g., ["0x01", "0x02", "0x04"])
	 * @returns {number} - The combined integer mask value (e.g., 7)
	 */
	arrayToIntMask: (maskArray) => {
		if (!Array.isArray(maskArray)) {
			return 0;
		}
		
		let intMask = 0;
		
		for (const hexMask of maskArray) {
			// Use 'this' to access the map
			const maskValue = this.MASK_MAP[hexMask];
			
			if (maskValue !== undefined) {
				// Use the Bitwise OR operator (|)
				intMask |= maskValue;
			}
		}
		
		return intMask;
	}
}