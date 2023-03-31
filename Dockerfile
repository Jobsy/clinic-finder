# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that the application will listen on
EXPOSE 3000

# Start the application when the container starts
CMD ["npm", "start", "--", "--port", "3000"]
