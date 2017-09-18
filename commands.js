var fs = require('fs');

module.exports = {
    pwd: function() {
        process.stdout.write(process.cwd());
        process.stdout.write('\nprompt > ');
    },
    date: function() {
        var date = new Date();
        process.stdout.write(date.toUTCString());
        process.stdout.write('\nprompt > ');
    },
    ls: function() {
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
              process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("prompt > ");
          });
    },
    echo: function(arg) {
        process.stdout.write(arg);
        process.stdout.write('\nprompt > ');
    },
    cat: function(arg) {
        fs.readFile(arg, function(err, data) {
            if (err) throw err;
            process.stdout.write(data.toString() + "\n");
            process.stdout.write("prompt > ");
          });
    },
    head: function(arg) {
        fs.readFile(arg, function(err, data) {
            if (err) throw err;
            var linesArr = data.toString().split('\n');
            linesArr.length = 5
            process.stdout.write(linesArr.join('\n') + "\n");
            process.stdout.write("prompt > ");
          });
    },

}