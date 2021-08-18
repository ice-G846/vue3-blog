import { get, post } from './http'

// 注册用户
export const register = data => post('api.php/login/register', data)

// 登录
export const login = data => post('/api.php/login/login', data)
// 验证码
// export const captcha = () => post('api/login/captcha')