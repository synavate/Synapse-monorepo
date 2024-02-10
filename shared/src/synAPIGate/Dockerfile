# syntax=docker/dockerfile:1

# Build stage
FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG BUILD_ENV=production
ENV NODE_ENV=${BUILD_ENV}
RUN if [ "$BUILD_ENV" = "production" ]; then npm run build; else echo "Skipping build"; fi

# Production stage
FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app ./
RUN adduser -D appuser && chown -R appuser /app
USER appuser
EXPOSE 3000
CMD ["node", "app.js"]
