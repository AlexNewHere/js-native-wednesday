
console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

const sum = (num1: number) => (num2: number) => {
    return num1 + num2
}
console.log(sum(3)(6))


// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

const makeCounter = () => {
    let a: number = 0
    return () => {
        return a += 1
    }
}
const counter = makeCounter()
console.log(counter())
console.log(counter())
const counter2 = makeCounter()
console.log(counter2())
console.log(counter())


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

const makeCount = (num: number) => {
    let a: number = num
    return {
        increase: function () {
            return a += 1
        },
        decrease: () => {
            return a -= 1
        },
        reset: () => {
            return a = 0
        },
        set: () => {
            return a = num
        },
    }
}
const count = makeCount(2)
console.log(count.increase())
console.log(count.increase())
console.log(count.decrease())
console.log(count.decrease())
console.log(count.reset())
console.log(count.set())
console.log(count.increase())


// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

function curry(func: any) {

    return function curried(...args: any) {
        if (args.length >= func.length) {
            // @ts-ignore
            return func.apply(this, args);
        } else {
            return function(...args2: any) {
                // @ts-ignore
                return curried.apply(this, args.concat(args2));
            }
        }
    };

}
function sum123(a: number, b: number, c:number) {
    return a + b + c;
}

let curriedSum = curry(sum123);
//@ts-ignore
console.log(curriedSum(2, 3)(5, 3))


// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

function sumTo(num: number): number {
    if (num == 0) {
        return num;
    } else {
        return num + sumTo(num - 1);
    }
}

console.log(sumTo(2))
console.log(sumTo(3))
console.log(sumTo(4))
console.log(sumTo(100))


function fackTo(num: number): number {
    if (num == 1) {
        return num;
    } else {
        return num * fackTo(num - 1);
    }
}


console.log(fackTo(2))
console.log(fackTo(3))
console.log(fackTo(5))

function fibTo(num: number) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= num; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fibTo(13))


let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list: any) {

    console.log(list.value);
    if (list.next) {
        printList(list.next);
    }

}

console.log(printList(list))

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.


function flatTo(input: any) {
    const stack = [...input];
    const res = [];
    while (stack.length) {
        const next = stack.pop();
        if (Array.isArray(next)) {
            stack.push(...next);
        } else {
            res.push(next);
        }
    }
    return res.reverse();
}

console.log(flatTo([1,2,4,[1,2,4,[2,5,6,]]]))


// just a plug
export default () => {
};