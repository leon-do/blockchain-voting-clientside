function vote(userAddress, password, args, cb){

  // access vault
  lightwallet.keystore.createVault({password:password}, function(err, ks){

      //make a connection to infura using web3
      //sign with keystore (ks)
      web3.setProvider(new HookedWeb3Provider({
          host: "https://ropsten.infura.io/5XLCCoLbx9Ey7RAjtzUq",
          transaction_signer: ks
      }))



      //send to ropstein
      var functionName = 'totalVotes'
      var contractAddr = '0x2B79dFf7cD509365B664ED7A1d4C06Ee04c15e31'
      var abi = [{"constant":false,"inputs":[{"name":"userArray","type":"uint256[]"}],"name":"totalVotes","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"voteA","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"voteB","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"}]
      var contract = web3.eth.contract(abi).at(contractAddr)
      var value = 0;
      var gasPrice = 50000000000
      var gas = 3000000

      args.push({from: userAddress, value: value, gasPrice: gasPrice, gas: gas})

      var callback = function(err, txhash) {
        if (err) {
          alert(err)
        } else {
          cb (txhash)
        }
      }

      args.push(callback)

      contract[functionName].apply(this, args)


    }) //createVault

}