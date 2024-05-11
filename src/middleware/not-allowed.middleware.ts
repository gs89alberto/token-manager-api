import { Request, Response } from 'express';

export const notAllowedHandler = (request: Request, response: Response) => {
  const message = 'Method not allowed';

  response.status(405).json({ message });
};
