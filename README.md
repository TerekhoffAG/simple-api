# **Simple REST API**
# **The project is under development. Part of the functionality is missing or incompletely implemented. But you can track the implementation of the project or use it for self-study. All functionality of the project will be available soon.**

## **Overview**
This is a simple REST API using Node.js, Express, TypeORM, MySQL and TypeScript. Good for building a starter web API for web client (React, Vue.js, Angular), or mobile client (Android, iOS).

## **Requirements**
- Node.js **16+**
- MySQL **8+**

## **Project structure**
```
.
├── src
│   ├── config
│   │   ├── config.ts
│   │   └──
│   ├── index.ts
│   └──
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

## **Installation**
- Clone the project from GitHub.
```bash
git clone https://github.com/TerekhoffAG/simple-api
```

- Install npm dependencies.
```bash
cd simple-api
npm install
```

- Create `.env` file of environment variables.
```bash
cp .env.template .env
```

- Set the value of environment variables.

## **Running API**
- Run in production mode.
```bash
npm run start
```

- Run in development mode.
```bash
npm run start:dev
```

## **Running Tests**
```bash
npm run test
```

## **Running Eslint**
```bash
npm run lint
```

## **License**
This project is open-sourced software licensed under the ISC License.