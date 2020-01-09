FROM mongo
COPY init.json /init.json
CMD mongoimport --host mongodb --db testdb --collection user --type json --file /init.json