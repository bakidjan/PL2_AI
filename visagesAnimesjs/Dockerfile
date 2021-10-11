FROM ubuntu
MAINTAINER diallo
RUN apt-get update
RUN apt-get install -y nginx
EXPOSE 8080
ADD static-website-example/ /var/www/html/
ENTRYPOINT ["/usr/sbin/nginx", "-g", "daemon off;"]
