const generatePage = (name, github) => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Generator</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/kikinjeri/Portfolio-Generator">Github</a></h2>
  </body>
  </html>
  `;
};
console.log(generatePage('kiki', 'kikinjeri'));
