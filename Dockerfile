

# use nginx as the next base (WEB SERVER)
FROM nginx:alpine

RUN apt-get -y update && apt-get -y install nginx
# COPY built objs to nginx html path
RUN rm -rf /usr/share/nginx/html/*
 COPY ./build/* /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]