import authService from '../auth/auth-service.js';

const register = async (req, res, next) => {
  try {
    const result = await authService.registerAuth(req.body);
    res.status(200).json({
      status: 'success',
      message: 'Register success',
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await authService.loginAuth(req.body);
    res.status(200).json({
      status: 'success',
      message: 'Login success',
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default {
  register,
  login,
};
