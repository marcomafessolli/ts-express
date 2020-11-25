FROM node:alpine

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY . ./

RUN yarn

EXPOSE 3000 4000

CMD ["yarn", "start"]