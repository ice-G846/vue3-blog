import { get, post } from './http'

// 注册用户
export const register = () => post('api/login/register')
// 验证码
export const captcha = data => post('api/login/captcha', data)