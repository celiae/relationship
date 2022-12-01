FROM mysql
ENV SQL=relationship.2022-12-01-15-16.sql.gz
ENV MYSQL_ROOT_PASSWORD=z
ENV MYSQL_DATABASE=relationship
COPY $SQL /docker-entrypoint-initdb.d 