const display = document.querySelector('#for-display img');
const tombol = document.querySelectorAll('.konten .bottom .tombol');
const ketCabang = document.querySelector('.top-right h3').innerHTML;

for(let i = 0; i<tombol.length; i++){
	tombol[i].addEventListener('click',function(){
		j = i + 1;
		display.src = ketCabang + j + '.gif';
		for(let x = 0; x<tombol.length; x++){
			tombol[x].className = 'tombol';
		}
		tombol[i].className = 'tombol-dipilih';
	});
}

