var commands = require('./commands');
var inputArr;

var isCommand = function(command) {
    if (commands[command]) return true;
    else return false;
}

var done = function(output) {
    var newCommand = inputArr.shift();
    if (newCommand) {
        commands[newCommand](null, output, done);
    }
    else {
        process.stdout.write(output);
        process.stdout.write('\nprompt > ');
    }
};

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
    inputArr = data.toString().trim().split(/\s|\|/);

    commands[inputArr.shift()](null, inputArr.shift(), done);

});

// need stdin: head, tail, sort, uniq, wc
// cat bash.js | head
//[cat, bash.js, head]
//[head]
//[]
