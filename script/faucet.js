/* 
    curl -X POST  -H "Content-Type: application/json" 
    -d'{"toWhom":"0xfa864a146278d5f36634e2df68956877af4ab03b"}' 
    https://ropsten.faucet.b9lab.com/tap
*/




function faucet(userAddress){
console.log(userAddress)
    //check if addr has ETH
    var web3Provider = new HookedWeb3Provider({
        host: "https://ropsten.infura.io/5XLCCoLbx9Ey7RAjtzUq",
    });
    web3.setProvider(web3Provider);
    var balance = parseFloat(web3.eth.getBalance('0x'+userAddress).toString())
    console.log(balance)

    if (balance === 0){
        //give them some ETH
        jQuery.ajax({
        url : 'https://ropsten.faucet.b9lab.com/tap',
        type: 'POST',
        dataType : "json",
        headers: {"Content-Type": "application/json"},
        data: `{"toWhom": 0x${userAddress}}`
        }).done(function(data){
            console.log(data)
        }); 
    }


}