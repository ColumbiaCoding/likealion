var hebrewDate = document.querySelector('ul');

var apiUrl = 'https://www.hebcal.com/hebcal?v=1&cfg=json&maj=on&min=on&mod=on&nx=on&start=2023-09-01&end=2024-09-30&month=x&ss=on&mf=on&c=on&geo=geoname&geonameid=5110302&M=on&s=on&lg=s'


var calendarData = fetch(apiUrl)
.then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return response.json(); // Assuming the API returns JSON data
  })
  .then(data => {
    // Handle the JSON response data
    data.items.forEach(element => {
      // console.log(element.title);
      // console.log(element.hdate);
      // console.log(element.category);
      // console.log(element.hebrew);
      // console.log(element.memo);
      var titlelistItem = document.createElement('li');
      var hdatelistItem = document.createElement('li');
      var categoryListItem = document.createElement('li');
      var hebrewlistItem = document.createElement('li');
      var memolistItem = document.createElement('li');
      
      titlelistItem.textContent = element.title;
      hdatelistItem.textContent = element.hdate;
      categoryListItem.textContent = element.category;
      hebrewlistItem.textContent = element.hebrew;
      memolistItem.textContent = element.memo;
      hebrewDate.appendChild(titlelistItem);
      hebrewDate.appendChild(hdatelistItem);
      // hebrewDate.appendChild(categoryListItem);
      hebrewDate.appendChild(titlelistItem);
      hebrewDate.appendChild(hebrewlistItem);
      // hebrewDate.appendChild(memolistItem);
    })
    
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch request
    console.error('Fetch error:', error);
  });
