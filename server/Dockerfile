FROM node:14.16.0

WORKDIR /app

COPY ./src/package.json ./
COPY ./src/package-lock.json ./

RUN npm i

WORKDIR /app/screen

COPY ./src/screen/package.json ./
COPY ./src/screen/package-lock.json ./

RUN npm i

WORKDIR /app

COPY ./src/ ./

RUN npm run screen-build
RUN npm run server-build

ENTRYPOINT ["npm", "run"]
CMD ["start"]