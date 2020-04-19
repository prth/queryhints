---
slug: mysql-filter
order:
  list: 2
template: cheatsheet
title: Filter
dbs:
  - mysql
content: |
  SELECT * FROM table1 WHERE field1 IS NULL;
  SELECT * FROM table1 WHERE field1 >= 123 AND (field2 = false OR field3 != 'abc');
  SELECT * FROM table1 WHERE field1 IN (1,2,3);
  SELECT * FROM table1 WHERE field1 BETWEEN 100 and 200;
  SELECT * FROM table1 WHERE field1 LIKE '%abc%';
---
