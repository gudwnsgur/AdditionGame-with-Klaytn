const fs = require('fs')    // file_system을 사용하여 각각의 파일에 저장
const AdditionGame = artifacts.require('./AdditionGame.sol')

module.exports = function (deployer) {
  deployer.deploy(AdditionGame)
  .then(() => {         // deployer가 AdditionGame을 deploy한 후 
      if(AdditionGame._json) {  //
        fs.writeFile('deployedABI', JSON.stringify(AdditionGame._json.abi),
            (err) => {
                if(err) throw err;
                console.log("파일에 ABI 입력 성공");
            }
        ) 
        
        fs.writeFile('deployedAddress', AdditionGame.address,
            (err) => {
                if(err) throw err;
                console.log("파일에 주소 입력 성공");
            }
        )
      } 
  })
}
// 배포하는 과정에서 얻을 수 있는 정보들을 BAPP내의 파일에 저장하는 코드