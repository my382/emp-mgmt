FROM node

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm ci

COPY server.js ./

EXPOSE 8082

CMD ["node", "server.js"]

