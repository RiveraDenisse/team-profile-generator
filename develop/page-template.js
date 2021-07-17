//template for HTML file
function generatePage(data) {
    return `
        <!DOCTYPE html> 
        <html lang="en"> 
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>TEST PAGE</title>
        </head>

        <body>
        </body>
        </html>
    `
}; 

//to make available inside index.js
module.exports = generatePage;