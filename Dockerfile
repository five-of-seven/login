FROM node:6-alpine

# Some image metadata
LABEL version="0.1"
LABEL description="This is login service for Community app, which will allow the user to login with an existing account"



# Environment variables
ENV PORT=50000


# Create login app directory
RUN mkdir -p /usr/microservice/login/

# From now one we are working in /usr/microservice/login/
WORKDIR /usr/microservice/login/

# Install api dependencies
COPY package*.json ./

# Run build if necessary with devDependencies then clean them up
RUN npm install

# Copy source code
COPY . .


EXPOSE 50000

# The following command will use NODE_ENV to run pm2-docker or pm2-dev
CMD ["npm", "start"]