# DS Project Phase 1

## Description
We are using basic client server model and communication is taking place using rest api. For front-end we have used react.js and bootstrap for styling. For back-end we have used node.js and express.js For DB we have used simple text files.

While deploying, we have used node.js backend itself to deploy the react based front-end
Front-end and backend are running on the same port 8080 in the docker container. The backend apis have a pre-text 'api'.

Client server interacts through REST api. All the messages from the client are retained irrespective of the state of the server.

![Project1Phase1](https://user-images.githubusercontent.com/17945003/134568587-9823a828-4c7e-4b0f-b9b9-9e94ebede52e.png)


## GETTING STATED

# Install Via Docker 

Run the following
Building the image 
docker build -t IMAGE_NAME .

Running the image
Application port is 8080 so keep the second parameter as 8080 always
docker run -dp SERVER_PORT:8080 IMAGE_NAME 

## Build from docker hub image

Run the following after installing docker

docker run -dp SERVER_PORT:8080 adityavj2010/first-image 

# Starting development setup
For development we will need Node v14.17.4
Run npm install, npm run build, node server.js




