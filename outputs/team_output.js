const headContent = 
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Development Team</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <h1>Development Team</h1>
  <section class="cards">`;
const footContent = 
` </section>
</body>
</html>`;

let teamContent = ``;

function renderManager (person) {
  let newContent = 
    `<div class="card manager">
      <div class="card-head">
        <h2>${person.name}</h2>
        <h3>${person.role}</h3>
      </div>
      <div class="container">
        <p>Employee ID: ${person.id}</p>
        <p>Email: <a href="mailto:${person.email}">${person.email}</a></p>
        <p>Office Number: ${person.officeNumber}</p>
      </div>
   </div>`;

   teamContent += newContent;
}

function renderIntern (person) {
  let newContent = 
  `<div class="card intern">
      <div class="card-head">
        <h2>${person.name}</h2>
        <h3>${person.role}</h3>
      </div>
      <div class="container">
        <p>Employee ID: ${person.id}</p>
        <p>Email: <a href="mailto:${person.email}">${person.email}</a></p>
        <p>School: ${person.school}</p>
      </div>
    </div>`;

  teamContent += newContent;
}

function renderEngineer (person) {
  let newContent = 
  `<div class="card engineer">
      <div class="card-head">
        <h2>${person.name}</h2>
        <h3>${person.role}</h3>
      </div>
      <div class="container">
        <p>Employee ID: ${person.id}</p>
        <p>Email: <a href="mailto:${person.email}">${person.email}</a></p>
        <p>GitHub Username: <a target="__blank" href="https://github.com/${person.github}">${person.github}</a></p>
      </div>
    </div>`;

  teamContent += newContent;
}

function generateHTML(arr) {
  arr.forEach(element => {
    switch (element.role) {
      case "Manager": renderManager(element); break;
      case "Engineer": renderEngineer(element); break;
      case "Intern": renderIntern(element); break;
      }
  });
  
  const fullContent = 
    `${headContent}
    ${teamContent}
    ${footContent}`;
  return fullContent;
}


module.exports = { generateHTML };