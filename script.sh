#!/bin/bash

export DEFAULT_PORT=$1
export DEFAULT_DB_NAME=$2

# Setup env file
rm .env
touch .env

echo "PORT=$DEFAULT_PORT"  | tee -a .env
echo "DBNAME=$DEFAULT_DB_NAME"  | tee -a .env

# Create postges database
createdb -h localhost -p 5432 $DEFAULT_DB_NAME

# Install npm dependencies
npm install