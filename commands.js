var fs = require('fs');
var request = require('request');

module.exports = {
    pwd: function(arg, done) {
        done(process.cwd());
    },
    date: function(arg, done) {
        var date = new Date();
        done(date.toUTCString());
    },
    ls: function(arg, done) {
        var output = '';
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
              output += file.toString() + '\n';
            });
            done(output);
          });
    },
    echo: function(arg, done) {
        done(arg);
    },
    cat: function(arg, done) {
        fs.readFile(arg, function(err, data) {
            if (err) throw err;
            done(data.toString());
          });
    },
    head: function(arg, done) {
        fs.readFile(arg, function(err, data) {
            if (err) throw err;
            var linesArr = data.toString().split('\n');
            done(linesArr.slice(0, 5).join('\n'));
          });
    },
    tail: function(arg, done) {
        fs.readFile(arg, function(err, data) {
            if (err) throw err;
            var linesArr = data.toString().split('\n');
            done(linesArr.slice(-5).join('\n'));
          });
    },
    sort: function(arg, done) {
        fs.readFile(arg, function(err, data) {
            if (err) throw err;
            var linesArr = data.toString().split('\n');
            done(linesArr.sort().join('\n'));
          });
    },
    wc: function(arg, done) {
        fs.readFile(arg, function(err, data) {
            if (err) throw err;
            var linesArr = data.toString().split('\n');
            done('Total Lines: ' + linesArr.length);
          });
    },
    uniq: function(arg, done) {
        fs.readFile(arg, function(err, data) {
            if (err) throw err;
            var linesArr = data.toString().split('\n');
            for (var i = 0; i < linesArr.length; i++) {
                if (linesArr[i] === linesArr[i - 1]){
                    linesArr.splice(i, 1);
                }
            }
            done(linesArr.join('\n'));
          });
    },
};
