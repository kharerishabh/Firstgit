console.log('Person1: Shows ticket');
console.log('Person2: Shows ticket');

const promiseWifeBringingTicket = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('ticket')
    }, 3000)
});

// promiseWifeBringingTicket.then((t) =>{
//     console.log(`Person3: Shows ${t}`);
// });

const getPopcorn = promiseWifeBringingTicket.then((t) =>{
    console.log('wife: I have a ticket');
    console.log('husband: We should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve,reject) => resolve(`${t} popcorn`));
})

const addButter = getPopcorn.then((t) =>{
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn');
    return new Promise((resolve,reject) => resolve(`${t} butter`))
});
// addButter.then((t) => console.log(t));

const getColdDrinks = addButter.then((t) =>{
    console.log('husband: now should we go in');
    console.log('wife: i also need colddrinks');
    console.log('husband: ok bringing the colddrinks also');
    return new Promise((resolve,reject) => resolve(`${t} colddrinks`))
});
getColdDrinks.then((t) => console.log(t)).catch((err) => console.log(err));

console.log('Person4: Shows ticket');
console.log('Person5: Shows ticket');