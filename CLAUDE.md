# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **Appsmith application repository** - not a traditional codebase. It contains the Git-synced representation of an Appsmith low-code application. The application is edited through the Appsmith platform UI, and changes are synced to this Git repository.

**Important:** There are no build commands, test runners, or package managers. This repository stores declarative JSON configuration and JavaScript business logic that runs within the Appsmith platform.

## Accessing the Application

- **View Mode:** https://lp.appsmith.com/applications/68edbca07f897134d9d213fe/pages/68edbca07f897134d9d21400
- **Edit Mode:** https://lp.appsmith.com/applications/68edbca07f897134d9d213fe/pages/68edbca07f897134d9d21400/edit

All development work happens through the Appsmith web UI, not through local editing.

## Repository Structure

```
appsmith/
├── application.json          # App-level configuration (theme, navigation, layout)
├── metadata.json            # Schema version tracking (client v2, server v12)
├── theme.json              # UI theme definitions
├── datasources/            # API and database connection configs
│   ├── getObject.json      # REST API plugin configuration
│   └── users.json          # PostgreSQL plugin (mock mode)
├── jslibs/                 # External JavaScript libraries (jsonwebtoken@8.5.1)
└── pages/                  # Application pages (9 pages)
    └── [PageName]/
        ├── [PageName].json      # Page layout and configuration
        ├── jsobjects/           # JavaScript business logic
        │   └── [Name]/
        │       ├── [Name].js    # JavaScript code
        │       └── metadata.json
        ├── queries/             # API/database queries
        │   └── [QueryName]/
        │       ├── metadata.json
        │       └── [QueryName].txt (optional)
        └── widgets/             # UI component definitions
            └── [WidgetName].json
```

## Application Pages

1. **TopicList** (default) - Topic listing with pagination
2. **TopicDetail** - Individual topic details
3. **UCHList** - UCH listing page
4. **UCHDetail** - UCH details
5. **RewardList** - Rewards listing
6. **RewardDetail** - Reward details
7. **ChallengeList** - Challenges listing
8. **ChallengeDetail** - Challenge details
9. **BadgeNew** - Badge creation form

## Architecture Patterns

### JSObject Pattern
Business logic is encapsulated in JSObjects (similar to classes). Located in `pages/[PageName]/jsobjects/[Name]/[Name].js`:

```javascript
export default {
    // Variables (state)
    myVar1: [],
    perPageNumber: 5,

    // Async method
    async myGetTopicList() {
        const response = await getTopicList.run();
        return response.data;
    },

    // Sync method
    formatData(data) {
        return data.map(item => ({ ...item }));
    }
}
```

Access pattern: `JSObject1.myMethod()` or `JSObject1.myVar`

### Query Pattern
API and database queries are defined in `pages/[PageName]/queries/[QueryName]/`:
- Configuration in `metadata.json` (HTTP method, endpoint, pagination)
- Execute via `.run()`: `await getTopicList.run()`
- Support dynamic bindings: `{{Table1.pageNo}}`

Example query location: `pages/TopicList/queries/getTopicList/metadata.json`

### Widget Bindings
Widgets use `{{}}` syntax for dynamic data binding:
- `{{Table1.pageNo}}` - Reference widget properties
- `{{JSObject1.myVar}}` - Reference JSObject variables
- `{{appsmith.theme.borderRadius.appBorderRadius}}` - Theme values
- `{{getTopicList.data}}` - Query results

### Page Communication
- Use `storeValue('key', value)` to share data between pages
- Use `appsmith.store.key` to read shared values
- Navigation via `navigateTo('PageName')`

## Key JavaScript Files

Large JSObject files by line count:
- `pages/UCHList/jsobjects/getUchMock/getUchMock.js` (2,169 lines) - Mock UCH data
- `pages/TopicDetail/jsobjects/Constants/Constants.js` (1,501 lines) - Country code constants
- `pages/BadgeNew/jsobjects/JSObject1/JSObject1.js` (195 lines) - Badge creation logic
- `pages/ChallengeDetail/jsobjects/JSObject1/JSObject1.js` (113 lines) - Challenge detail logic

## Data Sources

**REST API (getObject):**
- Base URL: `https://api-admin-staging-us.huami.com`
- Staging environment
- Queries include authorization headers

**PostgreSQL (users):**
- Currently in mock mode (`"isMock": true`)
- No real database connection active

## External Libraries

jsonwebtoken@8.5.1 available globally:
- `jwt.decode(token)`
- `jwt.verify(token, secret)`
- `jwt.sign(payload, secret)`

Library config: `jslibs/jsonwebtoken_R-en4yhR_KagWn2YEBISYQlpovIiz0ETtKo4MJ8RCmQ.json`

## Git Workflow

This repository uses Appsmith's Git-sync feature:

1. **Making Changes:**
   - Edit the application in Appsmith's Edit Mode (see URL above)
   - Changes auto-sync to this repository when Git-sync is configured
   - Or manually commit changes from the repository

2. **Pulling Changes:**
   - When others edit the application, their changes appear in this repository
   - Pull changes: `git pull origin master`
   - Appsmith will sync changes into the application

3. **Branch Strategy:**
   - Main branch: `master`
   - Clean working directory (no uncommitted changes)

## Schema Versions

Located in `metadata.json`:
- **Client Schema:** v2
- **Server Schema:** v12
- **File Format:** v5

These must match the Appsmith platform version. If upgrading Appsmith, these versions will be automatically updated.

## Common Development Workflow

1. **Access Edit Mode** in browser (URL above)
2. **Make Changes** to pages, queries, or JSObjects in Appsmith UI
3. **Test Changes** directly in the Appsmith platform
4. **Commit via Appsmith Git UI** or manually commit to this repository
5. **Deploy** through Appsmith platform (Deploy button in UI)

## Limitations

- **No Local Execution:** Cannot run this application locally outside Appsmith
- **No npm/yarn Commands:** Dependencies managed by Appsmith platform
- **No Build Process:** Application runs in Appsmith's runtime environment
- **UI Editing:** Widget layout requires Appsmith's visual editor
- **Testing:** Manual testing through the Appsmith platform UI

## Modifying Code

**JSObject Files (.js):**
- Can be edited directly in this repository
- Changes will sync to Appsmith on next pull
- Syntax: ES6+ JavaScript
- Export default object with variables and methods

**JSON Configuration Files:**
- Can be edited carefully (maintain valid JSON)
- Widget properties, query configs, datasource settings
- Breaking changes may cause UI issues in Appsmith

**Best Practice:** Make significant changes through the Appsmith UI rather than directly editing JSON files, as the UI validates configurations.
