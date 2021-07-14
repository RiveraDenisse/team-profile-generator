module.exports = Employee;

function Employee (name) {
    this.name = name;
    if (this.name === 'Denisse') {
        console.log('name is logged')
    } else {
        console.log("no name is logged");
    }
};