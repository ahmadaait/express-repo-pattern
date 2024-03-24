import bcrypt from 'bcrypt';
import { ResponseError } from '../../core/error/response-error.js';
import { validate } from '../../core/validation/validation.js';
import { get, update, userResponse } from './user-repository.js';
import { getUserValidation, updateUserValidation } from './user-validation.js';

const getUser = async (email) => {
  email = validate(getUserValidation, email);

  const user = await get(email);

  if (!user) {
    throw new ResponseError(404, 'User not found');
  }

  return userResponse(user);
};

const updateUser = async (user, request) => {
  const updateRequest = validate(updateUserValidation, request);

  if (updateRequest.name) {
    user.name = updateRequest.name;
  }

  if (updateRequest.password) {
    user.password = await bcrypt.hash(updateRequest.password, 10);
  }

  const result = await update(user.email, user);

  return userResponse(result);
};

export default {
  getUser,
  updateUser,
};
