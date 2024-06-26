const dogs = [
  {
    name: 'Clifford',
    age: 7,
    favoriteTreats: ['steak', 'bacon'],
  },
  {
    name: 'Clifford',
    age: 7,
    favoriteTreats: ['steak',],
  },
  {
    name: 'Gypsy',
    age: 10,
    favoriteTreats: ['chewy bone', 'bacon'],
  },
  {
    name: 'Scooby',
    age: 55,
    favoriteTreats: ['scooby snack'],
  },
]

/**
 * TODO Using the `dogs` array, print to the console the names of all dogs that 
 * do not have 'bacon' in their list of favorite treats
 */
dogs.map((dog) => {
  if (!dog.favoriteTreats.includes('bacon')) {
    console.log(dog.name)
  }
})