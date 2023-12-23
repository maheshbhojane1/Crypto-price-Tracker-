

var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var tet = document.getElementById("tether");
var car = document.getElementById("cardano");
var sol = document.getElementById("solana");
var tron = document.getElementById("tron");
var ste = document.getElementById("stellar");
var lite = document.getElementById("litecoin");


var settings ={

  "async" : true,
  "scrossDomain" : true,
  "url" : "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Ccardano%2Cdogecoin%2Csolana%2Ctron%2Clitecoin%2Cpolygon%2Cpolkadot%2Cavalanche%2Cuniswap%2Cmonero%2Cstellar&vs_currencies=usd",
  "method" : "GET",
  "headers" : {}

}

$.ajax(settings).done(function(response){
  // console.log(response)

  btc.innerHTML = response.bitcoin.usd
  eth.innerHTML = response.ethereum.usd
  doge.innerHTML = response.dogecoin.usd
  lite.innerHTML = response.litecoin.usd
  tet.innerHTML = response.tether.usd
  sol.innerHTML = response.solana.usd
  car.innerHTML = response.cardano.usd
  tron.innerHTML = response.tron.usd
  ste.innerHTML = response.stellar.usd
  
});