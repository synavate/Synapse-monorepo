# Use the official Node.js 16 as a parent image
FROM node:16-buster

# Create and set the working directory
WORKDIR /workspace

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your project's code into the container
COPY . .

# Use a non-root user for security best practices
RUN useradd -m synapse-core && \
    chown -R synapse-core /workspace
USER synapse-core

# Expose the port your app runs on
EXPOSE 3000

# Command to run your app
CMD ["npm", "start"]
