

# use nginx as the next base (WEB SERVER)
FROM nginx:alpine

# COPY built objs to nginx html path
COPY /app/build/* /var/www/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]