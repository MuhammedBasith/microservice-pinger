import dotenv from 'dotenv';
dotenv.config();

// Import necessary libraries
import fetch from 'node-fetch';
import https from 'https';

// Create an HTTPS agent to disable SSL verification (for dev purposes only)
const agent = new https.Agent({
    rejectUnauthorized: false, // Disable SSL certificate validation
});

// List of URLs from environment variables
const urls = [
    process.env.VITE_APP_AUTHENTICATION_MICROSERVICE_BACKEND,
    process.env.VITE_APP_TRAINING_REQUIREMENTS_MICROSERVICE_BACKEND,
    process.env.VITE_APP_TRAINER_MICROSERVICES_URL,
    process.env.VITE_APP_EMPLOYEE_MANAGEMENT_MICROSERVICE,
    process.env.VITE_APP_BATCH_MANAGEMENT_MICROSERVICE,
    process.env.VITE_APP_TRAINING_PROGRESS_MICROSERVICE,
    process.env.VITE_APP_AI_SUMMARY_GENERATION_MICROSERVICE
];

// Function to ping a URL
const pingUrl = async (url) => {
    try {
        const response = await fetch(url, { 
            method: 'GET',
            agent: agent // Use the custom agent to bypass SSL validation
        });

        if (response.ok) {
            console.log(`Success: ${url} is up and running.`);
        } else {
            console.log(`Error: ${url} returned status ${response.status}.`);
        }
    } catch (error) {
        console.log(`Error: Could not reach ${url}.`, error);
    }
};

// Function to ping all URLs
const pingAllUrls = () => {
    urls.forEach(pingUrl);
};

// Ping all URLs every 20 seconds
setInterval(pingAllUrls, 20000); // 20000 milliseconds = 20 seconds
