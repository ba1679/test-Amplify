const SERVER = {
  development: {
    SERVER_URL: 'I am dev'
  },
  production: {
    SERVER_URL: 'I am prod'
  }
}

export default SERVER[process.env.NEXT_PUBLIC_BUILD_ENV || process.env.NODE_ENV]
