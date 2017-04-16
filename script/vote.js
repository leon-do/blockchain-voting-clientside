function functionCall() {

  var fromAddr = document.getElementById('userAddress').innerHTML

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
      alert("Vote Complete! TxHash: " + txhash)
    }
  }

  args.push(callback)

  contract[functionName].apply(this, args)
}