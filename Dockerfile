FROM maven:3.8-openjdk-11

CMD mvn clean package

EXPOSE 8080