FROM node:16.14.2

EXPOSE 3000

WORKDIR /app

CMD yarn install && yarn client
