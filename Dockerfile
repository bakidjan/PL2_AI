FROM ubuntu
MAINTAINER diallo
RUN apt-get update
RUN apt-get install -y nginx 
RUN apt-get install -y git
EXPOSE 80
RUN rm -Rf /var/www/html/*
Run git clone https://github.com/bakidjan/PL2_AI.git /var/www/html
#RUN mv /var/www/html/visagesAnimesjs/visagesAnime.html /var/www/html/visagesAnimesjs/index.html
RUN mv /var/www/html/visagesAnimesjs/* /var/www/html
#RUN mv /var/www/html/visagesAnimesjs/visagesAnime.html /var/www/html/visagesAnimesjs/index.html
#ADD visagesAnimesjs/ /var/www/html/
ENTRYPOINT ["/usr/sbin/nginx", "-g", "daemon off;"]
