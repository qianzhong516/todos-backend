import swaggerJsdoc from 'swagger-jsdoc';
import { PORT } from './config';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'ToDos',
      description:
        'API endpoints for a mini todos app documented on swagger',
      contact: {
        name: 'Janice Zhong',
        url: 'https://github.com/qianzhong516/todos-backend',
      },
      version: '1.0.0',
    },
    servers: [
      {
        url: `http://localhost:${PORT}/`,
        description: 'Local server',
      },
    ],
  },
  // looks for configuration in specified directories
  apis: ['build/routes/**/*.js'],
};
const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
