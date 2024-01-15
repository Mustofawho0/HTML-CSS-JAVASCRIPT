function notEmpty(elem, helperMsg) {
  if (elem.value.length == 0) {
    alert(helperMsg);
    elem.focus();
    return false;
  }
  return true;
}
