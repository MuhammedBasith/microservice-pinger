# microservice-pinger

A simple service to periodically ping multiple microservices to check if they are alive and accessible. This is useful for monitoring and ensuring the availability of different microservices in a distributed system.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/MuhammedBasith/microservice-pinger.git
   cd microservice-pinger
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the URLs of your microservices:
   ```bash
   VITE_APP_AUTHENTICATION_MICROSERVICE_BACKEND=https://your-microservice-url
   VITE_APP_TRAINING_REQUIREMENTS_MICROSERVICE_BACKEND=https://another-url
   # Add all the URLs for your microservices here
   ```

4. Run the pinger:
   ```bash
   npm start
   ```

## Notes

- The tool will print out the status of each microservice, indicating if it's up and running or if there was an issue.
- If you are encountering SSL certificate issues during development, you can modify the code to skip SSL validation (this is not recommended for production).
```

### 5. Run the service

- After setting up the repository and creating the `.env` file with the URLs of the services you want to ping, run:

```bash
npm start
```

This will initiate the pinger and print the status of each microservice based on whether it's up and reachable.