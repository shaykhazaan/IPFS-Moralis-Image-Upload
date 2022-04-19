const express = require('express');
const bodyParser = require("body-parser");
const app = express();


/* import moralis */
const Moralis = require("moralis/node");

/* Moralis init code */
// const serverUrl = "https://qpfa7ptjnahr.usemoralis.com:2053/server";
// const appId = "GeC9GfUPhBRloiL1Ie9j5GXtk5BHJFOhmPhdUN15";
// const masterKey = "lGgr2ut7qLsrpzDd9zRVz2eoAEgiK95aEM9v9HB8";

// Moralis.start({ serverUrl, appId, masterKey });





// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    const reqName = "";
    const reqDesc = "";
    res.sendFile( __dirname + "/views/" + "index.html" );
    console.log(reqName, reqDesc);
    
})

app.post("/", (req, res) => {
  reqName = req.body.metadataName;
  reqDesc = req.body.metadataDescription;
  console.log(reqName, reqDesc);
  // res.send(reqName, reqDesc);
});

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})