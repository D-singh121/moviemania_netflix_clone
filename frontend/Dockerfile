# Choosing the stable image of node
FROM node:18-alpine

# setting the working directory in container
WORKDIR  /app

# Copy package.json to the homo directory of container
COPY package*.json .

# installing all the neccessary dependencies on container
RUN npm install

# Copying remaining project files into container
COPY . .

EXPOSE 5173

# Start the Vite development server
CMD ["npm","run","dev"]

