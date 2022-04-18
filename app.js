const express = require('express');

const app = express();


/* import moralis */
const Moralis = require("moralis/node");

/* Moralis init code */
// const serverUrl = "https://qpfa7ptjnahr.usemoralis.com:2053/server";
// const appId = "GeC9GfUPhBRloiL1Ie9j5GXtk5BHJFOhmPhdUN15";
// const masterKey = "lGgr2ut7qLsrpzDd9zRVz2eoAEgiK95aEM9v9HB8";

// Moralis.start({ serverUrl, appId, masterKey });






app.get('/', (req, res) => {
    res.sendFile( __dirname + "/" + "index.html" );
})


const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})