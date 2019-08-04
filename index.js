window.onload = pgInit;
 
 rgb = [127,127,127];
 rgbQuest = [0,0,0];

 onQuest = 0;
 errorTotal = 100

 function updateBackground (rgb) {
 	document.body.style.backgroundColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
 }

 function launchQuest () {
 	onQuest = 1;
 	newR = Math.floor( Math.random() * 256 );
 	newG = Math.floor( Math.random() * 256 );
 	newB = Math.floor( Math.random() * 256 );

 	rgbQuest = [newR, newG, newB];
 	updateBackground(rgbQuest);
 	document.getElementById('questionButton').classList.add('iconReversed');
 }

 function checkQuest () {
 	onQuest = 0;
 	updateBackground(rgb);
 	differenceR = Math.abs( rgb[0] - rgbQuest[0] ) / 255;
 	differenceG = Math.abs( rgb[1] - rgbQuest[1] ) / 255;
 	differenceB = Math.abs( rgb[2] - rgbQuest[2] ) / 255;

 	errorTotal = ((differenceR + differenceG + differenceB) / 3 * 100).toFixed(2);
 	console.log(errorTotal);
 	document.getElementById('errorData').innerHTML = errorTotal + ' %';
 	document.getElementById('errorData').style.color = `rgb(${rgbQuest[0]},${rgbQuest[1]},${rgbQuest[2]})`;
 	document.getElementById('questionButton').classList.remove('iconReversed');
 }

 function pgInit () {
 	sRed = document.getElementById('s-red');
 	sGreen = document.getElementById('s-green');
 	sBlue = document.getElementById('s-blue');

 	[sRed, sGreen, sBlue].forEach((iterator, index)=>{
 		iterator.oninput = element =>{
			
			rgb[index] = element.srcElement.value;	
 			
 			if( onQuest == 0 ) {
 				updateBackground(rgb);
 			}
 		}
 	});

 	updateBackground(rgb);
 	setClicks();
 	
 }

 function setClicks () {
 	document.getElementById('questionButton').onclick = function () {
 		if( onQuest == 0 ){
 			launchQuest();
 		}else if ( onQuest == 1 ){
 			checkQuest();
 		}
 	}
 }

