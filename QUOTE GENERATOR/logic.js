const qarray = [
  "The best way to get started is to quit talking and begin doing.",
  "Don't let yesterday take up too much of today.",
  "It's not whether you get knocked down, it's whether you get up.",
  "If you are working on something exciting, it will keep you motivated.",
  "Success is not in what you have, but who you are.",
  "Dream bigger. Do bigger.",
  "Don't watch the clock; do what it does. Keep going.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Dream it. Wish it. Do it.",
  "Great things never come from comfort zones.",
  "Push yourself, because no one else is going to do it for you.",
  "Sometimes later becomes never. Do it now.",
  "Little things make big days.",
  "It always seems impossible until it's done.",
  "Don't stop when you're tired. Stop when you're done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
  "Don't wait for opportunity. Create it.",
  "Sometimes we're tested not to show our weaknesses, but to discover our strengths.",
  "The key to success is to focus on goals, not obstacles.",
];

const ele = document.querySelector('h1');
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  const index = Math.floor(Math.random() * 20);
  ele.textContent = qarray[index];
});
