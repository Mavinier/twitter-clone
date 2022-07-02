FROM node:lts-alpine
ENV NODE_ENV=development

WORKDIR /backend

COPY . .

RUN npm ci

EXPOSE 6010

CMD ["npm", "start"]
