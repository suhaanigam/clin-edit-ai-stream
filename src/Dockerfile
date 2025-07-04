FROM node:18

WORKDIR /app

# Copy package.json and lock files from root context (one level up relative to Dockerfile)
COPY package.json package-lock.json tsconfig.json eslint.config.js tsconfig.app.json tsconfig.node.json vite.config.ts  tailwind.config.ts postcss.config.js components.json index.html ./


RUN npm install

# Copy the frontend source code (src folder)
COPY src/ ./src/

EXPOSE 8080

CMD ["npm", "run", "dev"]
