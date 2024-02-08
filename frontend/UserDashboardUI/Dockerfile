FROM node:21-alpine as builder

# Set the working directory
WORKDIR .
COPY ./src/package*.json ./


# Install dependencies
RUN npm install

COPY . .

# Build your application
RUN tsc

# Stage 2
FROM node:21-alpine

WORKDIR /src/app
COPY --from=builder ./app ./ 

EXPOSE 3069

CMD [ "npm" , "start:dev" ]

