// 연결 성공

const askClick = document.getElementById('askClick');
askClick.style.display = 'none';
function openAsk() {
	askClick.style.display = 'block';
}
function closeAsk() {
	askClick.style.display = 'none';
}
const adminPassword = document.getElementById('adminPassword');
const adminLoginEnter = document.getElementById('adminLoginEnter');
const adminLoginBack1 = document.getElementById('adminLoginBack');
adminPassword.style.display = 'none';
adminLoginEnter.style.display = 'none';
adminLoginBack1.style.display = 'none';
function showPasswordBlock() {
	adminPassword.style.display = 'block';
	adminLoginEnter.style.display = 'block';
	adminLoginBack1.style.display = 'block';
}

const adminP = "osforsunystudent2025"
function adminLogin() {
	const adminInput = document.getElementById('adminPassword').value;
	if (adminInput === adminP) {
		window.location.href = 'admin.html'
	}
	else {
		alert('암호가 틀렸습니다.');
	}
}

function adminLoginBack() {
	const adminPassword = document.getElementById('adminPassword');
	const adminLoginEnter = document.getElementById('adminLoginEnter');
	const adminLoginBack1 = document.getElementById('adminLoginBack');
	adminPassword.style.display = 'none';
	adminLoginEnter.style.display = 'none';
	adminLoginBack1.style.display = 'none';
}

async function fetchC() {
	try {
		// const response = await fetch('https://www.outstandingspots.com/category');
		const response = await fetch('https://web-production-888c9.up.railway.app/category');
		if (!response.ok) {
			throw new Error('Failed to fetch');
		}
		else {
			console.log('response is ok!');
		}
		const category = await response.json();
		showCategories(category);
	}
	catch (err) {
		console.error('Error:', err);
	}
}

let selected = JSON.parse(localStorage.getItem('selected')) || [];
function showCategories(category) {
	const categoryList = document.getElementById('categoryList');
	categoryList.innerHTML = '';
	category.forEach((c) => {
		const div = document.createElement('div');
		const check = document.createElement('input');
		const label = document.createElement('label');
		check.type = 'checkbox';
		check.id = c.name;
		check.value = c.name;
		label.htmlFor = c.name;
		label.textContent = c.name;
		check.addEventListener('change', (e) => {
			if (e.target.checked) {
				if (!selected.includes(c.name)) {
					selected.push(c.name);
				}
			}
			else {
				selected = selected.filter(value => value !== c.name);
			}
			localStorage.setItem('selected', JSON.stringify(selected));
			console.log('Updated', selected);

			const updatePoint = new CustomEvent('checklistUpdated', { detail: selected });
			window.dispatchEvent(updatePoint);
		});
		div.appendChild(check);
		div.appendChild(label);
		categoryList.appendChild(div);
	})
}

document.getElementById("adminPassword").addEventListener("keypress", function (e) {
	if (e.key === "Enter") {
		adminLogin();
	}
});

document.addEventListener('DOMContentLoaded', () => {
	console.log('I am doing(category)');
	fetchC();
});

window.addEventListener('DOMContentLoaded', () => {
	localStorage.removeItem('selectedValues');
	selected = [];
	console.log('reloaded');
})

window.selected = selected;

// document.addEventListener('DOMContentLoaded', async () => {
// 	try {
// 		const response = await fetch('https://ossample3.onrender.com')
// 		const data = await response.json()
// 	} catch (error) {
// 		console.error('Error fetching data:', error)
// 	}
// })
