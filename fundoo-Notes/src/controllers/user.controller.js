import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';





/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const userRegistration = async (req, res, next) => {
  try {
    const data = await UserService.userRegistration(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User created successfully'
    });
  } catch (error) {
    next(error);
  }
};


export const login = async (req, res, next) => {
  try {
    const data = await UserService.login(req.body);
    if(data == null){
      res.status(HttpStatus.NOT_FOUND).json({
        code: HttpStatus.NOT_FOUND,
        message: 'User is not Found'
      });
    }else{
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Login Successfull'
    });
  }
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST,).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    })
    next();
  }
};


export const forgetPassword = async (req, res, next) => {
  try {
    const data = await UserService.forgetPassword(req.body)
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: "password send to email"
    })
  } catch (error) {
    next(error);
  }
}


//reset token

export const resetPassword = async (req, res, next) => {
  try {
    req.body.userID = req.body.data.id; 
    const data = await UserService.resetPassword(req.body);
    res.status(HttpStatus.OK).json({
    code: HttpStatus.OK,
    data: data,
    message: 'Password Reset Successful'
    });
  }catch (error) {
    next(error)
  }
};