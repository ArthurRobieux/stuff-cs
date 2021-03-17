FROM node:10

WORKDIR /app

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# Add app code
COPY tsconfig.json ./
COPY src ./src

COPY public ./public

EXPOSE 3000

CMD ["npm", "start"]

