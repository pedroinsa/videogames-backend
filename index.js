//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Genero } = require('./src/db.js');
const {
 DB_PORT
} = process.env; 

const axios = require('axios')
const {
   APIKEY
  } = process.env;
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(DB_PORT, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});


// conn.sync({ force: true }).then( async ()=> await precarga())
// .then(()=>{  server.listen(3001, () => {
//     console.log('%s listening at 3001'); // eslint-disable-line no-console
//   });
// })

// async function precarga(){  
// const getGenres = await axios(`https://api.rawg.io/api/genres?key=${APIKEY}`)
// const data = getGenres.data.results
// const mapeo = data.map(element=> {
//     const obj = {
//         id: element.id,
//         name: element.name
//     }
//     return obj
// })
// await Genero.bulkCreate(mapeo)
// }