function describeCountry(country, population, capitalCity) {
  const input = `${country} has ${population} million people and its capital city is ${
    capitalCity}.`;
  return input;
}

const canada = describeCountry('Canada', 38.25, 'Ottawa');
const madagascar = describeCountry('Madagascar', 28.92, 'Antananarivo');
const france = describeCountry('France', 67.75, 'Paris');
console.log(canada);
console.log(madagascar);
console.log(france);
