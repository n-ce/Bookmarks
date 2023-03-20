const bookmarksList = document.getElementById('bookmarksList');
const erasers = document.getElementsByTagName('p');
const anchors = document.getElementsByTagName('a');
const saveData = d => localStorage.setItem('data', JSON.stringify([...d]));
const removeBtn = document.getElementById('removeBtn');
const updateBtn = document.getElementById('updateBtn');
const importBtn = document.getElementById('upload');
const exportBtn = document.getElementById('exportBtn');

const data = new Map(JSON.parse(localStorage.getItem('data')));

const attachBtn = (name, link) => {
	const container = document.createElement('span');
	const anchor = document.createElement('a');
	const eraseBtn = document.createElement('p');
	anchor.textContent = name;
	anchor.href = link;
	if (removeBtn.classList.contains('click'))
		eraseBtn.classList.add('display');
	eraseBtn.addEventListener('click', () =>
		eraseBtn.parentElement.remove());
	container.append(anchor, eraseBtn);
	bookmarksList.appendChild(container)
}

const update = (name, link) => {

	data.has(name) ?
		anchors[[...data].findIndex(k => k[0] === name)].href = link :
		attachBtn(name, link)

	data.set(name, link);
	saveData(data);
}


updateBtn.addEventListener('click', () => {
	const [name, link] = prompt('Add or Edit an exisiting bookmark by entering Name & URL separated by comma').split(',');
	if (link) update(name, link);
});

removeBtn.addEventListener('click', () => {
	for (let i = 0; i < data.size; i++)
		erasers[i].classList.toggle('display');
	removeBtn.classList.toggle('click')
});

if (data.size)
	for (const [name, link] of data)
		attachBtn(name, link)

importBtn.addEventListener('change',
	async () => {
		const imported_data = JSON.parse(await importBtn.files[0].text());
		for (const [name, link] of imported_data)
			update(name, link);
	}
);

exportBtn.addEventListener('click', () => {
	if (data.size) {
		const link = document.createElement('a');
		link.download = 'BookMarks.json';
		link.href = URL.createObjectURL(new Blob([localStorage.getItem('data')], { type: 'application/json' }));
		link.style.display = 'none';
		document.body.appendChild(link);
		link.click();
		link.remove(); // detach from DOM
		URL.revokeObjectURL(link.href); // remove URL signature from memory
	}
});