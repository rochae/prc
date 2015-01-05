#! /bin/sh

mongorestore -h localhost --port 8081 -d pace   ../db/dump/pace
mongorestore -h localhost --port 8081 -d meteor ../db/dump/meteor
mongorestore -h localhost --port 8081 -d local  ../db/dump/local

