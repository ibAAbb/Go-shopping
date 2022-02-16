const http = uni.$u.http

// post请求，获取菜单
export const postMenu = (params, config = {}) => http.post('/ebapi/public_api/index', params, config)

// get请求，获取菜单，注意：get请求的配置等，都在第二个参数中，详见前面解释
export const getMenu = (data) => http.get('/api/index', data)

export const getgoods_xq = (id) =>http.get(`/api/goods/${id}`)

export const getgoods = (data) =>http.get('/api/goods',data)

export const login = (params) => http.post('/api/auth/login',params)

export const register = (params) => http.post('/api/auth/register',params)

export const getuser = () => http.get('/api/user')

export const getcars = (data) => http.get('/api/carts',data)

export const addcars = (params) =>http.post('/api/carts',params)

export const delete_order = (dataId) => http.delete(`/api/carts/${dataId}`)

export const oss_token = () =>http.get('/api/auth/oss/token')

export const updata_avatar = (data) => http.post('/api/user/avatar',data)

