async function addCI(){
    const addCInput = document.getElementById('addCInput').value;
    const res = await fetch('http://localhost:5500/data',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({name:addCInput})
    });
    if(res.ok){
        alert('카테고리 추가를 성공하였습니다!');
        document.getElementById('addCInput').value = '';
    }
    else{
        alert('카테고리 추가를 실패하였습니다.');
    }
}

const addCategory = document.getElementById('addCategory');
addCategory.style.display = 'none';
function openAddC(){
    addCategory.style.display = 'block';
}
function closeAddC(){
    addCategory.style.display = 'none';
}

let option = [];
async function fetchC(){
	try{
		const response = await fetch('http://localhost:5500/category');
		if(!response.ok){
			throw new Error('Failed to fetch');
		}
		else{
			console.log('response is ok!');
		}
		category = await response.json();
		showOptionsD(category);
        showOptionsE(category);
        selectO(category);
	}
	catch(err){
		console.error('Error:',err);
	}
}

const deleteCt = async (cName)=>{
    const res = await fetch('http://localhost:5500/category',{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({name:cName})
    });
    if(res.ok){
        alert(`${cName}(이)가 성공적으로 삭제되었습니다.`);
    }
    else{
        alert(`${cName}(이)가 삭제되지 않았습니다.`);
    }
} 

const editCategory2 = document.getElementById('editCategory2');
editCategory2.style.display = 'none';

function closeEditC2(){
    editCategory2.style.display = 'none';
}

function showOptionsE(category){
	const categoryE = document.getElementById('categoryE');
	category.sort((a,b)=>a.name.localeCompare(b.name,'ko-KR'));
	category.forEach((c)=>{
		const button = document.createElement('button');
		const p = document.createElement('p');
		p.textContent = c.name;
		button.appendChild(p);
		categoryE.appendChild(button);
        button.addEventListener('click',(b)=>{
            editCategory2.style.display = 'block';
            const editCO = document.getElementById('editCO');
            editCO.innerHTML = b.target.textContent;
        })
	})
}

document.getElementById('editSubmit').addEventListener('click',async ()=>{
    const oldC = document.getElementById('editCO').textContent;
    const newC = document.getElementById('editCInput').value;
    const res = await fetch('http://localhost:5500/category',{
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
            'Cache-Control': 'no-cache'
        },
        body:JSON.stringify({oldC,newC})
    });
    console.log(res.ok);
    if(res.ok){
        alert("수정이 성공적으로 처리되었습니다.");
    }
    else{
        alert("수정이 안 되었습니다.");
    }
    document.getElementById('editCategory').style.display = 'none';
    document.getElementById('editCategory2').style.display = 'none';
})

function showOptionsD(category){
	const categoryD = document.getElementById('categoryD');
	category.sort((a,b)=>a.name.localeCompare(b.name,'ko-KR'));
	category.forEach((c)=>{
		const button = document.createElement('button');
		const p = document.createElement('p');
		p.textContent = c.name;
		button.appendChild(p);
		categoryD.appendChild(button);
        button.addEventListener('click',(b)=>{
            if(confirm(b.target.textContent+'(를)을 삭제하시겠습니까?')){
                deleteCt(b.target.textContent);
            }
        })
	})
}

const editCategory = document.getElementById('editCategory');
editCategory.style.display = 'none';
function openEditC(){
    editCategory.style.display = 'block';
}
function closeEditC(){
    editCategory.style.display = 'none';
}

const deleteCategory = document.getElementById('deleteCategory');
deleteCategory.style.display = 'none';
function openDelC(){
    deleteCategory.style.display = 'block';
}
function closeDelC(){
    deleteCategory.style.display = 'none';
}

function selectO(category){
    const optionSelect = document.getElementById('optionSelect');
    category.forEach((c)=>{
        const option = document.createElement('option');
        option.textContent = c.name;
        optionSelect.appendChild(option);
    })
}

const optionA = document.getElementById('optionA');
optionA.style.display = 'none';
function bottomButtonF(){
    optionA.style.display = 'block';
}
function goBackOF(){
    optionA.style.display = 'none';
}

var imgSrc = '';
document.getElementById("savePhotoI").addEventListener('change',function(event){
    var file = event.target.files[0];
    var photoAdd = document.getElementById('photoAdd');
    photoAdd.innerHTML = '';
    var img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    console.log(img.src);
    imgSrc = img.src;
    img.style.width = "320";
    img.style.height = "240";
    photoAdd.appendChild(img);
})

document.getElementById('submitO').addEventListener('click',async ()=>{
    console.log('imgSrc',imgSrc);
    const optionSelect = document.getElementById('optionSelect').value;
    const writeOption = document.getElementById('writeOption').value;
    const writeName2 = document.getElementById('writeName2').value;
    const writeNaverMapLink = document.getElementById('writeNaverMapLink').value;
    const writeLat = document.getElementById('writeLat').value;
    const writeLon = document.getElementById('writeLon').value;
    const writeDiscount = document.getElementById('writeDiscount').value;
    const writeEtc = document.getElementById('writeEtc').value;
    const res = await fetch('http://localhost:5500/option',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            photo:imgSrc,
            category:optionSelect,
            name:writeOption,
            name2:writeName2,
            naverMap:writeNaverMapLink,
            lat:writeLat,
            lon:writeLon,
            discount:writeDiscount,
            etc:writeEtc
        })
    });
    if(res.ok){
        alert('매장 추가를 성공하였습니다.')
        document.getElementById('optionA').style.display = 'none';
    }
    else{
        alert('매장 추가를 실패하였습니다.');
    }
});

document.getElementById("savePhoto").addEventListener('click',function(){
    document.getElementById("savePhotoI").click();
})

document.addEventListener('DOMContentLoaded',()=>{
	console.log('I am doing(option)');
	fetchC();
});