//Mesmo que execution.startTimeUTC
const startTime = new Date();

//5 segundos
const timeoutMilliseconds = 5 * 1000;

const currentDate = new Date();
const timeoutDate = new Date();
//Set milliseconds é mais seguro de se usar, porque poderemos ter timeouts pequenos.
timeoutDate.setMilliseconds(
  currentDate.getMilliseconds() + timeoutMilliseconds
);
//Agora a data na variavel timeout Date é igual a data em que deve estourar o timeout.
//Variavel diff guarda o tempo em millisegundos que é a diferença entre a data atual e a data do timeout.
const diff = timeoutDate - currentDate;
//Se a diferença for menor ou igual a zero quer dizer q o fluxo ja está em timeout. 
if (diff <= 0) {
  console.log("timeout")
}

//Se não, deve dar timeout quando correr a diferença. 
setTimeout(() => {
  console.log("timeout")
}, diff);