//Vote button
function onClick_vote() {
    var web3 = new Web3();
    var global_keystore;
    

    var password = 'password'
    var seed = 'lawn come mom agent under eagle tilt record isolate ready easy profit'

    //lightwallet.js line 862       
    lightwallet.keystore.deriveKeyFromPassword(password, function(err, pwDerivedKey) {
      global_keystore = new lightwallet.keystore(
        seed, 
        pwDerivedKey);
      
      global_keystore.generateNewAddress(pwDerivedKey, 1);
      

      var web3Provider = new HookedWeb3Provider({
          host: "https://ropsten.infura.io/5XLCCoLbx9Ey7RAjtzUq",
          transaction_signer: global_keystore
      });
      web3.setProvider(web3Provider);




      //vote
      var fromAddr = "fa864a146278d5f36634e2df68956877af4ab03b"

      var contractAddr = '0x2B79dFf7cD509365B664ED7A1d4C06Ee04c15e31'

      var abi = [{"constant":false,"inputs":[{"name":"userArray","type":"uint256[]"}],"name":"totalVotes","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"voteA","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"voteB","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"}]

      var contract = web3.eth.contract(abi).at(contractAddr)

      var functionName = 'totalVotes';

      var args = [[123,2]]

      var value = 0;
      var gasPrice = 50000000000
      var gas = 3141592

      args.push({from: fromAddr, value: value, gasPrice: gasPrice, gas: gas})

      var callback = function(err, txhash) {
        if (err) {
          alert(err)
        } else {
          console.log(txhash)
        }
      }

      args.push(callback)

      contract[functionName].apply(this, args)


    })//lightwallet   


}//functionCall