---
slug: query-1
order:
  list: 1
template: query
title: Select top 3 movies -01
tags:
  - select
  - order
dbs:
  - mongodb
  - mysql
mongodb: |
  db.inventory.find({
    status: "1"
  })
mysql: |
  SELECT * FROM inventory WHERE status = '1';
---
