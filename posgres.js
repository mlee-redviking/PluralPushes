#!/bin/bash

NAME="pgadmin4"

docker stop $NAME
docker rm $NAME
docker run \
        -d \
        -e "PGADMIN_DEFAULT_EMAIL=test@test.com" \
        -e "PGADMIN_DEFAULT_PASSWORD=123456" \
    -e "HOST=0.0.0.0" \
        -v "/data/pgadmin4/:/var/lib/pgadmin" \
        -p 5050:80 \
        --name $NAME \
        --restart=always \
        dpage/pgadmin4:4.12