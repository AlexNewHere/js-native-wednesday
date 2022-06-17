import {log} from 'util';

console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661


let axios = {
    get (url) {
        let promise = new Promise( (resolve, reject) => {
            if (url===1) {
            setTimeout(()=> {resolve('Get Data')}, 3000)
            } else {reject('Data request ended with an error')}
        })
        return promise
    }
}

axios.get(2)
    .then(data=>console.log(data))
    .catch(data=>console.log(data))








// just a plug
export default ()=>{};