
function onClick_NewWallet(){
    /*
        argument 1: password
        returns
            1: seed
            2: user address
    */
    newWallet('password', function(seed, userAddress){
        console.log(seed)
        console.log(userAddress)
    })   
}

function onClick_vote(){
    /*
        argument 1: address
        argument 2: password
        argument 3: contract argument
        returns transaction number
    */
    address = '3bd400a836a534a640cdf362317ace9fff2c7789'
    password = 'password'
    vote(address,password, [[123,1]], function(txhash){
      console.log(txhash)
    })    
}


