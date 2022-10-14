# Server Mockup

This is a very bare-bones "I don't care. Just give me something to bounce signals against" test server.

License: MIT

## Quick way to run this...

npm i

sh run_server.sh

...or...

sh run_container.sh

## Supports

- Axios REST client
- Express server
- Basic working form (src/srcWeb/testForm.html)
- Run-time code changes via nodemon
- Docker

## How to send requests to it:

### src/helperServerExpressAddCommands.js

- This has the express server sub paths and response definitions

### src/helpersServers/helperServerExpress.js

- The server defaults to 8080
- Server shouldn't have cors errors
- It auto-parses json requests

## Speed and anti-frustration features

### Mounted node_modules_docker

node_modules_docker mounts in the container as 'node_modules', this makes it so
the docker container can retain packages between instances without overwriting the
packages in the host-system's node_modules.

I'm pretty sure there's someone out there with reasons why not to do this, but none
of the packages here have had issues with it.

With the current setup, every subsequent run after the first will act as if the package
is mostly already built.

All Dockerfile 'COPY' commands are limited to just individual files.

### Script-based container management

Obviously, this will raise the question: "Why not use docker-compose?"

Docker-compose doesn't reliably refresh copied source files between runs and often needs 
supplementary clean-up scripts regardless.

With that said, the src directory is mounted, so the only files truly susceptible to this
issue in this context is the project root-dir level files.



























































