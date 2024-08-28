# Pull the base image 
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy pnpm package files
COPY pnpm-lock.yaml .
COPY package.json .

# Install pnpm globally and install dependencies
RUN npm install -g pnpm
RUN pnpm install

# Install Mantine library
RUN pnpm add @mantine/core

# Copy your project files into the docker container
COPY . .

# Open port 3000 for our application
EXPOSE 3000

# Start the project with npm start as you would do locally
CMD ["pnpm", "run", "dev"]