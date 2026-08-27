const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'test.txt');

console.log('Creating File...');
fs.writeFile(filePath, 'Hello Node.js\n', function(err) {
  if (err) {
    console.log('Error creating file: ' + err.message);
    return;
  }
  console.log('File Created');

  console.log('Reading File');
  fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
      console.log('Error reading file: ' + err.message);
      return;
    }
    console.log(data.trim());

    console.log('Updating File...');
    fs.appendFile(filePath, 'Learning FS Module\n', function(err) {
      if (err) {
        console.log('Error updating file: ' + err.message);
        return;
      }
      console.log('File Updated');

      fs.readFile(filePath, 'utf8', function(err, updatedData) {
        if (err) {
          console.log('Error reading file: ' + err.message);
          return;
        }
        console.log(updatedData.trim());

        console.log('Deleting File...');
        fs.unlink(filePath, function(err) {
          if (err) {
            if (err.code === 'ENOENT') {
              console.log('File not found.');
            } else {
              console.log('Error deleting file: ' + err.message);
            }
            return;
          }
          console.log('File Deleted');
        });
      });
    });
  });
});
