# NodeJS Hello World

This is a simple NodeJS hello world application written to run inside a docker environment. It is built upon the [mhart/alpine](https://hub.docker.com/r/mhart/alpine-node/) image to be as small as possible and attempts to remain as small as possible by not including any modules/libraries.

This will create a docker image that, when run, listens for HTTP traffic on port 80 (inside the container) and responds to all well formed requests with the plain text "hello world". It can therefore be helpful for ensuring that docker configurations are correct - such as ensuring traffic is reaching a similarly configured docker container - pointing to errors inside application configuration.
