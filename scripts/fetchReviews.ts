// scripts/fetchReviews.js
const fs = require('fs');

const googlePlacesAPIKey = 'AIzaSyAcPmiTIAfl-BYDQuc2sx6hZhMiH6PTPo8';
const placeId = 'ChIJbf8C1yFxdDkR3n12P4DkKt0';

async function fetchAndSaveReviews() {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${googlePlacesAPIKey}&fields=reviews`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);


  if (data.result && data.result.reviews) {
    fs.writeFileSync('googleReviews.json', JSON.stringify(data.result.reviews, null, 2));
    console.log('Reviews saved to googleReviews.json');
  } else {
    console.error('Failed to fetch reviews or no reviews available');
  }
}

fetchAndSaveReviews();
