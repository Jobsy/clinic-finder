# Clinic Finder
This project is a web application that helps users find clinics in their area. Users can search for clinics by name, state, and availability, and the application returns a list of clinics that match their criteria.

The application is built using Node.js and Express, and it uses a JSON file to store the clinic data. The search functionality is implemented using a JavaScript function that filters the clinic data based on the user's search criteria.


## Getting Started
### Running the App via Local
To get started with the application, you'll need to have Node.js installed on your computer. You can download it from the official website: https://nodejs.org/en/.

After installing Node.js, you can clone the repository and install the dependencies using the following commands:
>
> git clone https://github.com/Jobsy/clinic-finder.git
> cd clinic-finder
> npm install
>

Once the dependencies are installed, you can start the application using the following command:
>
> npm start
>

This will start the server and make the application available at http://localhost:3000  

### Running the App via Docker
>
> 1. To run the app, you'll need to have Docker installed on your computer. It can be downloaded from the Docker website if not already installed: https://www.docker.com/products/docker-desktop
> 2. Open a terminal or command prompt   
> 3. Run the following command to log in to Docker Hub:
>   ```bash
>       docker login
>   ```
> 4. Enter Docker Hub credentials (username and password) to complete the login process  
> 5. Once logged in, run the following command to pull the clinic-finder:latest image from your repository:
>   ```bash
>       docker pull oluwajoba/clinic-finder:latest
>   ```
> 6. Wait for the image to download. This may take a few minutes depending on the internet connection speed  
> 7. Once the image has finished downloading, run it using the following command:
>   ```bash
>       docker run -p 3000:3000 oluwajoba/clinic-finder:latest
>   ```
> 8. This will start a new container running the clinic-finder:latest image on port 3000
>
That's it! Once they've completed these steps, you should be able to access the application by navigating to http://localhost:3000 in your web browser


## Testing
The application includes a suite of Jest tests that can be run using the following command:
>
> npm test
> 

The tests cover a variety of scenarios, including error handling and filtering of clinic data based on search criteria.


## API Endpoints
The application includes the following API endpoint:

### GET /clinics
This endpoint returns a list of clinics based on the user's search criteria. The search criteria can be provided as query parameters in the URL. The available query parameters are:
>
> **name:** The name of the clinic to search for  
> **state:** The state where the clinic is located  
> **availability:** The availability of the clinic  
>
If no query parameters are provided, the endpoint returns all clinics in the data file.

## CI/CD
This project includes a continuous integration and delivery (CI/CD) pipeline using GitHub Actions. The pipeline is defined in the .github/workflows/ci-cd.yaml file and consists of the following jobs:
>
> The **super-linter:** job runs the Super-Linter to check for linting errors across all files in the repository  
> The **unit-tests:** job runs the unit tests using Jest for the application  
> The **build:** job builds and deploys the application to production using Google Cloud Platform  
>
These jobs are triggered automatically on every push or pull request to the main branch. They are run on an ubuntu-latest runner, and they each have their own set of steps to execute.

You can customize this configuration file to fit your specific needs, including adding or removing jobs and modifying the steps within each job.

## Code Structure
The application is structured as follows:
>
> **data/:** Contains the fetched JSON file that stores the clinic data  
> **services/:** Contains the search function that filters the clinic data based on the user's search criteria  
> **src/:** Contains the source code of the application  
> **src/app.js:** Is the entry point of the application  
> **src/routes/:** Contains the application's API routes  
> **src/controllers/:** Contains the application's controllers functions that handle the API requests and responses  
> **tests/:** Contains the application's tests  
> **package.json:** Contains the dependencies and other metadata for the application  
> **README.md:** Contains the documentation for the application  
>


## Conclusion
That's it! You should now have a good understanding of how the Clinic Finder application works and how you can use it to search for clinics in your area. Feel free to experiment with the code and add your own features to the application.
