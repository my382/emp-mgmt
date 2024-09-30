FROM node

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm ci

COPY . ./

COPY server.js ./

EXPOSE 8082

CMD ["npm", "start"]

