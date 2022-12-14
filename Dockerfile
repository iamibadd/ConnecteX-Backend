# # mac m1 chip
# FROM --platform=linux/amd64 node:18.12.1-alpine3.16
# any other machines
FROM node:18.12.1-alpine3.16
# best practice
USER root
# execution folder
WORKDIR /app
# copy all files from host to source (container)
COPY . /app
# docker node modules path
ENV PATH /app/node_modules/.bin:$PATH
# port
ENV PORT 80
# look for any change in package.json file and then only run the below two commands
COPY package.json /app/package.json
# install latest node version
RUN npm -g install npm@latest
# install dependencies
RUN npm install
# starts the application
CMD ["npm", "start"]

# see running container directories
# docker exec -it kind_goldberg /bin/sh
# -t means name of your image : means a tag or version . means DockerFile is in current directory
# docker build -t fyp-backend:1.0 .
# docker run -p osPort:dockerPort imageId
# docker rmi -f imageId
# docker rm -f containerId
# docker exec containerId stop
# docker kill --signal=SIGTERM containerId
# docker stop -t time containerId
# stop all containers
# docker stop $(docker ps -aq)
# remove all containers
# docker rm $(docker ps -aq)
# remove all images
# docker rmi $(docker images -q)
