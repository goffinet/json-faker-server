FROM node:current-alpine

WORKDIR /data

COPY /code /data

EXPOSE 3000

ENTRYPOINT sh /data/run.sh
