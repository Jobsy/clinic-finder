[![js-semistandard-style](https://raw.githubusercontent.com/standard/semistandard/master/badge.svg)](https://github.com/standard/semistandard)  
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/standard/semistandard) 

[![Known Vulnerabilities](https://snyk.io/test/github/jobsy/clinic-finder/badge.svg)](https://snyk.io/test/github/jobsy/clinic-finder)

[![CI](https://github.com/Jobsy/clinic-finder/actions/workflows/main.yml/badge.svg)](https://github.com/Jobsy/clinic-finder/actions/workflows/main.yml)

[![Render](https://github.com/Jobsy/clinic-finder/actions/workflows/render.yml/badge.svg)](https://github.com/Jobsy/clinic-finder/actions/workflows/render.yml)

[![Snyk Security](https://github.com/Jobsy/clinic-finder/actions/workflows/snyk-security.yml/badge.svg?branch=dev)](https://github.com/Jobsy/clinic-finder/actions/workflows/snyk-security.yml)

# Clinic Finder
This project is a web application that helps users find clinics in their area. Users can search for clinics by name, state, and availability, and the application returns a list of clinics that match their criteria.

The application is built using Node.js and Express, and it uses a JSON file to store the clinic data. The search functionality is implemented using a JavaScript function that filters the clinic data based on the user's search criteria.


## What was Covered and Future Features
### Simple, clear, readable code:
> - The code is well-structured, with clear separation of concerns between the **Dockerfile**, the **docker-compose** (to containerize the application), and the application code. It follows the standard Node.js project structure and uses a package.json file to manage dependencies. 
> - The code follows some standards like using the **semistandard** code style  
> - The separation of concerns is quite clear in the code. For example, the Dockerfile is used to specify the dependencies and the runtime environment, while the actual application code is kept separate  
### Correctness:
> I have tested the application (using **Jest**) to ensure that it works as expected  
### Security:
> I have used **SYNK** to check/fix security vulnerabilities in its dependencies, which is a good practice.  
### Memory efficiency:
> It's hard to say how the application will behave with large datasets without further testing. However, Node.js is known for its good performance with large datasets.
### Testing:
> I have tested the application using **Jest** to ensure that it works as expected, but I haven't specified any metrics to measure the quality of the tests.
### Documentation:
> I have documented the code by adding comments and updating the README file. However, we could improve the documentation by adding more detailed comments or generating API documentation from the code.


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

### Running the App via Docker Compose
To run the application using Docker Compose, follow these steps:
> 1. Clone the repository:
>   ```bash
>       git clone https://github.com/oluwajoba/clinic-finder.git
>   ```
> 2. Change into the project directory:
>   ```bash
>       cd clinic-finder
>   ```
> 3. Create a new file called .env in the root directory of the project, and add the following environment variables:
>   ```bash
>      PORT=3000
>   ```
> 4. Start the application using Docker Compose:
>   ```bash
>      docker-compose up
>   ```
>   This command will start the application and display the container logs in the terminal. To stop the application, press Ctrl-C
> 5. Start the application using Docker Compose:
>   ```bash
>      docker-compose up
>   ```
> 6. You can also run Docker Compose in detached mode using the -d flag:
>   ```bash
>      docker-compose up -d
>   ```
> 7. This command will start the application in the background and return control to the terminal. To stop the application, run:
>   ```bash
>      docker-compose down
>   ```
>   This command will stop and remove the containers, networks, and volumes created by docker-compose up
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
> The **build:** job builds and deploys the application to production using Render  
> The **snyk-security** checks for dependencies vulnerabities
>
These jobs are triggered automatically on every push or pull request to the main branch. They are run on an ubuntu-latest runner, and they each have their own set of steps to execute.

You can customize this configuration file to fit your specific needs, including adding or removing jobs and modifying the steps within each job.


## Deployed Site Address
The application is also deployed on Render at the following address: https://clinic-finder-y8x9.onrender.com/
> Usage:
> Kindly follow same instructions under API endpoints


## Code Structure
The application is structured as follows:
```
├── __tests__ 
├── .github
├── data
├── logs
├── node_modules
├── services  
├── src  
│   ├── bin  
│   │   └── www  
│   ├── controller  
│   ├── routes  
│   └── app.js 
├── .gitignore 
├── docker-compose.yml  
├── Dockerfile 
├── jest.config.js  
├── package-lock.json
├── package.json  
└── README.md
```
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
