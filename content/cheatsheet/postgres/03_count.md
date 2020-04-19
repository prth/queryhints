---
slug: postgres-count
order:
  list: 3
template: cheatsheet
title: Count
dbs:
  - postgres
content: |
  SELECT COUNT(*) FROM table1;
  SELECT COUNT(*) FROM table1 WHERE field1 IS NULL;
  SELECT COUNT(*) FROM table1 WHERE field1 LIKE '%abc%';
---
