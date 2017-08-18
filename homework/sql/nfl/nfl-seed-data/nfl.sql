SELECT name FROM teams;
SELECT stadium, head_coach FROM teams;
SELECT head_coach FROM teams WHERE conference='AFC' AND division= 'South';
SELECT COUNT(*) FROM players;

SELECT name, head_coach FROM teams WHERE conference ='NFC' AND division ='North' OR conference='AFC' AND division='East';
SELECT name FROM players ORDER BY salary DESC LIMIT 50;
SELECT AVG(salary) FROM players;
