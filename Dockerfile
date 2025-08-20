

# use nginx as the next base (WEB SERVER)
FROM nginx:1.28.0

# COPY built objs to nginx html path
COPY /app/build/* /var/www/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]