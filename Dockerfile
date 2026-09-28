FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY app ./app

RUN chown -R node:node /app

USER node

EXPOSE 8080

CMD ["node", "app/server.js"]
