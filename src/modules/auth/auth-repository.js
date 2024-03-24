import { prismaClient } from '../../config/database.js';

const count = async (email) => {
  const user = await prismaClient.user.count({
    where: {
      email: email,
    },
  });

  return user;
};

const register = async (email, password, name) => {
  const user = await prismaClient.user.create({
    data: {
      email,
      password,
      name,
    },
  });

  return user;
};

const login = async (email) => {
  const user = await prismaClient.user.findUnique({
    where: {
      email: email,
    },
  });

  return user;
};

const logout = async (email) => {
  const user = await prismaClient.user.update({
    where: {
      email: email,
    },
    data: {
      token: null,
    },
    select: {
      email: true,
    },
  });

  return user;
};

const update = async (email, data) => {
  const user = await prismaClient.user.update({
    where: {
      email: email,
    },
    data: data,
  });

  return user;
};

export function authResponse(user) {
  return {
    name: user.name,
    email: user.email,
  };
}

export { count, login, logout, register };
