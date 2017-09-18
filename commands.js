var fs = require('fs');
var request = require('request');

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
              process.stdout.write(file.toString() + '\n');
            });
            process.stdout.write('prompt > ');
          });
    },
    echo: function(arg) {
        process.stdout.write(arg);
        process.stdout.write('\nprompt > ');
    },
    cat: function(arg) {
        fs.readFile(arg, function(err, data) {
            if (err) throw err;
            process.stdout.write(data.toString() + '\n');
            process.stdout.write('prompt > ');
          });
    },
    head: function(arg) {
        fs.readFile(arg, function(err, data) {
            if (err) throw err;
            var linesArr = data.toString().split('\n');
            linesArr.length = 5;
            process.stdout.write(linesArr.join('\n') + '\n');
            process.stdout.write('prompt > ');
          });
    },
    tail: function(arg) {
        fs.readFile(arg, function(err, data) {
            if (err) throw err;
            var linesArr = data.toString().split('\n');
            process.stdout.write(linesArr.slice(-5).join('\n') + '\n');
            process.stdout.write('prompt > ');
          });
    },
    sort: function(arg) {
        fs.readFile(arg, function(err, data) {
            if (err) throw err;
            var linesArr = data.toString().split('\n');
            process.stdout.write(linesArr.sort().join('\n') + '\n');
            process.stdout.write('prompt > ');
          });
    },
    wc: function(arg) {
        fs.readFile(arg, function(err, data) {
            if (err) throw err;
            var linesArr = data.toString().split('\n');
            process.stdout.write('Total Lines: ' + linesArr.length + '\n');
            process.stdout.write('prompt > ');
          });
    },
    uniq: function(arg) {
        fs.readFile(arg, function(err, data) {
            if (err) throw err;
            var linesArr = data.toString().split('\n');
            for (var i = 0; i < linesArr.length; i++) {
                if (linesArr[i] === linesArr[i - 1]){
                    linesArr.splice(i, 1);
                }
            }
            process.stdout.write(linesArr.join('\n') + '\n');
            process.stdout.write('prompt > ');
          });
    },
};
