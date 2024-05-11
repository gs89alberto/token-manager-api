import { body, param } from 'express-validator';

export const createTokenValidator = [
  body('name', 'name is required').isString().notEmpty(),
  body('ticker')
    .notEmpty()
    .withMessage('ticker is required')
    .bail()
    .isString()
    .withMessage('ticker must be a string')
    .bail()
    .isLength({ min: 3, max: 3 })
    .withMessage('ticker must be 3 characters long'),
  body('description')
    .notEmpty()
    .withMessage('description is required')
    .bail()
    .isString()
    .withMessage('description must be a string'),
];
export const getTokenValidator = [
  param('id')
    .notEmpty()
    .withMessage('id is required and must be a number')
    .bail()
    .isNumeric()
    .withMessage('id must be a number'),
];
