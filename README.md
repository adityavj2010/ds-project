#GETTING STATED

Install Docker 

Run the following

docker build -t IMAGE_NAME .

Application port is 8080 so keep the second parameter as 8080 always
docker run -dp SERVER_PORT:8080 IMAGE_NAME 

#Build from docker hub image

Run the following after installing docker

docker run -dp SERVER_PORT:8080 adityavj2010/first-image 


