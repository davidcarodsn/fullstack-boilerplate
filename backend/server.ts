import App from "./src/app";

App.listen(App.get('port'), () => {
  console.log(`Listen on port ${App.get('port')}`)
});
