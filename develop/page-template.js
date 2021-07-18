//template for HTML file
function generatePage(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" 
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
       <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>    
       <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <title>Team Roster</title>
    </head>
    <body>
        <header>
            <h1 class="card-body text-center display-1 bg-primary">My Team</h1>
        </header>
        <div class="container-fluid">
            <div class="row row-cols-1 row-cols-sm-3 g-4">
                <div class="col-4">
                    <div class="card mb-5 border-dark">
                    <div class="card-body bg-secondary">
                        <h5 class="card-title">${data.managerName}</h5>
                        <p class="card-text">${data.managerRole}</p>
                    </div>
                    <div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item card-link">ID: ${data.managerId}</li>
                            <li class="list-group-item">Email: ${data.managerEmail}</li>
                            <li class="list-group-item">Office number: ${data.managerNumber}</li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                    </div>
                </div>
            </div>  
        </div>
    </body>
    </html>
    `
}; 

//to make available inside index.js
module.exports = generatePage;