function convertTemp (kelvin) {
    return parseInt((kelvin - 273.15), 10)
  }

  module.exports = {
    convertTemp: convertTemp
  }