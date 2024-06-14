document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('entry-form');
    const entriesDiv = document.getElementById('entries');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const date = document.getElementById('date').value;
        
        const entry = {
            title,
            content,
            date
        };

        saveEntry(entry);
        displayEntries();
        
        form.reset();
    });

    function saveEntry(entry) {
        let entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
        entries.push(entry);
        localStorage.setItem('diaryEntries', JSON.stringify(entries));
    }

    function displayEntries() {
        let entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
        entriesDiv.innerHTML = '';
        entries.forEach((entry, index) => {
            const entryDiv = document.createElement('div');
            entryDiv.classList.add('entry');
            entryDiv.innerHTML = `
                <h2>${entry.title}</h2>
                <p>${entry.content}</p>
                <small>${entry.date}</small>
                <button onclick="editEntry(${index})">Edit</button>
                <button onclick="deleteEntry(${index})">Delete</button>
            `;
            entriesDiv.appendChild(entryDiv);
        });
    }

    displayEntries();

    window.editEntry = function(index) {
        const entries = JSON.parse(localStorage.getItem('diaryEntries'));
        const entry = entries[index];
        
        document.getElementById('title').value = entry.title;
        document.getElementById('content').value = entry.content;
        document.getElementById('date').value = entry.date;

        form.onsubmit = function(event) {
            event.preventDefault();
            updateEntry(index);
        };
    };

    function updateEntry(index) {
        let entries = JSON.parse(localStorage.getItem('diaryEntries'));
        
        entries[index] = {
            title: document.getElementById('title').value,
            content: document.getElementById('content').value,
            date: document.getElementById('date').value
        };

        localStorage.setItem('diaryEntries', JSON.stringify(entries));
        displayEntries();
        form.reset();
        
        form.onsubmit = function(event) {
            event.preventDefault();
            const entry = {
                title: document.getElementById('title').value,
                content: document.getElementById('content').value,
                date: document.getElementById('date').value
            };
            saveEntry(entry);
            displayEntries();
            form.reset();
        };
    }

    window.deleteEntry = function(index) {
        let entries = JSON.parse(localStorage.getItem('diaryEntries'));
        entries.splice(index, 1);
        localStorage.setItem('diaryEntries', JSON.stringify(entries));
        displayEntries();
    };
});
