

# use nginx as the next base (WEB SERVER)
FROM ubuntu:latest
RUN apt-get -y update && apt-get -y install nginx
# COPY built objs to nginx html path
COPY ./build/* /var/www/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]