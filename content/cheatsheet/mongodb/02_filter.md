---
slug: mongodb-filter
order:
  list: 2
template: cheatsheet
title: Filter
dbs:
  - mongodb
content: |
  db.collection.find({ field1: { $exists: false } });
  db.collection.find({ field1: { $eq: null } });
  db.collection.find({ 
    field1: { $gte: 123 },
    $or: [{ field2: { $eq: false } }, { field3: { $ne: 'abc' } }]
  });
  db.collection.find({ field1: { $in: [1, 2, 3] } });
  db.collection.find({ field1: { $gte:100, $lte: 200 } });
  db.collection.find({ field1: /abc/i });
---
