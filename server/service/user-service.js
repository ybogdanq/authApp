import userModel from "../models/user-model.js"
import bcrypt from "bcrypt"
import tokenService from "./token-service.js"
import UserDto from "../dtos/user-dto.js"
import ApiError from "../exceptions/api-error.js"

class UserService {
  async registation(email, password) {
    const candidate = await userModel.findOne({email})
    if (candidate) {
      throw ApiError.BadRequest("Пользователь с таким почтовым адресом уже зарегестрирован")
    }
    const hashPassword = await bcrypt.hash(password, 3)
    const user = await userModel.create({email, password: hashPassword})

    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({ ...userDto })
    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return {
      ...tokens,
      user: userDto
    }
  }

  async login(email, password){
    const user = await userModel.findOne({email})
    if(!user)throw ApiError.BadRequest("Пользователь с таким email не был найден")
    const isPasswordEquals = await bcrypt.compare(password, user.password)
    if(!isPasswordEquals) throw ApiError.BadRequest("Неверный пароль")

    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({...userDto});
    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return {
      ...tokens,
      user: userDto
    }
  }

  async logout(refreshToken){
    const token = await tokenService.removeToken(refreshToken)
    return token
  }

  async refresh(refreshToken) {
    if(!refreshToken){
      throw ApiError.UnathorizedError()
    }
    const userData = tokenService.validateRefreshToken(refreshToken)
    const tokenFromDB = await tokenService.findToken(refreshToken)
    if(!userData && !tokenFromDB) throw ApiError.UnathorizedError()

    const user = await userModel.findById(userData.id)
    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({...userDto});
    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return {
      ...tokens,
      user: userDto
    }
  }

  async getAllUsers() {
    const users = await userModel.find()
    return users
  }
}

export default new UserService()