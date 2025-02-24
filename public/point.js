import { mapContainer, map } from './map.js';

let option = [];
async function fetchO(){
	try{
		const response = await fetch('http://localhost:5500/option');
		if(!response.ok){
			throw new Error('Failed to fetch');
		}
		else{
			console.log('response is ok!');
		}
		option = await response.json();
		showAllOptions(option);
		showOptions(option);
	}
	catch(err){
		console.error('Error:',err);
	}
}

function showAllOptions(option){
	
	option.forEach((o) => {
        var markerPosition = new kakao.maps.LatLng(o.lat, o.lon);
        var marker = new kakao.maps.Marker({
            position: markerPosition,
        });
        marker.setMap(map);
		kakao.maps.event.addListener(marker, 'click', function () {
            showOptionDescription(o);
        });
    });
}

function showOptions(option){
	const optionsList = document.getElementById('optionsList');
	optionsList.innerHTML = '';
	option.sort((a,b)=>a.name.localeCompare(b.name,'ko-KR'));
	option.forEach((o)=>{
		const button = document.createElement('button');
		const p = document.createElement('p');
		p.textContent = o.name + ' ' + o.name2;
		button.addEventListener('click',()=>{
			showOptionDescription(o);
			var mapContainer = document.getElementById('map'),
    		mapOption = { 
        		center: new kakao.maps.LatLng(o.lat, o.lon),
        		level: 2
    		}; 
			var map = new kakao.maps.Map(mapContainer, mapOption);
			var markerPosition = new kakao.maps.LatLng(o.lat, o.lon);
			var marker = new kakao.maps.Marker({
            	position: markerPosition,
        	});
		})
		button.appendChild(p);
		optionsList.appendChild(button);
	})
}

const optionDescription = document.getElementById('optionDescription');
optionDescription.style.display = "none";
function showOptionDescription(optionData){
	optionDetail(optionData);
	optionDescription.style.display = "block";
}
function closeOptionDescription(){
	optionDescription.style.display = 'none';
}
document.getElementById('discountClose').addEventListener('click',closeOptionDescription);
document.getElementById('discountClose2').addEventListener('click',closeOptionDescription);

function optionDetail(optionData){
	const optionPhotoImg = document.getElementById('optionPhotoImg');
	const optionName1 = document.getElementById('optionName1');
	const optionNameLetter = document.getElementById('optionNameLetter');
	const discountDetail = document.getElementById('discountDetail');
	const optionDetail = document.getElementById('optionDetail');
	const naverMapLink = document.getElementById('naverMapLink');

	optionPhotoImg.src = optionData.photo;

	optionName1.innerHTML = '';
	optionNameLetter.innerHTML = '';
	discountDetail.innerHTML = '';
	optionDetail.innerHTML = '';

	const optionNameL = document.createElement('p');
	optionNameL.textContent = optionData.name;
	optionName1.appendChild(optionNameL);

	const optionName = document.createElement('p');
	optionName.textContent = optionData.name2;
	optionNameLetter.appendChild(optionName);
	
	const optionDiscount = document.createElement('p');
	optionDiscount.textContent = optionData.discount;
	discountDetail.appendChild(optionDiscount);

	const optionEtc = document.createElement('p');
	optionEtc.textContent = optionData.etc;
	optionDetail.appendChild(optionEtc);

	naverMapLink.href = optionData.naverMap;
}

let markers = [];
function pointOptions(option){
	hideMarkers();
    option.forEach((o)=>{
		if(selected.includes(o.category)){
        	var markerPosition = new kakao.maps.LatLng(o.lat, o.lon);
        	var marker = new kakao.maps.Marker({
            	position: markerPosition,
        	});
            kakao.maps.event.addListener(marker, 'click', ()=>{
				showOptionDescription(o);
				console.log("마커 클릭됨:", o);
			})
			console.log(marker.discount);
        	if (map) {
            	marker.setMap(map);
				markers.push(marker);
        	}
		}
    })
}

function setMarkers(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }            
}

function hideMarkers() {
    setMarkers(null);    
}

document.addEventListener('DOMContentLoaded',()=>{
	console.log('I am doing(option)');
	fetchO();
});

window.addEventListener('checklistUpdated',(e)=>{
	selected = e.detail;
	console.log('e.detail:',selected);
	pointOptions(option);
})

document.addEventListener('DOMContentLoaded',()=>{
	console.log('I am doing(option)');
	fetchC();
});