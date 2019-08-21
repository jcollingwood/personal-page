# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package*.json ./
RUN npm install
COPY . ./

# start app
EXPOSE 3000
CMD ["npm", "start"]
