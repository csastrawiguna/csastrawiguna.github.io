const daftarLink = document.querySelectorAll('a');
const tandaCabang = document.querySelectorAll('.tanda');

daftarLink.forEach(function(e){
	e.addEventListener('click',function(){
		for(let r=0; r<daftarLink.length; r++ ){
			daftarLink[r].className = 'cabang';
			// tandaCabang[r].className = 'tanda-show';
		}
		e.className = 'cabang-pilih';
	})
});