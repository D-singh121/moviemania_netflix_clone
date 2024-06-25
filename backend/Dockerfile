# Choosing the stable image of node
FROM node:18-alpine

# setting the working directory in container
WORKDIR  /app

# Copy package.json to the homo directory of container
COPY package*.json ./

# installing all the neccessary dependencies on container
RUN npm install
# RUN npm ci

# Copying remaining project files into container
COPY . .

# Start the Vite development server
CMD ["npm","start"]
