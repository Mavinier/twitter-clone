FROM node:lts-alpine as builder
ENV NODE_ENV=development

WORKDIR /app

COPY . .

RUN npm ci
run npm install

EXPOSE 3000
CMD ["npm", "start"]