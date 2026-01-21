FROM node:20-alpine
WORKDIR /app

RUN npm install -g serve

COPY build ./build
COPY node_modules ./node_modules
COPY server.js .

EXPOSE 3000
CMD ["node", "server.js"]
