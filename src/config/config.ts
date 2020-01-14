let domain: string

const prefix: string = '/api/'
const title: string = 'hope-light'

// 开发环境
if (process.env.NODE_ENV === 'development') {
  domain = 'https://uat-api.szhibu.com'
} else {
  // 生产环境
  domain = ''
}

export {
  domain,
  prefix,
  title
}
