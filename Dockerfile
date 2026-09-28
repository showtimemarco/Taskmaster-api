FROM node:18

WORKDIR /app

COPY --chown=node:node package*.json ./

USER node

RUN npm ci --omit=dev

COPY --chown=node:node app ./app

EXPOSE 8080

CMD ["node", "app/server.js"]
