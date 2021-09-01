import { get, post } from './http'

// 注册用户
export const register = data => post('api.php/login/register', data)

// 登录
export const login = data => post('/api.php/login/login', data)

// 导航栏
export const getNavbarList = () => post('/api.php/index/index')