'use strict';

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'Ttm9T3jW7ItGLfoEF1IaUztpCbCc5BVHFgzNjAbKgz2iyEP9JTBsjYJFxYz-HBux6r4GGROqZb8AWno1CvxmretUb7l7L79FUOByZGk9s2SX9kWEXF2X3BNPcuPlW3Yx';

const searchRequest = {
  term:'Burrito',
  location: 'Near UC Berkeley',
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});
