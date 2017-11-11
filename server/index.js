const app = require('./app');

let port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log(`Up and running on port ${port}`);
})