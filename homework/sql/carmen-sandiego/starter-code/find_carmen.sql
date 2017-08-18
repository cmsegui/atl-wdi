SELECT * FROM country WHERE region='Southern Europe' ORDER BY population ASC;
SELECT * FROM countrylanguage WHERE countrycode='VAT';
SELECT * FROM countrylanguage WHERE language='Italian' ORDER BY percentage DESC;
SELECT name,code FROM country WHERE code='SMR';
SELECT * FROM city WHERE countrycode='SMR';
SELECT * FROM city WHERE name LIKE 'Serra%';
SELECT * FROM country WHERE code='BRA';
SELECT * FROM city WHERE id='211';
--clue 7 didn't really make sense 
SELECT * FROM city WHERE population=91084;
