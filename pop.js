


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello ')
})

app.get('/:city/:state', (req, res) => {
  // let city = req.params['city']
  // // let state = req.params.state
  // let thing = req.params
  // res.send(city)




  const cities = require("all-the-cities")

  let city_name = req.params['city']
  let state = req.params['state']

  console.log(city_name);
  

  let thing = cities.filter(city => {
    return city.name.match(city_name)
  })

  let result = thing.filter(city => {
    return city.adminCode.match(state)
  })

  console.log(result[0].population);
  res.send('' + result[0].population)










})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))













// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/:city/:state', (req, res) => {




//   res.send(request.params.city)
//   res.send("thing")
// } )

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))


   



