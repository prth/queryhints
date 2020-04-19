---
slug: postgres-aggregation
order:
  list: 4
template: cheatsheet
title: Aggregation
dbs:
  - postgres
content: |
  SELECT field1, count(*) FROM table1 GROUP BY field1;
  SELECT field1, field2, AVG(field3) FROM table1 GROUP BY field1, field2;
  SELECT field1, SUM(field2) FROM table1 GROUP BY field1 HAVING field3 = 'abc';
---
