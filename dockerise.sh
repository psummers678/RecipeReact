#!/bin/bash
docker build -t recipereact .
docker run --rm -p 3000:3000 recipereact:latest