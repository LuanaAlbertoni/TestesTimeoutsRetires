


//Não usar
const recursiva = (count) => {
    count++;
    console.log(count);
    try {
      //executa componente
      throw Error();
    } catch (error) {
      if (count < 3) {
        recursiva(count);
      }
    }
  };
  
  // recursiva(0);
  
  // const safe = (callback, maxRetries) => {
  //   for (let tryCount = 0; tryCount < maxRetries; tryCount++) {
  //     try {
  //       callback();
  //       //executa componente
  //       throw Error();
  //     } catch (error) {
  //       if (tryCount == maxRetries - 1) {
  //         // aqui quando estoura o maximo de tentativas
  //         throw error;
  //       }
  //     }
  //   }
  // };
  
  // try {
  //   safe(() => console.log("eu logo"), 3);
  // } catch (error) {
  //   // aqui quando estoura o maximo de tentativas
  //   console.log("error", error);
  // }
  
//   TIMEOUTS
  
  const executeOperation = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("TERMINEI O COMPONENTE");
        resolve();
      }, 5000);
    });
  
  const timeoutHandler = async (timeout) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(`TIMEOUT ${timeout}ms`);
      }, timeout);
    });
  
  async function executeAll() {
    console.time("EXECUTE_ALL");

    try {
      console.time("EXECUTE_ONE");
  
      const executeComponentPromise = executeOperation();
      const timeoutHandlerPromise = timeoutHandler(4000);
  
      try {
        await Promise.race([executeComponentPromise, timeoutHandlerPromise]);
      } catch (error) {
        if(error.includes('TIMEOUT')){
        }
      }
  
      console.timeEnd("EXECUTE_ONE");
    } catch (error) {
      console.error("ERRO => ", error);
    }
  
    console.timeEnd("EXECUTE_ALL");
  }
  
  executeAll();