#!/bin/zsh
#
# Defs
#
NAME_CONTAINER="server_api_test"
NAME_IMAGE=$NAME_CONTAINER
#
# Clean-up
#
docker rm -f $NAME_CONTAINER
docker rmi $NAME_IMAGE
echo "y" | docker images prune
#
# Build
#
docker build --tag $NAME_IMAGE .
#
# Run
#
docker run -it \
  --name $NAME_CONTAINER \
  -p 8000:8000 \
  -v "$(pwd)/src":/server_basic_test/src \
  -v "$(pwd)/node_modules_docker":/server_basic_test/node_modules \
  -v "$(pwd)/entrypoint.sh":/server_basic_test/entrypoint.sh \
  "$NAME_IMAGE" \
  "/bin/sh /server_basic_test/entrypoint.sh"















































