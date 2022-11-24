FROM node:16-alpine

WORKDIR /app

COPY ./src /app/src

COPY .env /app

COPY package*.json /app

RUN npm install

COPY . .

