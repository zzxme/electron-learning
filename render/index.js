var fs = require('fs');

window.onload = function() {
  var oBtn = this.document.querySelector("#btn");
  var oCarport = this.document.querySelector("#carport");
  oBtn.onclick = function () {
    fs.readFile('cardemo.txt', (err, data) => {
      console.log('--err--', err)
      oCarport.innerHTML = data
    })
  }
}