const form = document.getElementById("form");

const zodiacSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];
const birthdayCompliments = [
  "You bring light wherever you go!", // 1
  "Your smile makes everything brighter!", // 2
  "You have an amazing creative mind!", // 3
  "You inspire everyone around you!", // 4
  "You’re stronger than you think!", // 5
  "Your kindness is truly contagious!", // 6
  "You have a heart full of gold!", // 7
  "You always make people feel special!", // 8
  "Your confidence is admirable!", // 9
  "You spread positivity effortlessly!", // 10
  "You’re full of great ideas!", // 11
  "You have a wonderful sense of humor!", // 12
  "You never give up — and that’s inspiring!", // 13
  "You make life more colorful for others!", // 14
  "Your energy is truly uplifting!", // 15
  "You are brave and kind — a rare combo!", // 16
  "You always bring calm to chaos!", // 17
  "You’re full of charm and grace!", // 18
  "You make hard things look easy!", // 19
  "You’re a great listener and friend!", // 20
  "You have an incredible sense of style!", // 21
  "You always find the silver lining!", // 22
  "You’re a natural leader!", // 23
  "You bring good vibes wherever you go!", // 24
  "You make people believe in themselves!", // 25
  "You’re thoughtful and genuine — that’s rare!", // 26
  "You shine bright even on dull days!", // 27
  "You’re wise beyond your years!", // 28
  "You make ordinary moments extraordinary!", // 29
  "You’re truly one of a kind!", // 30
  "You make the world a better place — just by being you!", // 31
];

const victimCardZodiacCompliments = [
  "You feel everything deeply, even when you pretend you don’t.", // 1
  "You forgive too easily, but never forget the pain.", // 2
  "You carry others’ emotions like it’s your full-time job.", // 3
  "You always see the good in people — even when they don’t deserve it.", // 4
  "You act strong, but your heart is too gentle for this world.", // 5
  "You crave peace but attract chaos — it’s the universe’s joke.", // 6
  "You overthink because you care too much.", // 7
  "You protect everyone else while quietly breaking inside.", // 8
  "You say you’ve moved on, but your soul still replays the story.", // 9
  "You heal others while ignoring your own wounds.", // 10
  "You always love harder than people expect — that’s your power and your curse.", // 11
  "You read energy better than most read words.", // 12
  "You pretend not to care, but your heart tells on you.", // 13
  "You feel responsible for everyone’s happiness — except your own.", // 14
  "You chase peace but get dragged into drama — cosmic irony.", // 15
  "You sense things before they happen — intuition or emotional memory?", // 16
  "You’d rather get hurt than make someone else uncomfortable.", // 17
  "You carry your past like constellations — shining but heavy.", // 18
  "You love like it’s the last time — every time.", // 19
  "You build walls just to see who cares enough to climb them.", // 20
  "You say ‘it’s okay’ even when it’s clearly not.", // 21
  "You keep giving chances — not because they deserve it, but because you hope they’ll change.", // 22
  "You hide your pain in laughter — and no one ever notices.", // 23
  "You make people feel safe, even when you don’t feel safe yourself.", // 24
  "You walk away quietly, but your absence is loud.", // 25
  "You’re strong because you’ve had no choice — not because it’s easy.", // 26
  "You absorb people’s emotions like a sponge — that’s your gift and your weight.", // 27
  "You act detached, but your heart remembers every word.", // 28
  "You always try to fix broken things — even when it’s you that’s cracked.", // 29
  "You love the idea of love, even when it hurts you.", // 30
  "You forgive the stars for giving you such a soft heart.", // 31
];

const zodiacStyleRecommendations = [
  "Trust your instincts today — they know more than logic does.", // 1
  "Let go of what you can’t control; peace starts with acceptance.", // 2
  "Speak your truth, even if your voice shakes.", // 3
  "Focus on progress, not perfection — small steps count.", // 4
  "Don’t chase people; attract them with your calm energy.", // 5
  "Pause before reacting — silence can be your power.", // 6
  "Your dreams need action today, not just intention.", // 7
  "Be gentle with yourself — healing isn’t linear.", // 8
  "It’s okay to outgrow people who no longer align with your peace.", // 9
  "Start something new — the universe supports fresh beginnings.", // 10
  "Don’t explain your worth; let your energy speak for you.", // 11
  "Someone admires you more than you think — be open to connection.", // 12
  "Listen more today — answers often hide in silence.", // 13
  "Your kindness will open a door today — keep being you.", // 14
  "The thing you fear doing is exactly what will free you.", // 15
  "Be patient — what’s meant for you can’t be taken from you.", // 16
  "A small act of courage will shift your entire path.", // 17
  "You don’t need validation — your calm confidence is enough.", // 18
  "Reconnect with something that once made you happy.", // 19
  "Don’t carry guilt for choosing peace over chaos.", // 20
  "Say no more often — your time is sacred.", // 21
  "Let your silence be louder than arguments.", // 22
  "Focus on gratitude — it multiplies what you already have.", // 23
  "Forgive, but don’t forget the lesson.", // 24
  "Someone from your past might resurface — trust how you’ve grown.", // 25
  "Stop doubting yourself — you’ve already proven enough.", // 26
  "Your peace of mind is worth more than being right.", // 27
  "Let go of overthinking — clarity comes when you breathe.", // 28
  "Today’s delay is divine timing — trust the pause.", // 29
  "Be your own cheerleader — your journey is yours alone.", // 30
  "Endings aren’t failures; they’re redirections to something better.", // 31
];

const zodiacPredictions = [
  "A chapter from your past may resurface — this time, you’ll handle it differently.", // 1
  "Your silence will reveal who truly values your presence.", // 2
  "An unexpected message could stir old emotions — breathe before reacting.", // 3
  "You’re about to see why the universe made you wait.", // 4
  "Someone’s mask may fall off soon — trust what you see, not what you hear.", // 5
  "Energy you once gave freely will finally return to you.", // 6
  "A hidden truth will find its way to you — be ready for clarity.", // 7
  "You’ll soon realize why you had to lose something precious first.", // 8
  "Your intuition is louder than ever — listen before logic interferes.", // 9
  "You’re walking into a season where loyalty will be tested.", // 10
  "A small risk will bring you closer to a long-desired change.", // 11
  "Someone you least expect will show unexpected kindness.", // 12
  "You’ll soon be recognized for something you quietly worked on.", // 13
  "An emotional shift will make you stronger than before.", // 14
  "The peace you’ve been craving will begin with a bold decision.", // 15
  "You’ll finally stop chasing what was never meant to stay.", // 16
  "The person you miss is thinking of you too — but timing still matters.", // 17
  "Your glow-up won’t be physical — it’ll be spiritual.", // 18
  "A conversation will change how you see everything.", // 19
  "You’re about to receive closure, even if it’s not from the person you expected.", // 20
  "Something you lost will return — in a better form.", // 21
  "You’ll soon outgrow a place or person — don’t resist the growth.", // 22
  "Your name will be mentioned in a room you’ve never entered.", // 23
  "Someone’s energy will reveal their real intentions — pay attention.", // 24
  "A surprise encounter will remind you that fate has a sense of humor.", // 25
  "You’ll learn that distance can protect your peace.", // 26
  "The universe will reward your patience — stay calm through delays.", // 27
  "Your boundaries will scare the wrong people — and attract the right ones.", // 28
  "Someone from your past wants to return, but your heart has already healed.", // 29
  "You’re entering a season of divine realignment — everything is falling into place.", // 30
  "Your energy is shifting — soon, you’ll understand why certain endings had to happen.", // 31
];

const dob = document.getElementById("db");
let existing = document.querySelector(".inp");
existing.addEventListener("click", () => {
  let ele = document.getElementById("insight");
  ele.textContent = "";
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop the form from refreshing the page

  const input = dob.value;

  if (!input) {
    alert("Please select a valid date!");
    return;
  }

  const date = new Date(input);

  // if old result exists, remove it
  let existing = document.getElementById("insight");
  if (existing) {
    existing.remove();
  }

  // create new element
  const ele = document.createElement("h3");
  ele.id = "insight";
  ele.textContent = `Zodiac: ${zodiacSigns[date.getMonth()]}\n
About Birth: ${birthdayCompliments[date.getDate()]}\n
Problem: ${victimCardZodiacCompliments[date.getDate()]}\n
Recommendation: ${zodiacStyleRecommendations[date.getDate()]}\n
Prediction: ${zodiacPredictions[date.getDate()]}`;
  ele.style.whiteSpace = "pre-line";

  form.append(ele);
  form.reset();
});
