FROM ubuntu
MAINTAINER diallo
RUN apt-get update
RUN apt-get install -y nginx
EXPOSE 8080
ADD visagesAnimesjs/ /var/www/html/
ENTRYPOINT ["/usr/sbin/nginx", "-g", "daemon off;"]
