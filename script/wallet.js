var web3 = new Web3();
var global_keystore;



function newWallet() {

  //creates a random string
  var extraEntropy = Math.random().toString(36).substring(2);

  //generates random seed
  var randomSeed = lightwallet.keystore.generateRandomSeed(extraEntropy);
  var infoString = 'Your new wallet seed is: "' + randomSeed + 
    '". Please write it down on paper or in a password manager, you will need it to access your wallet. Do not let anyone see this seed or they can take your Ether. ' +
    'Please enter a password to encrypt your seed while in the browser.'
  var password = prompt(infoString, 'Password');
  lightwallet.keystore.deriveKeyFromPassword(password, function(err, pwDerivedKey) {
  global_keystore = new lightwallet.keystore(
    randomSeed,
    pwDerivedKey);
  
  newAddresses(password);
  })
}



function setWeb3Provider(keystore) {
    var web3Provider = new HookedWeb3Provider({
        host: "https://ropsten.infura.io/5XLCCoLbx9Ey7RAjtzUq",
        transaction_signer: keystore
    });
    web3.setProvider(web3Provider);
}








function setSeed() {
    var password = prompt('Enter Password to encrypt your seed', 'Password');
                                   
    //lightwallet.js line 862       
    lightwallet.keystore.deriveKeyFromPassword(password, function(err, pwDerivedKey) {
    global_keystore = new lightwallet.keystore(
      document.getElementById('seed').value, 
      pwDerivedKey);
    
    document.getElementById('seed').value = ''

    newAddresses(password);
    setWeb3Provider(global_keystore);
    })
}


function newAddresses(password) {

    if (password == '') {
        password = prompt('Enter password to retrieve addresses', 'Password');
    }
    
    lightwallet.keystore.deriveKeyFromPassword(password, function(err, pwDerivedKey) {
        global_keystore.generateNewAddress(pwDerivedKey, 1);
        var userAddress = global_keystore.getAddresses();
        document.getElementById('userAddress').innerHTML = userAddress

        // in faucet.js file
        faucet(userAddress)
    })
}





