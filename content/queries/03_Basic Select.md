---
slug: query-3
order:
  list: 3
template: query
title: Select top 3 movies -03
tags:
  - order
  - limit
dbs:
  - postgres
  - mysql
mysql: |
  SELECT * FROM inventory WHERE status = '3';
postgres: |
  SELECT * FROM inventory WHERE status = '3';
---
