//manger information will use this template
function ManagerCard(data){
    return`
        <div class="col-4">
            <div class="card mb-5 border-dark">
                <div class="card-body bg-secondary">
                    <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                    <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                    <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  </svg>${data.getName()}</h5>
                    <p class="card-text">${data.getRole()}</p>
                </div>
                <div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item card-link">ID: ${data.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></li>
                        <li class="list-group-item">Office number: ${data.getOffice()}</li>
                    </ul>
                </div>
            </div>
        </div>
    `
};
//engineer information will use this template
function EngineerCard(data){
    return`
        <div class="col-4">
            <div class="card mb-5 border-dark">
                <div class="card-body bg-secondary">
                    <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                    <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                    <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  </svg>${data.getName()}</h5>
                    <p class="card-text">${data.getRole()}</p>
                </div>
                <div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item card-link">ID: ${data.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></li>
                        <li class="list-group-item">Github: <a href = "https://www.github.com/${data.getGithub()}/" target = "_blank">${data.getGithub()}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    `
};
//intern information will use this template
function InternCard(data){
    return`
        <div class="col-4">
            <div class="card mb-5 border-dark">
                <div class="card-body bg-secondary">
                    <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                    <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                    <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  </svg>${data.getName()}</h5>
                    <p class="card-text">${data.getRole()}</p>
                </div>
                <div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item card-link">ID: ${data.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></li>
                        <li class="list-group-item">University: ${data.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>
    `
};
//template for HTML file
const generatePage = data => {
    let cards = "";
    for (let i =0; i<data.length; i++) {
        if (data[i].getRole() === 'Manager'){
            cards= cards+ManagerCard(data[i]);
        }else if (data[i].getRole() === 'Engineer'){
            cards= cards+EngineerCard(data[i]);
        } else if (data[i].getRole() === 'Intern'){
            cards= cards+InternCard(data[i]);
        }
    } 
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
                ${cards}
            </div>
        </div>
    </body>
    </html>
    `
}; 

//to make available inside index.js
module.exports = generatePage;