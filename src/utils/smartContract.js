export default (web3, contract, abi) => abi
  .filter(m => m.type === 'function')
  .reduce(
    (acc, method) => Object.assign(
      acc,
      {
        [method.name]: (...args) => new Promise((resolve, reject) => {
          contract[method.name](...args, (error, res) => {
            console.log(`Mentat::${method.name}(${args.join()})`, error, res);

            if (error) { reject(error); }
            else { resolve(res); }
          })
        })
      }
    ),
    {}
  );

export const getAccounts = (web3) => new Promise((resolve, reject) => {
  setTimeout(() => reject('web3::getAccounts ERR_TIMEOUT'), 1000);
  web3.eth.getAccounts((error, accounts) => {
    if (error) {
      reject (error);
    } else {
      resolve(accounts);
    }
  });
});
