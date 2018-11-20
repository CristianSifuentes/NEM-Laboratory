//Funcionan

// Ultima transaccion

// let nem = require("nem-sdk").default;

// let endpoint = nem.model.objects.create("endpoint")(nem.model.nodes.defaultTestnet, nem.model.nodes.defaultPort);
 
// nem.com.requests.chain.lastBlock(endpoint).then(function(res)
//   {
//     console.log(res);

//   },
//  function(err)
//  {

//   console.log(err);

//  });




//No funciona

var nem = require("nem-sdk").default;

// Create an endpoint object
var endpoint = nem.model.objects.create("endpoint")(nem.model.nodes.defaultTestnet, nem.model.nodes.websocketPort);

// Address to subscribe
var address = "TAQJFEZ3UBJN423FMYQPPDAW5R557XX5LY53P6O6";

// Create a connector object
var connector = nem.com.websockets.connector.create(endpoint, address);

// Connect using connector
connector.connect().then(function() {
  // If we are here we are connected
  console.log("Connected");

  // Subscribe to new blocks channel
  nem.com.websockets.subscribe.chain.blocks(connector, function(res) {
    console.log(res);
  });

  // Subscribe to account data channel
  nem.com.websockets.subscribe.account.data(connector, function(res) {
    console.log(res);
  });

  // Request account data
  nem.com.websockets.requests.account.data(connector);

}, function (err) {
  // If we are here connection failed 10 times (1/s).
  console.log(err);
});
















// let nem = require("nem-sdk").default;
// let endpoint = nem.model.objects.create('endpoint')(nem.model.nodes.defaultTestnet, nem.model.nodes.defaultPort);
// let common = nem.model.objects.create('common')('password', 'privatekey');
// var transferTransaction = nem.model.objects.create("transferTransaction")("TAQJFEZ3UBJN423FMYQPPDAW5R557XX5LY53P6O6", 1, "Hello");
// var transactionEntity = nem.model.transactions.prepare("transferTransaction")(common, transferTransaction, nem.model.network.data.testnet.id)


// nem.model.transactions.send(common, transactionEntity, endpoint).then(function(res)
// {
//   console.log(res);
// }, function(err)
// {
//  console.log("error ___:"  + err);
// });










// nem.model.transactions.send(common, preparedTransaction, endpoint).then(function(res)
//  {
//    console.log(res);

//  },
//  function(err)
//  {

//   console.log(err);

//  });



// let nem = require("nem-sdk").default;

// let endpoint = nem.model.objects.create("endpoint")(nem.model.nodes.defaultTestnet, nem.model.nodes.defaultPort);

// let common = nem.model.objects.create("common")("password", "privateKey");

// let transferTransaction = nem.model.objects.create("transferTransaction")("TB3WP6QUOJ5ZXZ47FM5BINAYO3XZOCBWE266TK3P", 10, "Hello");

// let preparedTransaction = nem.model.transactions.prepare("transferTransaction")(common, transferTransaction, nem.model.network.data.testnet.id)






 
//
// Address to subscribe
// let address = "TB3WP6QUOJ5ZXZ47FM5BINAYO3XZOCBWE266TK3P"; 
// // Create a connector object
// let connector = nem.com.websockets.connector.create(endpoint, address);
 
// // Connect using connector
// connector.connect().then(function() {
//   // If we are here we are connected
//   console.log("Connected");
 
//   // Subscribe to new blocks channel
//   nem.com.websockets.subscribe.chain.blocks(connector, function(res) {
//     console.log(res);
//   });
 
//   // Subscribe to account data channel
//   nem.com.websockets.subscribe.account.data(connector, function(res) {
//     console.log(res);
//   });
 
//   // Request account data
//   nem.com.websockets.requests.account.data(connector);
 
// }, function (err) {
//   // If we are here connection failed 10 times (1/s).
//   console.log(err);
// });