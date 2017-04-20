//view Votes button

function viewVotes(){

    var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/5XLCCoLbx9Ey7RAjtzUq"));

    var VotingContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"userArray","type":"uint256[]"}],"name":"totalVotes","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"voteA","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"voteB","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"}])

    var contractAddress = '0x2B79dFf7cD509365B664ED7A1d4C06Ee04c15e31'
    var contractInstance = VotingContract.at(contractAddress)

    document.getElementById('viewVotes').innerHTML = "VoteA: " + contractInstance.voteA.call() + "<br> VoteB: " + contractInstance.voteB.call()
}