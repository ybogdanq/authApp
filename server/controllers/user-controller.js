import userService from "../service/user-service.js";
import {validationResult} from "express-validator"
import ApiError from "../exceptions/api-error.js";

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req)
      if(!errors.isEmpty()) {
        return next(ApiError.BadRequest("Ошибка при валидации", errors.array()))
      }

      const {email, password} = req.body
      const userData = await userService.registation(email, password)
      res.cookie("refreshToken", userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})

      return res.json(userData)
    } catch (err) {
      next(err)
    }
  }

  async login(req, res, next) {
    try {
      const {email, password} = req.body;
      const userData = await userService.login(email, password);
      res.cookie("refreshToken", userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})

      return res.json(userData)
    } catch (err) {
      next(err)
    }
  }

  async logout(req, res, next) {
    try {
      const {refreshToken} = req.cookies
      const token = await userService.logout(refreshToken)
      res.clearCookie("refreshToken")
      return res.json(token)
    } catch (err) {
      console.log(err);
      next(err)
    }
  }

  async refresh(req, res, next) {
    try {
      const {refreshToken} = req.cookies;
      const userData = await userService.refresh(refreshToken);
      res.cookie("refreshToken", userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
      return res.json(userData)
    } catch (err) {
      console.log("Error:",  err);
      next(err)
    }
  }

  async getUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers()
      return res.json(users)
    } catch (err) {
      next(err)
    }
  }

  async getAnalytics(req, res, next) {
    try {
      res.json(["123", "456"])
    } catch (err) {
      next(err)
    }
  }
}

export default new UserController()