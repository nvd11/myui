

# use nginx as the next base (WEB SERVER)
FROM ubuntu:latest

RUN apt-get -y update && apt-get -y install nginx
# COPY built objs to nginx html path
RUN rm -rf /etc/nginx/sites-enabled/default
RUN mkdir -p /var/www/html/myui
COPY ./build/ /var/www/html/myui

COPY nginx_conf/myui.conf /etc/nginx/conf.d/myui.conf


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]