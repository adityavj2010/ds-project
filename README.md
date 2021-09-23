# DS Project Phase 1
## Description
We are using basic client server model and communication is taking place using rest api
For front-end we have used react.js and bootstrap for styling
For back-end we have used node.js and express.js
For DB we have used simple text files

While deploying, we have used node.js backend itself to deploy the react based front-end
Front-end and backend are running on the same port 8080 in the docker container. The backend apis have a pre-text 'api'.


## GETTING STATED
Install Docker 

Run the following
Building the image 
docker build -t IMAGE_NAME .

Running the image
Application port is 8080 so keep the second parameter as 8080 always
docker run -dp SERVER_PORT:8080 IMAGE_NAME 

## Build from docker hub image

Run the following after installing docker

docker run -dp SERVER_PORT:8080 adityavj2010/first-image 


