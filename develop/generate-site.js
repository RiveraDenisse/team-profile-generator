const fs = require('fs');

// writing files
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('TeamRoster.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

// copying file
const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('style.css', '../style.css', err => {
      if (err) {
        reject({
          ok: false,
          message: 'Something went wrong!',
          err
        });
        return;
      }

      resolve({
        ok: true,
        message: 'Stylesheet created!'
      });
    });
  });
};

module.exports = { writeFile, copyFile };
