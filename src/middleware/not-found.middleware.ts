import { Request, Response } from 'express';

export const notFoundHandler = (request: Request, response: Response) => {
  const message = 'Route Not Found';

  response.status(404).json({ message });
};
