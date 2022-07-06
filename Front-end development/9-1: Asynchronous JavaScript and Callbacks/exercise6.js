const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// create function sendMarsTemperature:
const sendMarsTemperature = (onSucess, onFail) => {
  const currentT = getMarsTemperature();
  const toSendMessage = Math.random() <= 0.6
  setTimeout(() => {
    (toSendMessage) ? onSucess(currentT) : onFail('Robot is Busy');
  }, messageDelay())
}

// print "It is currently 47ºF at Mars", I.e., or "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// print "Hi there! Curiosity here. Right now is 53ºC at Mars", I.e., or "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);