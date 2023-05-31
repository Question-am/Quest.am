const testimonialsContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-avater");
const username = document.querySelector(".username");
const twitterHandle = document.querySelector(".twitter-handle");

const testimonials = [
  {
    name: "ProTanki",
    photo:
      "https://sun9-65.userapi.com/s/v1/ig2/pnLXWi5wYmcjZOj7riOakoXQNnuvWRpALRD5oxSPRG1YXlnNctyM2-R1pFUJ1J4JUb1niY1aXjqEbqkojrexyq8c.jpg?size=200x200&quality=95&crop=0,0,1000,1000&ava=1",
    text: "ProTanki Online խաղում ինչու չեն ավելացնում XT Legacy Prime",
  },
  {
    name: "ProTanki",
    photo:
      "https://sun9-65.userapi.com/s/v1/ig2/pnLXWi5wYmcjZOj7riOakoXQNnuvWRpALRD5oxSPRG1YXlnNctyM2-R1pFUJ1J4JUb1niY1aXjqEbqkojrexyq8c.jpg?size=200x200&quality=95&crop=0,0,1000,1000&ava=1",
    text: " Երբ է բացվել ProTanki Online Project-ը.",
  },
  {
    name: "ProTanki",
    photo:
      "https://sun9-65.userapi.com/s/v1/ig2/pnLXWi5wYmcjZOj7riOakoXQNnuvWRpALRD5oxSPRG1YXlnNctyM2-R1pFUJ1J4JUb1niY1aXjqEbqkojrexyq8c.jpg?size=200x200&quality=95&crop=0,0,1000,1000&ava=1",
    text: " Ինչպիսի թարմացումներ կցանկանայք տեսնել ProTanki Online խաղում",
  },
  {
    name: "ProTanki",
    photo:
      "https://sun9-65.userapi.com/s/v1/ig2/pnLXWi5wYmcjZOj7riOakoXQNnuvWRpALRD5oxSPRG1YXlnNctyM2-R1pFUJ1J4JUb1niY1aXjqEbqkojrexyq8c.jpg?size=200x200&quality=95&crop=0,0,1000,1000&ava=1",
    text: "ProTanki Online խաղի վերաբերյալ ինչ վիդեոներ կցանկանայք տեսնել armen5505 YouTube ալիքում",
  },
  {
    name: "ProTanki",
    photo:
      "https://sun9-65.userapi.com/s/v1/ig2/pnLXWi5wYmcjZOj7riOakoXQNnuvWRpALRD5oxSPRG1YXlnNctyM2-R1pFUJ1J4JUb1niY1aXjqEbqkojrexyq8c.jpg?size=200x200&quality=95&crop=0,0,1000,1000&ava=1",
    text: "ProTanki Online խաղի վերաբերյալ որ YouTuber-ի վիդեոներնեք հավանում",
  },
  {
    name: "ProTanki",
    photo:
      "https://sun9-65.userapi.com/s/v1/ig2/pnLXWi5wYmcjZOj7riOakoXQNnuvWRpALRD5oxSPRG1YXlnNctyM2-R1pFUJ1J4JUb1niY1aXjqEbqkojrexyq8c.jpg?size=200x200&quality=95&crop=0,0,1000,1000&ava=1",
    text: "Եթե չլինեյն խաղարկություներ արդյոք դուք կխաղայք ProTanki Online խաղը խնդրումեմ պատասխանել անկեխծ",
  },
  {
    name: "ProTanki",
    photo:
      "https://sun9-65.userapi.com/s/v1/ig2/pnLXWi5wYmcjZOj7riOakoXQNnuvWRpALRD5oxSPRG1YXlnNctyM2-R1pFUJ1J4JUb1niY1aXjqEbqkojrexyq8c.jpg?size=200x200&quality=95&crop=0,0,1000,1000&ava=1",
    text: "ProTanki Online խաղում ով է առաջին  հայ XP/BP տուրնիռ խաղացողը",
  },
  {
    name: "ProTanki",
    photo:
       "https://sun9-65.userapi.com/s/v1/ig2/pnLXWi5wYmcjZOj7riOakoXQNnuvWRpALRD5oxSPRG1YXlnNctyM2-R1pFUJ1J4JUb1niY1aXjqEbqkojrexyq8c.jpg?size=200x200&quality=95&crop=0,0,1000,1000&ava=1",
    text: "ProTanki online  խաղում Shakal min ProFifa mega shakal min shakal shaft որ խաղարկության անունը չնշեցի"
  }
];

let counter = 1;

function showNextTestimonial() {
  const { name, position, photo, text } = testimonials[counter];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  twitterHandle.innerHTML = position;

  counter++;

  if (counter > testimonials.length - 1) {
    counter = 0;
  }
}

setInterval(showNextTestimonial, 10000);