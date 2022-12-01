FROM node
WORKDIR /srv
COPY public ./public
COPY standalone ./
COPY static ./.next/static
CMD [ "node","server.js" ]
