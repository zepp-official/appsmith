export default {
    
    // Check the hostname to determine the environment
    // When you deploy your app, Appsmith gives it a unique URL.
    // We can use a part of that URL (the project name) to detect the environment.
    
    setEnvironment: async () => {
        // Example: If your Test URL is 'https://app.appsmith.com/app/test-project/page-id'
        // and your Prod URL is 'https://app.appsmith.com/app/prod-project/page-id'
        
        const path = appsmith.URL.pathname; // e.g., /app/test-project/page-id
        let env;

        if (path.includes('zepp-admin-dev')) {
            env = 'TEST';
        } else if (path.includes('zepp-admin-prod')) {
            env = 'PROD';
        } else {
            // Default to test if uncertain
            env = 'TEST'; 
        }

        // Store the environment globally, accessible on all pages
        await storeValue('CURRENT_ENV', env);
        await storeValue('API_BASE_URL', (env === 'PROD') ? 'https://api-admin-cn3.zepp.com' : 'https://api-admin-staging-us.huami.com');
				// await storeValue('API_BASE_URL', (env === 'PROD') ? 'https://api-admin-cn3.zepp.com' : 'https://api-admin-cn3.zepp.com');
    }
}