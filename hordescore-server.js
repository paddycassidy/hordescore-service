var constants = require("./constant");

//express is the webserver library
const express = require('express');
//moment is a library for working with dates (may not be required)
const moment = require('moment');
//cors library
const cors = require('cors');

const app = express();

//serve static web pages
app.use(express.static(__dirname + '/public'));

//function to timestamp all logs
const log = function(message){
    var time = moment().format()
    console.log('[Server] '+ time + ' ' + message)
}

//config cors 
app.use(cors())

//Database connection/
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://paddycassidy:bewarethehorde@horde-score.ys2bl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//initialise the collection outside the connect, so others can access it
let collectionAnalysis;
client.connect(err => {
  collectionAnalysis = client.db("horde-score").collection("analysis");
  console.log('Database is connected')
  // perform actions on the collection object
  //client.close();
});

addDocument=function(doc){
    var document={
        company:doc
    }
    collectionAnalysis.insertOne(document)
    console.log('Document added to DB')
}


//function for looking up the full name of the ASX code
const codeLookup = function(company){
    console.log('Running code lookup for ' + company);
    //!!!asxcodes should be moved to a seperate file!!!
    // var asxCodes = {
    //     ZIP: "Zip Co Limited",
    //     KGN: "Kogan.com Ltd",
    //     CBA: "Commonwealth Bank Australia",
    //     WBC: "Westpac Banking Corporation"
    // };
    var selectedCode = constants.ASX_CODES.find(item => item['code'] === company);

    console.log("Selected Code: " + selectedCode.code);

    if (selectedCode) {
        company = selectedCode.title;
        log('The company name is ' + company);
        addDocument(company);
    }
    else company = 'Nothing can be found';
    return company;
};

//endpoint for getting the full name of an ASX code
app.get('/asx-lookup',function(req,res){
    log('ASX code lookup request made')
    var id = req.query.investment;
    log('The requested ASX code is ' + id);
    var result = codeLookup(id);
    res.send(result)
})

const port = 8080;
app.listen(port)
log('CORS-enabled web server is listening on port: ' + port)