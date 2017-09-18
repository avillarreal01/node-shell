var commands = require('./commands');

var done = function(output) {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
};

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
var inputArr = data.toString().trim().split(/\s|\|/);
    console.log(inputArr);
    var cmd = inputArr[0];
    var arg = inputArr.slice(1).join(' ');
    if (commands[cmd]) {
        commands[cmd](arg, done);
    } else {
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }
});
