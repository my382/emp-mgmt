FROM node:16

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY server.js ./

COPY . ./

EXPOSE 8082

CMD ["npm", "start"]

