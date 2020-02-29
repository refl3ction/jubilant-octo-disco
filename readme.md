# Jubilant Octo Disco
Helper tool to schedule API calls based on a config file

## Getting Started

### Features

- Execute requests to URL within the given interval

### Requirements
- node v12.14.1

### Install

```sh
# Source
git clone git@github.com:dpolicastro/jubilant-octo-disco.git
npm install

# Docker
docker build -t jubilant-octo-disco .
```

### Usage
```sh
export URL=http://google.com
export INTERVAL=3000
node src/app.sh

# OR
docker run --name jod -e URL='http://google.com' -e INTERVAL=3000 dpolicastro/jubilant-octo-disco:latest
```

