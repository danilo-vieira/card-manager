import { Router } from 'express';

const cardRouter = Router();

cardRouter.get('/', (request, response) => {
  return response.send();
});

cardRouter.post('/', (request, response) => {
  const { id, ownerName, number, validThru, cvv } = request.body;

  // Call the repository

  return response.json({ some: 'thing' });
});

cardRouter.put('/:id', (request, response) => {
  const { id } = request.params;
  const { ownerName, number, validThru, cvv } = request.body;

  // Call the repository

  return response.json({ some: 'thing' });
});

cardRouter.patch('/:prop', (request, response) => {
  const { prop } = request.params;

  // Call the repository

  return response.json({ some: 'thing' });
});

cardRouter.delete('/:id', (request, response) => {
  const { id } = request.params;

  // Call the repository

  return response.json({ some: 'thing' });
});

export default cardRouter;
