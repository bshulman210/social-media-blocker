const socialAccounts = [
  'youtube.com',
  'www.youtube.com',
  'facebook.com',
  'www.facebook.com',
  'twitter.com',
  'www.twitter.com',
  'instagram.com',
  'www.instagram.com',
  'reddit.com',
  'www.reddit.com',
  'flickr.com',
  'www.flickr.com',
  'netflix.com',
  'www.netflix.com',
  'hulu.com',
  'www.hulu.com',
  'amazon.com',
  'www.amazon.com',
  'hbo.com',
  'www.hbo.com',
  'showtime.com',
  'www.showtime.com',
  'pinterest.com',
  'www.pinterest.com',
  'peacock.com',
  'www.peacock.com',
];

localStorage.setItem('counter', '0');

const pageHTML = (num) => {
  // console.log(num);

  return `<div class="main">
    <div class="header1">HOW DARE YOU 😱</div>
    <hr>
    <div class="header2">GET BACK TO WORK!</div>
    <div class="strikes">ATTEMPTS: ${num}</div>
  </div>`;
};

const pageStyling = () => {
  return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
    body {
      background: #33cc99;
      color: #fff;
      font-family: "Open Sans", sans-serif;
      max-height: 700px;
    }
    .main {
      text-align: center;
      display: block;
      position: relative;
      width: 80%;
      margin: 100px auto;
    }
    .header1 {
      font-size: 80px;
      position: relative;
      display: inline-block;
      height: 120px;
      letter-spacing: 15px;
    }
    .header2 {
      text-align: center;
      display: block;
      position: relative;
      letter-spacing: 12px;
      font-size: 4em;
      line-height: 80%;
    }
    .text {
      font-size: 70px;
      text-align: center;
      position: relative;
      display: inline-block;
      margin: 19px 0px 0px 0px;
      width: 100%;
      line-height: 1.2em;
      display: inline-block;
    }
    hr {
      margin-bottom: 40px;
    }
    .strikes {
      font-size: 30px;
      text-align: center;
      position: relative;
      margin: 40px auto;
      color: red;
    }
  </style>`;
};

if (socialAccounts.includes(window.location.hostname)) {
  let attemptCounter = Number(localStorage.getItem('counter'));
  attemptCounter = attemptCounter + 1;
  let stringMe = attemptCounter.toString();
  localStorage.setItem('counter', stringMe);
  console.log(attemptCounter);
  document.head.innerHTML = pageStyling();
  document.body.innerHTML = pageHTML(attemptCounter);
}
