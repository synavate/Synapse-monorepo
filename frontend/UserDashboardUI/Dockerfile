FROM node:21
WORKDIR /app
COPY . .
RUN npm i
RUN npm build
EXPOSE 3001

CMD [ "npm" , "start:dev" ]