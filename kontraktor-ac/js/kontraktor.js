var allTr = document.querySelectorAll('table tbody tr');
for (let i = 0; i < allTr.length; i++){
	allTr[i].childNodes[0].innerHTML = i + 1;
}
