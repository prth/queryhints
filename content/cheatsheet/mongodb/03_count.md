---
slug: mongodb-count
order:
  list: 3
template: cheatsheet
title: Count
dbs:
  - mongodb
content: |
  db.collection.count();
  db.collection.count({ field1: { $exists: false } });
  db.collection.count({ field1: /abc/i });
---
