// const getTableRow = document.querySelectorAll('.tabel-daftar table tbody tr');
// getTableRow.forEach(function(sorot){
// 	sorot.addEventListener('click',function(){
// 		sorot.classList.toggle('sorot');
// 	});
// });
// getTableRow.addEventListener('click',function(){
// 	alert('OK');
// });

const daftarSASS = document.querySelectorAll('.bawah table tr');

daftarSASS.forEach(function(e){
	e.addEventListener('click',function(){
		for (let i=0; i<daftarSASS.length; i++){
			daftarSASS[i].className = 'reset';
		};
		e.className = 'active';
	});
});

const daftarKiri = document.querySelectorAll('.daftar .item');
console.log(daftarKiri);

daftarKiri.forEach(function(e){
	e.addEventListener('click',function(){
		for (let i=0; i<daftarKiri.length; i++){
			daftarKiri[i].className = 'item';
		};
		e.classList.add('pilihKiri');
	});
});

const getTableRow = document.querySelectorAll('table tbody tr');
console.log('a');