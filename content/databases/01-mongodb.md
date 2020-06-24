---
order:
  list: 1
template: database
slug: /db/mongodb
title: MongoDB
queryViewerLanguage: js
---

#### Select

```javascript
db.collection.find({})
db.collection.find({}, { field1: 1, field2: 1 })
db.collection.distinct("field1")
db.collection.find().limit(10)
```

#### Filter

```javascript
db.collection.find({ field1: { $exists: false } })
db.collection.find({ field1: { $eq: null } })
db.collection.find({
  field1: { $gte: 123 },
  $or: [{ field2: { $eq: false } }, { field3: { $ne: "abc" } }],
})
db.collection.find({ field1: { $in: [1, 2, 3] } })
db.collection.find({ field1: { $gte: 100, $lte: 200 } })
db.collection.find({ field1: /abc/i })
```

#### Count

```javascript
db.collection.count()
db.collection.count({ field1: { $exists: false } })
db.collection.count({ field1: /abc/i })
```

#### Aggregation

```javascript
db.collection.aggregate([
  {
    $group: {
      _id: "$field1",
      count: { $sum: 1 },
    },
  },
])

db.collection.aggregate([
  {
    $group: {
      _id: { field1: "$field1", field2: "$field2" },
      field3Avg: { $avg: "$field3" },
    },
  },
])

db.collection.aggregate([
  { $match: { field3: "abc" } },
  { $group: { _id: "$field1", field2Sum: { $sum: "$field2" } } },
])
```

#### Insert

```javascript
db.collection.save({ field1: "value1", field2: "value2" })
```

#### Update

```javascript
db.collection.update(
  { field1: "value1" },
  {
    $set: {
      field1: "new_value1",
    },
  }
)

db.collection.update(
  { field1: "value2" },
  { $unset: { field2: "" } },
  { multi: true }
)
```

#### Delete

```javascript
db.collection.remove({ field1: "value1" })
```
