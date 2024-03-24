import userService from './user-service.js';

const get = async (req, res, next) => {
  try {
    const email = req.user.email;
    const result = await userService.getUser(email);

    res.status(200).json({
      status: 'success',
      message: 'Get user success',
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const request = req.body;
    const response = await userService.updateUser(req.user, request);
    res.status(200).json({
      status: 'success',
      message: 'Update user success',
      data: response,
    });
  } catch (e) {
    next(e);
  }
};

export default {
  get,
  update,
};
