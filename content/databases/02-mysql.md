---
order:
  list: 2
template: database
slug: /db/mysql
title: MySQL
queryViewerLanguage: sql
---

#### Select

```sql
SELECT * FROM table1;
SELECT field1, field2 FROM table1;
SELECT DISTINCT field1 FROM table1;
SELECT * FROM table1 LIMIT 10;
SELECT COUNT(*) FROM table1;
```

#### Filter

```sql
SELECT * FROM table1 WHERE field1 IS NULL;
SELECT * FROM table1 WHERE field1 IN (1,2,3);
SELECT * FROM table1 WHERE field1 BETWEEN 100 and 200;
SELECT * FROM table1 WHERE field1 LIKE '%abc%';
SELECT * FROM table1
WHERE field1 >= 123 AND (field2 = false OR field3 != 'abc');
```

#### Count

```sql
SELECT COUNT(*) FROM table1;
SELECT COUNT(*) FROM table1 WHERE field1 IS NULL;
SELECT COUNT(*) FROM table1 WHERE field1 LIKE '%abc%';
```

#### Aggregation

```sql
SELECT field1, count(*) FROM table1 GROUP BY field1;

SELECT field1, field2, AVG(field3)
FROM table1
GROUP BY field1, field2;

SELECT field1, SUM(field2)
FROM table1
GROUP BY field1
HAVING field3 = 'abc';
```

#### Insert

```sql
INSERT INTO table1 (field1, field2) VALUES ('value1', 'value2');
```

#### Update

```sql
UPDATE table SET field1='new_value1' WHERE field2='value2';
```

#### Delete

```sql
DELETE FROM table1 WHERE field1='value1';
```
