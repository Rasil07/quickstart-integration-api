FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN apk --no-cache add --virtual builds-deps build-base python

RUN npm install

COPY . .


EXPOSE 8302

CMD ["npm","start"]