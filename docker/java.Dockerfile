FROM openjdk:11
ENV JAVA=relationship-0.0.1-SNAPSHOT.jar
WORKDIR /tmp
COPY $JAVA .
CMD [ "java","-jar","relationship-0.0.1-SNAPSHOT.jar" ]   