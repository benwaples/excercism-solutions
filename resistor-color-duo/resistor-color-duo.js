//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = colors => {
  const key = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']

  const result = colors.splice(0,2).map(color => key.indexOf(color))
  
  console.log(result)
  return Number(result.join(''))
};
