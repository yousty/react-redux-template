FROM node:13.1

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install --silent

# Copying source files
COPY . .

# Run tests in CI mode
RUN CI=true npm test

# Building appvh
RUN npm run build
RUN npm install -g serve
EXPOSE 80
CMD ["serve", "-p", "80", "-s", "build"]