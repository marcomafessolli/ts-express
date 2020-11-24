import App from './app'

const SERVER_PORT = process.env.PORT || 3000

App.listen(SERVER_PORT, () => {
  console.log(`Server is listening on port: ${SERVER_PORT}`)
})
