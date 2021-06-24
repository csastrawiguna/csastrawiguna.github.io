const daftarTeknisi = document.querySelectorAll('.tabel-daftar tr');

daftarTeknisi.forEach(function(e){
	e.addEventListener('click',function(){
		for (let x=0; x<daftarTeknisi.length; x++){
			daftarTeknisi[x].className = 'clear';
		}
		e.className = 'sorot';
	});
});


const daftarCabang = document.querySelectorAll('ul li a');

daftarCabang.forEach(function(e){
	e.addEventListener('click',function(){
		for (let x=0; x<daftarCabang.length; x++){
			daftarCabang[x].className = 'clear';
		}
		e.className = 'pilih';
	});
});

const allTr = document.querySelectorAll('.tabel-daftar table tr');
for (let a = 0; a < allTr.length; a++){
	allTr[a].firstChild.innerHTML = a + 1;
}

