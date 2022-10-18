FROM node:16.18.0

WORKDIR /app

# copy package files from local to /app
COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

# when this image gets started this command gets run
CMD ["npm", "start"]

