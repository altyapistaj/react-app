FROM public.ecr.aws/docker/library/node:alpine
WORKDIR /app


COPY package*.json ./
COPY build ./build
COPY node_modules ./node_modules

EXPOSE 3000
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
