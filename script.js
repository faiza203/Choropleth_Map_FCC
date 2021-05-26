let req = new XMLHttpRequest();
let educationURL =
  "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json";
let countryURL =
  "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json";

const getEducationData = async (countryData) => {
  await fetch(educationURL)
    .then((response) => response.json())
    .then((result) => {
      console.log(result, countryData);
    });
};

req.open("GET", countryURL, true);
req.onload = () => {
  let countryData = JSON.parse(req.responseText);
  getEducationData(countryData);
};
req.send();
