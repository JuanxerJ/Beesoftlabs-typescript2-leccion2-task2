//----------------------------------------------- Ejercicio 1 ---------------------------------------------//

export function gooseFilter(birds) {
  const geese = [
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ];
  return birds.filter((bird) => !geese.includes(bird));
}

//----------------------------------------------- Ejercicio 2 ---------------------------------------------//
export class Kata {
  static highAndLow(numbers) {
    const numbersSplited = numbers.split(" ").map(Number);
    return `${Math.max(...numbersSplited)} ${Math.min(...numbersSplited)}`;
  }
}

//----------------------------------------------- Ejercicio 3 ---------------------------------------------//
export class Kata {
  static getCount(str) {
    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
  }
}

//----------------------------------------------- Ejercicio 4 ---------------------------------------------//

export class Kata {
  static disemvowel(str) {
    return str.replace(/[aeiou]/gi, "");
  }
}

//----------------------------------------------- Ejercicio 5 ---------------------------------------------//
function solution(list) {
  return list
    .reduce((acc, n, i, arr) => {
      if (n !== arr[i - 1] + 1) {
        acc.push([n]);
      } else {
        acc[acc.length - 1].push(n);
      }
      return acc;
    }, [])
    .map((arr) => (arr.length > 2 ? `${arr[0]}-${arr[arr.length - 1]}` : arr))
    .join(",");
}

//----------------------------------------------- Ejercicio 6 ---------------------------------------------//
function solution(value) {
  return `Value is ${value.toString().padStart(5, "0")}`;
}

//----------------------------------------------- Ejercicio 7 ---------------------------------------------//

function plant(seed, water, fert, temp) {
  const tempGood = temp >= 20 && temp <= 30;
  const flower = tempGood ? seed : "";
  return (
    ("-".repeat(water) + flower.repeat(fert)).repeat(water) +
    (tempGood ? "" : seed)
  );
}
