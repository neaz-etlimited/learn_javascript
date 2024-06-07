
// let order = (fruit_name, production) => {
//   setTimeout(() => {
//     console.log(`${stock.fruits[fruit_name]} was selected`);
//     production();
//   }, 2000);
// };
// let production = () => {
//   setTimeout(() => {
//     console.log("Production has started");

//     setTimeout(() => {
//       console.log("The fruit has been chopped");

//       setTimeout(() => {
//         console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added`);

//         setTimeout(() => {
//           console.log("The machine was started");

//           setTimeout(() => {
//             console.log(`${stock.holder[0]} was selected`);

//             setTimeout(() => {
//               console.log(`${stock.toppings[0]} was added`);

//               setTimeout(() => {
//                 console.log("Serve ice cream");
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0);
// };

// order(0, production);


let is_shop_open = true;

let stock = {
  fruits: ["strawberry", "grapes", "banana"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("Our shop is closed"));
//     }
//   });
// };

// order(2000, () => console.log(`${stock.fruits[1]} was selected`))
//   .then(() => order(2000, () => console.log("Fruit was chopped")))
//   .then(() => order(1000, () => console.log("Start the machine")))
//   .then(() => order(2000, () => console.log(`Ice cream placed on ${stock.holder[0]}`)))
//   .then(() => order(3000, () => console.log(`${stock.toppings[0]} was selected`)))
//   .then(() => order(1000, () => console.log("Ice cream was served")))
//   .catch(()=> {
//     console.log("Customer Left")
//   })


// async function order (){
//   try {
//     await abc;
//   } catch (error) {
//     console.log("abc doesn't exist", error.message)
//   }
//   finally{
//     console.log("Runs code anyways")
//   }
// }

// order().then(()=>{
//   console.log("This is here in then")
// })


let toppings_choice = () =>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(
        console.log("Which topping would you love?")
      )
    }, 0)
  })
}

// async function kitchen(){
//  console.log("A")
//  console.log("B")
//  console.log("C")

//  await toppings_choice()

//  console.log(" D ")
//  console.log(" E ")
// }

// kitchen()

// console.log("Cleaning the dishes")
// console.log("Cleaning the table")
// console.log("Taking other orders")

function time(ms){
  return new Promise ((resolve, reject)=>{
    if(is_shop_open){
      setTimeout(resolve,ms)
    }
    else{
      reject(console.log("Shop is closed"))
    }
  })
}

async function kitchen(){
  try {
    await time(2000)
    console.log(`${stock.fruits[0]}`)
  } catch (error) {
    console.log("Customer left", error)
    
  }
  finally{
    console.log("Day ended, shop is closed")

  }
}

kitchen();