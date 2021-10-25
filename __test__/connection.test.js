const jest = require('jest')

// test if pages are accessible 
app.get('/', (req, res) => {
      res.send("Hello General Kenobi")
    });