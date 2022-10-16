FROM node:16-slim AS builder


WORKDIR /app

RUN apt-get update
RUN apt-get install -y openssl libssl-dev 
RUN npm install -g npm@8.19.1

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait

ADD startup.sh /startup.sh  

COPY . . 

RUN chmod +x startup.sh 
RUN npm install --force --silent
RUN npm install -g nodemon

EXPOSE 3000

CMD /wait && /startup.sh 