---
slug: mongodb-update
order:
  list: 5
template: cheatsheet
title: Update
dbs:
  - mongodb
content: |
  db.collection.update(
    { field1: 'value1' }, 
    { $set: { field1: new_value1 } }
  );
  db.collection.update(
    { field1: 'value2' }, 
    { $unset: { field2: '' } }, 
    { multi: true }
  );
---
