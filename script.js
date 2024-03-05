document.getElementById('fileForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const files = document.getElementById('fileInput').files;
    const output = document.getElementById('output');

    output.innerHTML = ''; // Clear previous output

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function() {
            const contents = reader.result;
            const lines = contents.split('\n');

            const table = document.createElement('table');
            const header = document.createElement('tr');

            lines[0].split(',').forEach(function(cell) {
                const th = document.createElement('th');
                th.textContent = cell;
                header.appendChild(th);
            });

            table.appendChild(header);

            for (let j = 1; j < lines.length; j++) {
                const row = document.createElement('tr');
                lines[j].split(',').forEach(function(cell) {
                    const td = document.createElement('td');
                    td.textContent = cell;
                    row.appendChild(td);
                });
                table.appendChild(row);
            }

            output.appendChild(table);
        };

        reader.readAsText(file);
    }
});