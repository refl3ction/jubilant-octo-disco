FROM node:12.15-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY *.json ./

RUN npm install --only=production

COPY ./src ./src

CMD ["node", "src/app.js"]
