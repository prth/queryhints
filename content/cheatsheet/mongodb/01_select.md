---
slug: mongodb-select
order:
  list: 1
template: cheatsheet
title: Select
dbs:
  - mongodb
content: |
  db.collection.find();
  db.collection.find({}. { field1: 1, field2: 1 });
  db.collection.distinct(field1);
  db.collection.find().limit(10);
---
