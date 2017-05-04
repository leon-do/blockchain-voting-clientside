function newWallet(password, cb){

    //generate randomness
    var extraEntropy = (Math.random() / Math.random() / Math.random() / Math.random()).toString()
    
    // from randomness, it'll generate a random seed
    var randomSeed = lightwallet.keystore.generateRandomSeed(extraEntropy)

    // the seed is stored encrypted by a user-defined password
    lightwallet.keystore.deriveKeyFromPassword(password, function(err, pwDerivedKey) {
       
        var keyStore = new lightwallet.keystore(randomSeed, pwDerivedKey);

        //using the keystore, build web3 hook object
        var web3Provider = new HookedWeb3Provider({
            host: "https://ropsten.infura.io/5XLCCoLbx9Ey7RAjtzUq",
            //keystore is the signature
            transaction_signer: keyStore
        });
        // send to ropsten server
        web3.setProvider(web3Provider);

        // using the keystore, generates 1 address
        keyStore.generateNewAddress(pwDerivedKey, 1);
        var userAddress = keyStore.getAddresses()

        cb (randomSeed, userAddress)
    })

}