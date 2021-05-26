let req = new XMLHttpRequest();
let educationURL =
  "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json";
let countryURL =
  "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json";

let height = 600;
let width = 960;

const getEducationData = async (countryData) => {
  await fetch(educationURL)
    .then((response) => response.json())
    .then((result) => {
      createSVG(result, countryData);
    });
};

const colors = [
  " rgb(229, 245, 224)",
  "rgb(199, 233, 192)",
  "rgb(161, 217 , 155)",
  " rgb(116, 196, 118)",
  "rgb(65, 171, 93)",
  "rgb(35, 139 , 69)",
  "rgb(0, 109 , 44)",
];

const createSVG = (educationData, countryData) => {
  let svg = d3
    .select("body")
    .append("svg")
    .attr("height", height)
    .attr("width", width);
  let colorsG = svg
    .append("g")
    .attr("transform", `translate( ${height - 100} , 0)`);
  let colorsR = colorsG
    .selectAll("rect")
    .data(colors)
    .enter()
    .append("rect")
    .attr("height", 8)
    .attr("width", 33)
    .attr("x", (d, i) => i * 33)
    .style("fill", (d) => d);
};

req.open("GET", countryURL, true);
req.onload = () => {
  let countryData = JSON.parse(req.responseText);
  getEducationData(countryData);
};
req.send();
