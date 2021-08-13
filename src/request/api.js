import { get, post } from './http'

// 注册用户
export const register = data => post('api/login/register', data)
// 验证码
export const captcha = () => post('api/login/captcha')