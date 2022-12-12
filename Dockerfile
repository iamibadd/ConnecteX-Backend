FROM node:18-alpine
# best practice
USER root
# execution folder
WORKDIR ./app
# port
ENV PORT 5000
# look for any change in package.json file and then only run the below two commands
COPY package.json .
# install latest node version
RUN npm -g install npm@latest
# install dependencies
RUN npm install
# copy all files from host to source (container)
COPY . .
# starts the application
CMD ["npm", "start"]
# -t means name of your image : means a tag or version . means DockerFile is in current directory
# docker build -t fyp-backend:1.0 .
# docker run -p osPort:dockerPort imageId
# docker rmi -f imageId
# docker rm -f containerId
# docker exec containerId stop
# docker kill --signal=SIGTERM containerId
# docker stop -t time containerId
# docker container prune
