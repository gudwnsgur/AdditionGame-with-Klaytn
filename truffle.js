// truffle.js config for klaytn.
const PrivateKeyConnector = require('connect-privkey-to-provider')  
const NETWORK_ID = '1001' // 1001 = baobab 고유의 네트워크 ID
const GASLIMIT = '20000000' // 배포할 때 드는 limit gas
const URL = 'https://api.baobab.klaytn.net:8651' // = klaytn의 flood가 돌아가고 있는 주소 baobab testnet
const PRIVATE_KEY = '0x3b7c62866be4913b8149bc814c301760fc4a62a8636585013301bdc92667e41b'
    // klaytn wallet을 통해 생성했던 key
module.exports = {
    networks : {       
        klaytn : {      // network = klaytn
            provider : new PrivateKeyConnector(PRIVATE_KEY, URL),   
            //provider : klaytn node를 제공하는 공급자 명시 (계정 비밀키, 네트워크 주소)
            network_id : NETWORK_ID, 
            gas : GASLIMIT,
            gasPrice : null,
        }
    },
}