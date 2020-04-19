---
slug: mongodb-aggregation
order:
  list: 4
template: cheatsheet
title: Aggregation
dbs:
  - mongodb
content: |
  db.collection.aggregate([
    { $group: { _id: '$field1', count: { $sum: 1 } } }
  ]);

  db.collection.aggregate([
    { 
      $group: { 
        _id: { field1: '$field1', field2: '$field2' }
        field3Avg: { $avg: '$field3' } 
      }
    } 
  ]);

  db.collection.aggregate([
    { $match: { field3: 'abc' } },
    { $group: { _id: '$field1', field2Sum: { $sum: '$field2' } } }
  ]);
---
