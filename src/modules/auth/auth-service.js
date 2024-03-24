import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { ResponseError } from '../../core/error/response-error.js';
import { validate } from '../../core/validation/validation.js';
import { update } from '../users/user-repository.js';
import {
  authResponse,
  count,
  login,
  logout,
  register,
} from './auth-repository.js';
import { loginValidation, registerValidation } from './auth-validation.js';

const registerAuth = async (request) => {
  const registerRequest = validate(registerValidation, request);

  const totalUserWithEmail = await count(registerRequest.email);

  if (totalUserWithEmail === 1) {
    throw new ResponseError(400, 'User already exists');
  }

  registerRequest.password = await bcrypt.hash(registerRequest.password, 10);

  const user = await register(
    registerRequest.email,
    registerRequest.password,
    registerRequest.name
  );

  return authResponse(user);
};

const loginAuth = async (request) => {
  const loginRequest = validate(loginValidation, request);

  let user = await login(loginRequest.email);

  if (!user) {
    throw new ResponseError(401, 'Email or password wrong');
  }

  const isPasswordValid = await bcrypt.compare(
    loginRequest.password,
    user.password
  );
  if (!isPasswordValid) {
    throw new ResponseError(401, 'Email or password wrong');
  }

  user = await update(user.email, {
    token: uuid().toString(),
  });

  const response = authResponse(user);
  response.token = user.token;

  return response;
};

export default {
  loginAuth,
  // logout,
  registerAuth,
};
