FROM node:16-slim AS builder

WORKDIR /app

RUN apt-get update
RUN apt-get install -y openssl libssl-dev 
RUN npm install -g npm@8.19.1

COPY . .

RUN npm install --force --silent
RUN npm install -g nodemon

EXPOSE 3000

CMD [ "npm", "run", "start" ]  