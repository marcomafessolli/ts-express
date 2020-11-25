import App from './app'

App.listen().then(({ url }) => {
  console.log(`🚀  Apollo Server ready at ${url}`);
})
