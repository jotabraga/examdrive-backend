# Exam Drive :memo:
Driven repository API
## About 🔎
API for register and get subjects and professors exams and materials.
### Implemented features :heavy_check_mark:
- [x] Register and contribute sending an exam
- [x] Get subject tests
- [x] Get professor tests
### Future improvements 🔮
- [ ] Register new subject / professor
- [ ] Delete tests
- [ ] Add college info
## Tech tools :wrench:
The following tools and frameworks were used in the construction of the project:<br>
<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
</p>

## How to run
1. Clone this repository
2. Clone the [front-end repository](https://github.com/jotabraga/examdrive-frontend)
3. Follow instructions to run [front-end](https://github.com/jotabraga/examdrive-frontend#readme)
4. Install dependencies
```bash
npm i
```
5. Create a database using ``migrations`` 
- 5.1 Enter to postgres terminal
```bash
sudo su postgres
psql postgres
```
- 5.2 Create a database
```bash
CREATE DATABASE [database_name];
```
- 5.3 Insert your database info at ``.env file`` as the following example
```bash
DATABASE_URL='postgres://USERNAME:PASSWORD@HOST:PORT/DATABASE_NAME'
```
- 5.4 Finally, you can run migrations to create the tables
```bash
npm run build
npm run typeorm migration: run
```

6. Run the back-end with
```bash
npm start
```
