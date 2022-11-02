console.log('Person1: Shows ticket');
console.log('Person2: Shows ticket');

const preMovie = async() =>{
    const promiseWifeBringingTicket = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve('ticket')
        }, 3000);
    })
    const getPopcorn = new Promise((resolve, reject)=> resolve('Popcorn'));

    const addButter = new Promise((resolve, reject)=> resolve('Butter'));

    const getColdDrinks = new Promise((resolve, reject)=> resolve('Colddrinks'));

    let ticket  = await promiseWifeBringingTicket
    console.log(`wife: I have the ${ticket}`);
    console.log('husband: We should go in');
    console.log('wife: no i am hungry');

    let popcorn = await getPopcorn
    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn');

    let butter = await addButter
    console.log(`husband: i got some ${butter}`);
    console.log('husband: anything else darling');
    console.log('wife: yes i need colddrinks also');
    console.log('husband: ok bringing the cold drinks');

    let coldDrinks = await getColdDrinks
    console.log(`husband: here is ours ${coldDrinks}`);
    console.log('husband: now we should go in');
    console.log('wife: yes offcourse');

    return ticket;
}
preMovie().then((t) => console.log(`Person3: shows ${t}`));

console.log('Person4: Shows ticket');
console.log('Person5: Shows ticket');