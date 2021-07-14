import { get, post } from './http'

// 获取信息
export const getMsg = () => get('app.php/Goods/getRebateRule')