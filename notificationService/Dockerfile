# Define from what image we want to build from.
FROM node:10.15.3-alpine

# Developer name (Optional)
LABEL Maintainer="Priyanka.Saha2"

# Set environment variables - like API urls/Port etc.
ENV PORT 3003
ENV MONGO_URL mongodb://localhost:27017/keep

# Create app directory to hold the application code inside the image
# this will be the working directory for your application
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install all npm packages
RUN npm install

# Bundle your app's source code inside the Docker image
COPY . .

# Port to connect to application - used in appConfig.js
EXPOSE ${PORT}

# Define the command to run your app which defines your runtime, like 'npm start'
CMD [ "npm", "start" ]