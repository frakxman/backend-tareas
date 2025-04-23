# Backend Tareas - Task Management API

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

A robust task management API built with NestJS framework. This application provides a RESTful API for managing tasks with proper validation and data transformation.

## Project Structure

```
backend-tareas/
├── src/
│   ├── tasks/                  # Tasks module
│   │   ├── controllers/        # Request handlers
│   │   ├── services/          # Business logic
│   │   ├── entities/          # Database entities
│   │   ├── dtos/             # Data Transfer Objects
│   │   └── tasks.module.ts    # Module definition
│   ├── app.module.ts          # Main application module
│   └── main.ts               # Application entry point
├── test/                     # Test files
└── package.json             # Project dependencies
```

## Features

- Task CRUD operations
- Input validation using class-validator
- Data transformation using class-transformer
- Modular architecture following NestJS best practices
- TypeScript support
- Development and production configurations

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

```bash
$ npm install
```

## Running the Application

```bash
# development mode
$ npm run start

# watch mode (recommended for development)
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testing

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## API Documentation

The API endpoints will be documented here once they are implemented. Each endpoint will include:
- HTTP Method
- URL
- Request body (if applicable)
- Response format
- Example usage

## Dependencies

Main dependencies used in this project:
- NestJS v10.0.0
- class-validator
- class-transformer
- TypeScript
- Jest (for testing)

## Development

To contribute to this project:

1. Ensure you have all prerequisites installed
2. Clone the repository
3. Install dependencies (`npm install`)
4. Create a new branch for your feature
5. Run tests before submitting PR
6. Follow the existing code style

## Resources

For more information about the technologies used:

- [NestJS Documentation](https://docs.nestjs.com)
- [class-validator Documentation](https://github.com/typestack/class-validator)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## License

This project is [MIT licensed](LICENSE).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)
