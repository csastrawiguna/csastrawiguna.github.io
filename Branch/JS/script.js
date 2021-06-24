const getTableRow = document.querySelectorAll('.bawah table tbody tr');
getTableRow.forEach(function(sorot){
	sorot.addEventListener('click',function(){
		sorot.classList.toggle('sorot');
	});
});

for (let i = 1; i< getTableRow.length; i++){
	getTableRow[i].childNodes[0].innerHTML = i;
}
