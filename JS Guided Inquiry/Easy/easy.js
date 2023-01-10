//string variables
var name1 = 'Chanty', name2 = 'Bryan';

//integers
var name1Len = name1.length, name2Len = name2.length


var str = ``;

if (name1Len > name2Len) {
  str = `The name ${name1} is longer than ${name2} by ${name1Len - name2Len} characters`
} else if (name1Len < name2len) {
  str = `The name ${name2} is longer than ${name1} by ${name2Len - name1Len} chracters`
} else {
  str = `The names ${name1} and ${name2} are the same number of characters`
}

console.log(str);