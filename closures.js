function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }
  

  const add5 = makeAdder(5);
  const add10 = makeAdder(10);
  
  console.log(add5(2)); // 7
  console.log(add10(2)); // 12
  

  const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML','CSS','JavaScript','React','Node','MongoDB','Python','D3.js'],
    isMarried: true
  }
  for(const key in person) {
      console.log(key)
  }