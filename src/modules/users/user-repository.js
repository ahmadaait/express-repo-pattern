import { prismaClient } from '../../config/database.js';

const get = async (email) => {
  const user = await prismaClient.user.findUnique({
    where: {
      email: email,
    },
    select: {
      email: true,
      name: true,
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

export function userResponse(user) {
  return {
    name: user.name,
    email: user.email,
  };
}

export { get, update };
