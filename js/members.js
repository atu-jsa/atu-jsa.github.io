const fetch = require('node-fetch');

async function fetchData() {
  try {
    const response = await fetch('../data/members.json');
    const data = await response.json();
    const dictionary = {};

    // Assuming the JSON data is an array of objects with 'key' and 'value' properties
    data.forEach(item => {
      dictionary[item.key] = item.value;
    });

    console.log(dictionary);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();

