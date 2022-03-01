const URLDATA = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana%2Ccardano%2Cdogecoin&vs_currencies=USD';

var criptos = 0;

var rawCripto = $.ajax({ method: "GET", async: false, url: URLDATA, datatype: "json", success: function(data){
    updatePrice(data);
    return criptos;
    } 
});

function updatePrice(data){
    criptos = data;
}

$("#criptoPriceList").append("<li class='criptoPrice '> Bitcoin - $ " + criptos.bitcoin.usd + " | </li>")
$("#criptoPriceList").append("<li class='criptoPrice'> Ethereum - $" + criptos.ethereum.usd + " | </li>")
$("#criptoPriceList").append("<li class='criptoPrice'> Solana - $" + criptos.solana.usd + " | </li>")
$("#criptoPriceList").append("<li class='criptoPrice'> Cardano - $" + criptos.cardano.usd + " | </li>")
$("#criptoPriceList").append("<li class='criptoPrice'> Dogecoin - $" + criptos.dogecoin.usd + " | </li>")



