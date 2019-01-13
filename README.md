# TODO-FANCY DOCS

-----------------------
## List of Routes

 authentication routes:

| Route         | HTTP          | Header | Body| Description          | 
| ------------- |:-------------:|-----------| ------------| :------------------- |
| /login| POST | none | email:string, password: string | authenticate user |


User routes:

| Route         | HTTP          | Header | Body| Description          | 
| ------------- |:-------------:|-----------| ------------| :------------------- |
| /user     | GET        |Token | none | Get all project info     | 
| /user/:id | GET |Token | none |Get single project info |
| /user/:id  | DELETE |Token | none |delete a user    |
| /user/:id  | PUT |Token | email:string, password:string,|update user info    |
| /user/:id  | POST |Token | email:string, password:string|create new |


todo routes:

| Route         | HTTP          | Header | Body| Description          | 
| ------------- |:-------------:|-----------| ------------| :------------------- |
| /todo   | GET        |Token, userId | | Get all todo | 
| /todo    | POST       |Token | name:string, description:string, status:string, due_date:date| create todo    | 
| /todo/:id    | UPDATE     |Token | status:string| Update todo     |
| /todo/:id    | DELETE      |Token | | Delete todo |






