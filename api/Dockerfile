FROM node:18.18.2

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install 

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "start"]