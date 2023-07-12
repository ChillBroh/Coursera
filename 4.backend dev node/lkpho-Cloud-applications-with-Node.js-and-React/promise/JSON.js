fetch("http://api.open-notify.org/astros.json")
  .then((response) => response.json()) // Parse the response as JSON
  .then((data) => {
    console.log(data); // Output the parsed JSON data
  })
  .catch((error) => {
    console.log(error); // Handle any errors that occur during the fetch request
  });
