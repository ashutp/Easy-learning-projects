let quotes = [
  "We go together like coffee and mornings.",
  "You stole my heart, but I’ll let you keep it.",
  "Love is sharing your fries — even when you said you weren’t hungry.",
  "You’re my favorite notification.",
  "We’re the perfect kind of weird together.",
  "In a sea of people, my eyes will always search for you.",
  "Souls don't meet by accident.",
  "You are my calm after every storm.",
  "Two hearts, one rhythm.",
  "Youre my favorite notification",
  "Were like a small gang — but cuter",
  "I love you even when you steal the blanket",
  "Relationship status: stealing each others hoodies since day one",
  "You + Me = Password protected happiness",
  "We may fight, but we never unfollow",
  "My favorite place is next to you (and sometimes slightly away when you snore)",
  "We go together like WiFi and low signal",
  "Every love story is beautiful, but ours is my favorite mess",
  "Youre the peanut butter to my overthinking",
  "Our relationship is 90% memes and 10% arguing about food",
  "Love is sharing your fries even when you said you werent hungry",
  "Were the perfect couple — I annoy, you tolerate",
  "You had me at I brought snacks",
  "Youre the reason my phone battery is always at 1%",
  "I love you more than Netflix… and thats saying something",
  "Together we make one functional adult",
];

let len = quotes.length;
const form = document.querySelector("form");
const boy = document.getElementById("Boy");
const girl = document.getElementById("Girl");

function rest_alphbate_count(str1) {
  let count2 = "";
  for (let index = 0; index < str1.length; index++) {
    if (str1[index] != "#") {
      count2 += "1";
    }
  }
  return count2;
}
function result(str) {
  let count = str;

  // repeat until only 2 digits left
  while (count.length > 2) {
    let modstr = "";
    let start = 0;
    let end = count.length - 1;

    // add first and last digits moving inward
    while (start < end) {
      const sum = Number(count[start]) + Number(count[end]);
      modstr += sum.toString();
      start++;
      end--;
    }

    // if middle one digit left (for odd length)
    if (start === end) {
      modstr += count[start];
    }
    // console.log('what ha');

    // update count for next round
    count = modstr;
  }

  return Number(count);
}

// impotant method for string modification return obj contain two string
function modify(i, j, str, str2) {
  let obj = {
    mod1: "",
    mod2: "",
  };
  for (let index = 0; index < str.length; index++) {
    if (index == i) {
      obj.mod1 += "#";
    } else {
      obj.mod1 += str[index];
    }
  }

  for (let index2 = 0; index2 < str2.length; index2++) {
    if (index2 == j) {
      obj.mod2 += "#";
    } else {
      obj.mod2 += str2[index2];
    }
  }

  return obj;
}

function calculator(boy, girl) {
  let mod1 = boy.toUpperCase();
  let mod2 = girl.toUpperCase();
  // this for stirng comaprison
  let contain = "";
  let contain2 = "";
  for (let index = 0; index < mod1.length; index++) {
    for (let index2 = 0; index2 < mod2.length; index2++) {
      if (
        mod1[index] == mod2[index2] &&
        mod1[index] != "#" &&
        mod2[index2] != "#"
      ) {
        const obj = modify(index, index2, mod1, mod2);
        mod1 = obj.mod1;
        mod2 = obj.mod2;
        contain += "2";
      }
    }
  }
  let love = "LOVE";
  // for love comparison with str1
  for (let index = 0; index < mod1.length; index++) {
    for (let index2 = 0; index2 < love.length; index2++) {
      if (
        mod1[index] == love[index2] &&
        mod1[index] != "#" &&
        love[index2] != "#"
      ) {
        const obj = modify(index, index2, mod1, love);
        mod1 = obj.mod1;
        love = obj.mod2;
        contain += "2";
      }
    }
  }
  // for love comparison with str2
  for (let index = 0; index < mod2.length; index++) {
    for (let index2 = 0; index2 < love.length; index2++) {
      if (
        mod2[index] == love[index2] &&
        mod2[index] != "#" &&
        love[index2] != "#"
      ) {
        const obj = modify(index, index2, mod2, love);
        mod2 = obj.mod2;
        love = obj.mod1;
        contain += "2";
      }
    }
  }
  contain2 += rest_alphbate_count(mod1);
  contain2 += rest_alphbate_count(mod2);
  contain2 += rest_alphbate_count(love);
  contain += contain2;
  let ans = result(contain);
  console.log(contain);

  return ans;
}

function clearfun() {
  const ele2 = document.getElementById("ele");
  ele2.remove();
  return 0;
}

boy.addEventListener("click", () => {
  const ele = document.getElementById("ele");
  ele.textContent = "";
   const ele2 = document.getElementById("btn");
  ele2.textContent = "";
  // btn.textContent="Result";
});
girl.addEventListener("click", () => {
  const ele2 = document.getElementById("btn");
  ele2.textContent = "";
    const ele = document.getElementById("ele");
  ele.textContent = "";
  // btn.textContent="Result";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (boy.value.length > 0 && girl.value.length > 0) {
    const BOY = boy.value;
    const Girl = girl.value;
    const result = calculator(BOY, Girl);
    // span

    // const ele = document.querySelector(".ele");

    ele.textContent = "";
    const btn = document.getElementById("btn");
    btn.textContent = ` ${result}% the love`;
    btn.style.border = "none";
    btn.style.backgroundColor = "white";

    const h2 = document.getElementById("ele");

    girl.after(h2);
    if (result > 50) {
      const ramdom = Math.floor(Math.random() * (len - len / 2) + 1) + len / 2;
      const img = document.getElementById("img");
      img.style.filter = ` brightness(0) saturate(100%) invert(20%) sepia(61%) saturate(7500%)
  hue-rotate(354deg) brightness(102%) contrast(100%)`;
      h2.textContent = quotes[ramdom];
      h2.style.color = "black";
      h2.style.fontSize = "15px";
    } else {
      const ramdom = Math.floor(Math.random() * (len / 2) + 1);
      const img = document.getElementById("img");
      img.style.filter = ` brightness(0) saturate(100%) invert(20%) sepia(61%) saturate(7500%)
  hue-rotate(354deg) brightness(50%) contrast(100%)`;
      h2.textContent = quotes[ramdom];
      h2.style.color = "black";
      h2.style.fontSize = "15px";
    }
    // button logic

    form.reset();
  }
});
console.log(b);
