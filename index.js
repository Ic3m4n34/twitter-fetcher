import twitterFetcher from "./twitterFetcher";

var configProfile = {
  profile: { screenName: "NuFiOps" },
  maxTweets: 1,
  enableLinks: true,
  showUser: true,
  showTime: true,
  showImages: true,
  lang: "en",
  dataOnly: true,
  customCallback: getTweets
};

function getTweets(tweets) {
  console.log("length", tweets.length);
  if (tweets.length > 0) {
    console.log("has tweets");
  } else {
    console.log("no tweets");
  }
}

async function fetchTweets() {
  await twitterFetcher.fetch(configProfile);
}

fetchTweets();
