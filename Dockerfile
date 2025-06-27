FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY . /usr/share/nginx/html

RUN printf 'add_header Cache-Control "public, max-age=60";\n' > /etc/nginx/conf.d/cache-control.conf

EXPOSE 80