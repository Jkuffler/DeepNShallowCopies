
// lines 3 thru 8 show primitive values for primitive data types
let x = 400
let y = x

x = "This string"
console.log(y)
console.log(x)
x = y
console.log('******AFTER CHANGING*****')
console.log(x)
console.log(y)

// values for non-primitive data types
// let shallowObj = {
//   key1: 1,
//   key2: 2,
//  }
// let newObj = shallowObj
// newObj.key1 = 5

// console.log(shallowObj)
// console.log(newObj)

//Deep Copy with spread operator
//  let myRadio = {   podcasts: 9, 
//                    albums: 38, 
//                    playlists: 4 
//                }
// let copyMyRadio = { ...myRadio }
// myRadio.albums = 88
// copyMyRadio.podcasts = 19
// copyMyRadio.albums = 138
// copyMyRadio.playlists = 21

// console.log(myRadio) 
// console.log(copyMyRadio)

//Spread operator fails to create entirely separate memory on a nested object
// let city = {name: "Babylon", 
//             population: 
//               {
//               total: 750,
//               registeredVoters: 555,
//               unregisteredVoters: 195
//               },
//             founded: "1894 B.C"
//             }
// let shallowCity = {...city}
// shallowCity.name = "Rohan"
// shallowCity.population.total = 465


// console.log(shallowCity)
// console.log(city)

//Deep Copy Deep object
// let kidGames = {
//   digital: 5,
//   tableTop: {
//     onlyCard: {
//       solo: 1,
//       multiplayer: 9
//     },
//     onlyBoard: 17,
//     combo: 3
//   }
// }

// let adultGames = JSON.parse(JSON.stringify(kidGames))

// adultGames.digital = 119
// adultGames.tableTop.onlyBoard = 3
// adultGames.tableTop.onlyCard.multiplayer = 2

// console.log('kid games =', kidGames)

// console.log('adult games =', adultGames)