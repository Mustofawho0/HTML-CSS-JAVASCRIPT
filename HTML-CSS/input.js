function handleFiles(files) {
  const file = files[0];
  const reader = new FileReader();

  if (file.type.startsWith("image/")) {
    reader.onload = function (e) {
      document.getElementById("image").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
