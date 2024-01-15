function number(elem, helperMsg) {
  var numericExp = /^[0-9]+$/;
  if (elem.value.match(numericExp)) {
    return true;
  } else {
    alert(helperMsg);
    elem.focus();
    return false;
  }
}

function alpabet(elem, helperMsg) {
  var alphaExp = /^[a-z A-Z]+$/;
  if (elem.value.match(alphaExp)) {
    return true;
  } else {
    alert(helperMsg);
    elem.focus();
    return false;
  }
}

function alpaNum(elem, helperMsg) {
  var alpaNumExp = /^[a-z A-Z 0-9]+$/;
  if (elem.value.match(alpaNumExp)) {
    return true;
  } else {
    alert(helperMsg);
    elem.focus();
    return false;
  }
}

function length(elem, helperMsg) {
  var iInput = elem.value;
  if (iInput.length >= min && iInput.length <= max) {
    return true;
  } else {
    alert("Please enter " + min + "to" + max + "chars");
    elem.focus();
    return false;
  }
}
