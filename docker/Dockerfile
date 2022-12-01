FROM ubuntu
ENV JAVA=relationship-0.0.1-SNAPSHOT.jar
ENV NEXT=next
RUN apt-get update && apt-get upgrade -y \
  && apt-get install -y default-jre curl
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
  apt-get install -y nodejs
WORKDIR /srv
COPY $JAVA .
COPY $NEXT .
RUN java -jar $JAVA
RUN node ./next/standalone/server.js