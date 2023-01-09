module.exports = {
  test: {
    client: 'pg',
    version: '15.1',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: '2306',
      database: 'currencies',
    },
    migratrions: {
      directory: 'src/migrations',
    },
  },
}
