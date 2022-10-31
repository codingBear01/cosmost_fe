# pull official base image
FROM node:16.18.0

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install

# add app
COPY . .

# Make port 3000 available to the world outside this container
ENV TZ Asia/Seoul
EXPOSE 3000

# start app
CMD ["npm", "start"]