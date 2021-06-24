const dealerLink = document.querySelectorAll('.dealer-link');
const targetList = document.querySelectorAll('.target-list');

for (let i = 0; i < dealerLink.length; i++){
	dealerLink[i].addEventListener('click', function(){
		for (let j = 0; j < targetList.length; j++){
			targetList[j].className = 'hide';
			dealerLink[j].className = 'text-white inactive';
		}
		targetList[i].className = 'show';
		dealerLink[i].className = 'pilih';
	});
}

const getTableRow = document.querySelectorAll('.bawah table tbody tr');
getTableRow.forEach(function(sorot){
	sorot.addEventListener('click',function(){
		sorot.classList.toggle('sorot');
	});
});

const allTableTr = document.querySelectorAll('table tbody tr');
const trChilds = [];
let x = 0;
for (let i = 0; i < allTableTr.length; i++){
	allTableTr[i].firstChild.innerHTML = i + 1;
	allTableTr[i].firstChild.style.minWidth='50px';
}
