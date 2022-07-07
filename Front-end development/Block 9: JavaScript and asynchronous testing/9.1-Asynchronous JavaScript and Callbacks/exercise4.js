const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// create the functions sendMarsTemperature below:

const sendMarsTemperature = (callback) => {
  setTimeout(() => {
    console.log(`Mars temperature is: ${callback} degrees Celsius`);
  }, messageDelay()) ;
}

sendMarsTemperature(getMarsTemperature()); // print "Mars temperature is: 20 degree Celsius", I.e.