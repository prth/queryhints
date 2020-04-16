---
slug: query-2
order:
  list: 2
template: query
title: Select top 3 movies -02
tags:
  - select
  - order
  - limit
dbs:
  - mongodb
  - postgres
mongodb: |
  db.inventory.find({
    status: "2"
  })
postgres: |
  SELECT * FROM inventory WHERE status = '2';
---
