import Joi from 'joi';

const getUserValidation = Joi.string().max(100).required();

const updateUserValidation = Joi.object({
  email: Joi.string().email().max(100).required(),
  password: Joi.string().max(100).optional(),
  name: Joi.string().max(100).optional(),
});

export { getUserValidation, updateUserValidation };
