module.exports = function check(str, bracketsConfig) {
  var stack = [],
      brackets = str.split(''),
      openBr = ['(', '{', '[', '1', '3', '5'],
      closeBr = [')', '}', ']',  '2', '4', '6'],
      same = ['|', '7', '8'],
      sameInd,
      sameStack = [],
      closeInd,
      openInd;

  for (var i = 0; i < brackets.length; i++) {

    if (brackets[i] == 1 || brackets[i] == 3 || brackets[i] == 5) {
      brackets[i] == '{';
    }

    if (brackets[i] == 2 || brackets[i] == 4 || brackets[i] == 6) {
      brackets[i] == '}';
    }

    openInd = openBr.indexOf(brackets[i]);

    if ( openInd !== -1 ) {
      stack.push(openInd);
      continue;
    }
  
    closeInd = closeBr.indexOf(brackets[i]);

    if ( closeInd !== -1 ) {
      openInd = stack.pop();
        if ( closeInd !== openInd &&  closeInd < openInd) {
          return false;
        }
    }

  }

  if ( stack.length != 0 ) {
    return false;
  } else {
    return true }
  }