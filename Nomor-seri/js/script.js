const daftarLi = document.querySelectorAll('li');
daftarLi.forEach(function(e){
	e.addEventListener('click',function(){
		for (let i=0; i<daftarLi.length; i++){
			daftarLi[i].className = '';
		};
		e.className = 'pilih';
	});
});