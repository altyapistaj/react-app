FROM public.ecr.aws/docker/library/node:alpine
WORKDIR /app

RUN npm install -g serve
RUN serve -s build

COPY build ./build
COPY node_modules ./node_modules
COPY server.js .

EXPOSE 3000
CMD ["node", "server.js"]
