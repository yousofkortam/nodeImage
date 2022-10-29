FROM alpine

WORKDIR /FirstTask

COPY index.js .

RUN apk add --update nodejs npm

EXPOSE 8000

CMD node index.js