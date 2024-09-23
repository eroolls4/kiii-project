# Use node image
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose the port (make sure it matches your backend port)
EXPOSE 5000

# Start the Node.js server
CMD ["npm", "start"]
