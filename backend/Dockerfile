# Choosing the stable image of node
FROM node:18-alpine

# setting the working directory in container
WORKDIR  /

# Copy package.json to the homo directory of container
COPY package*.json .

# installing all the neccessary dependencies on container
RUN npm install
# RUN npm ci

# Copying remaining project files into container
COPY . .

EXPOSE 8080

# Start the Vite development server
CMD ["npm","start"]

