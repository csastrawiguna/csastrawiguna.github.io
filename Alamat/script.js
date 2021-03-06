// stackoverflow ==> WORK


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
                    for(let j = 0; j < newTextCell.length; j++){
                        var newCellOfNewRow = document.createElement('td');
                        newTableRow.appendChild(newCellOfNewRow);
                        newCellOfNewRow.innerHTML = newTextCell[j];
                    }
                }
            }
        }
    }
    rawFile.send(null); //Sends the request to the server Used for GET requests with param null
}

readTextFile("alamat-dbase.txt"); //<= Call function ===== don't need "file:///..." just the path