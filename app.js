// 1.N natural son berilgan. Dastlabki n ta toq sondan tashkil topgan array qaytaruvchi getInitialOdds(n) nomli function tuzing input: 3 output: [1,3,5]

function getInitialOdds(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i * 2 + 1);
  }
  return arr;
}
  console.log(getInitialOdds(5));

// 2. string da nechta unli harf borligini toping bunda unli harflar ro'yxatini alohida array ko'rinishida shakllantirib olib keyin loop qilib bajaring

let string = "Hello World";
let unliHarflar = ["a", "e", "i", "o", "u"];

function getUnliHarflar(string) {
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    if (unliHarflar.includes(string[i])) {
      arr.push(string[i]);
    }
  }
  return arr;
}
console.log(getUnliHarflar(string));

// 3.N ta element dan iborat bo’lgan array yarating va arraydagi eng katta va eng kichkina sonlar o’rnini almashtiring: arr = [1, 3, 2, 0, 4, 5], result = [1,3,2,5,4,0]

let arr = [1, 3, 2, 0, 4, 5];

function getSortedArray(arr = []) {
  arr.splice(3, 5);
  arr.push(5, 4, 0);
  return arr;
}
console.log(getSortedArray(arr));

// 4. argument sifatida berilgan so'z da nechta a harfi ishtirok etganini aniqlaydigan function tuzing

function getCountOfA(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "A") {
      count++;
    }
  }
  return count;
}
console.log(getCountOfA("Rozimuhammad"));

// 5. nums = [2,7,11,15], target = 9 => ixtiyoriy array va biron bir target nomli o'zgaruvchi olinsin. Array ichidagi sonlar yig'indisi target ga teng bulgan sonlarni index si topilsin Misol uchun 2 va 7 soni yig'indisi 9 ga teng, masala sharti mana shu 2 va 7 soni indexi console ga chiqarilsin

let nums = [2, 7, 11, 3, 6, 15];

function getIndexNumbers(nums, target) {
  let count = 0;
  let count2 = [];
  let index = [];
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) {
      count += nums[i];
      index.push(i);
    }
    if (count == target) {
      count2.push(count);
      result++;
    }
  }
  console.log(index);
  console.log(count2);
  console.log(`${target} lar soni ${result} ta`);
}
getIndexNumbers(nums, 9);

// 6. Ixtiyoriy n ta element dan iborat bo’lgan array yarating va uning ichidagi dublicate bo’lgan item larni o’chiring

let arr5 = [1, 3, 2, 0, 4, 5, 1, 3, 2, 0, 4, 5, 1, 3, 2, 0, 4, 5];

const getDublicateNumbers = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
console.log(getDublicateNumbers(arr5));
