FROM node:18.12.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install express
RUN npm install nodemon

COPY . .

CMD ["npm", "start"]