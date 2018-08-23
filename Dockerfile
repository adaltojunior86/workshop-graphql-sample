FROM mongo:latest

CMD ["mongod", "--storageEngine", "wiredTiger"]
