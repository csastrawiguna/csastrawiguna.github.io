// const container = document.querySelector('.container');
const daftarSDSS = document.querySelectorAll('.daftar-sdss .sdss');

daftarSDSS.forEach(function(e){
	e.addEventListener('click',function(){
		for (let i=0; i<daftarSDSS.length; i++){
			daftarSDSS[i].className = 'reset';
		};
		e.className = 'active';
	});
}); 

const getTableRow = document.querySelectorAll('table tbody tr');
getTableRow.forEach(function(e){
	e.addEventListener('click',function(){
		for (let x=0; x<getTableRow.length; x++) {
			getTableRow[x].className = 'reset';
		}
		e.className = 'pilih';
	})
});

for (let a = 0; a<getTableRow.length; a++){
	getTableRow[a].firstChild.innerHTML = a+1;
}
