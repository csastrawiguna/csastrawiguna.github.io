const container = document.querySelector('.container');
const daftarCabang = document.querySelectorAll('.daftar-cabang .cabang');

daftarCabang.forEach(function(e){
	e.addEventListener('click',function(){
		for (let i=0; i<daftarCabang.length; i++){
			daftarCabang[i].className = 'reset';
		};
		e.className = 'active';
	});
});

const getTableRow = document.querySelectorAll('table tbody tr');
console.log(getTableRow);
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

// for (let i=0; i<daftarCabang.length; i++){
// 	daftarCabang[i].className = 'reset';
// };

// daftarCabang.forEach(function(){
// 	setAttribute('class','reset');
// });

// for (let i=0; i<daftarCabang.length; i++){
// 	daftarCabang[i].addEventListener('click',function(){
// 		daftarCabang.forEach(function(){
// 			className('reset');
// 		}
// 		daftarCabang[i].classList.add('active');
		
// 	})
// }


