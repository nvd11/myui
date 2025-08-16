# use node.js image as base， # As builder means to create an alias
FROM node:16-alpine AS builder

# set working path
WORKDIR /app

# copy package.json & package-lock.json to working path
COPY package*.json .

# install dependencies
RUN npm install

# copy source codes files
COPY . ./

# build react application
RUN rpm run build

# use nginx as the next base (WEB SERVER)
FROM nginx:alpine

# COPY built objs to nginx html path
COPY --from=builder /app/build /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]