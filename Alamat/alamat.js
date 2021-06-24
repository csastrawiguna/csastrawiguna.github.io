//fungsi pencarian
(function(document) {
  'use strict';

  var LightTableFilter = (function(Arr) {

    var _input;

    function _onInputEvent(e) {
      _input = e.target;
      var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
      Arr.forEach.call(tables, function(table) {
        Arr.forEach.call(table.tBodies, function(tbody) {
          Arr.forEach.call(tbody.rows, _filter);
        });
      });
    }

    function _filter(row) {
      var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
      row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
    }

    return {
      init: function() {
        var inputs = document.getElementsByClassName('light-table-filter');
        Arr.forEach.call(inputs, function(input) {
          input.oninput = _onInputEvent;
          // console.log(input.oninput);
        });
      }
    };
  })(Array.prototype);

  document.addEventListener('readystatechange', function() {
    if (document.readyState === 'complete') {
      LightTableFilter.init();
    }
  });

  function hitungData(){
    const dataTertampil = document.querySelectorAll('.btn-copy');
    console.log(dataTertampil.length);
  }

})(document);


//fungsi untuk meng-copy alamat ke clipboard
$('.btn-copy').on('click', function(){
    try { 
      var cell = $(this).closest('td').next('td')[0];
      var selection = window.getSelection();        
      var range = document.createRange();
      range.selectNodeContents(cell);
      selection.removeAllRanges();
      selection.addRange(range);
      var successful = document.execCommand('copy');
      if(successful) {
        $('.res').html("Coppied");
      }
      else{ $('.res').html("Unable to copy!");} 
    } catch (err) {
      $('.res').html(err);
   }
});

const totalData = document.querySelectorAll('.btn-copy');
document.querySelector('#total-data').innerHTML = 'Total: ' + totalData.length + ' data';

// read txt data (alamat-dbase.txt) source: stackoverflow ==> WORK
function readTextFile(file) {
    var rawFile = new XMLHttpRequest(); // XMLHttpRequest (often abbreviated as XHR) is a browser object accessible in JavaScript that provides data in XML, JSON, but also HTML format, or even a simple text using HTTP requests.
    rawFile.open("GET", file, false); // open with method GET the file with the link file ,  false (synchronous)
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4) // readyState = 4: request finished and response is ready
        {
            if(rawFile.status === 200) // status 200: "OK"
            {
                var allText = rawFile.responseText; //  Returns the response data as a string
                var newTextLine = allText.split('\n');
                var tableBody = document.querySelector('table tbody');
                for(let i=0; i < newTextLine.length; i++){
                    var newTableRow = document.createElement('tr');
                    tableBody.appendChild(newTableRow);
                    var newTextCell = newTextLine[i].split('|');
                    var buttonBaru = document.createElement('button');
                    var teksButtonBaru = document.createTextNode('Tombol');
                    buttonBaru.appendChild(teksButtonBaru);
                    for(let j = 1; j <= newTextCell.length; j++){
                        var newCellOfNewRow = document.createElement('td');
                        newTableRow.appendChild(newCellOfNewRow);
                        newCellOfNewRow.innerHTML = newTextCell[j-1];
                    }
                }
            }
        }
    }
    rawFile.send(null); //Sends the request to the server Used for GET requests with param null
}

readTextFile("alamat-dbase.txt"); //<= Call function ===== don't need "file:///..." just the path