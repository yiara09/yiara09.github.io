window.onclick = (e) => {
  console.log(e.target); // to get the element
  console.log(e.target.tagName == 'IMG'); // to get the element tag name alone
  if (e.target.tagName == 'IMG') {
    var modal = document.getElementById('myModal');
    var img = e.target;
    var modalImg = document.getElementById('img01');
    modal.style.display = 'block';
    modalImg.src = img.src;
    var span = document.getElementsByClassName('close')[0];
    span.onclick = function () {
      modal.style.display = 'none';
    };
  }
};
