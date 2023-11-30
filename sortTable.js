var lastSortedColumn = -1; // Keep track of the last sorted column
var ascending = true; // Flag to determine sorting order
function sortTable(columnIndex) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("dataTable");
    switching = true;

    // Toggle sorting order if the same column is clicked again
    if (lastSortedColumn === columnIndex) {
        ascending = !ascending;
    } else {
        ascending = true;
    }

    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = parseFloat(rows[i].getElementsByTagName("td")[columnIndex].innerHTML.replace('%', ''));
            y = parseFloat(rows[i + 1].getElementsByTagName("td")[columnIndex].innerHTML.replace('%', ''));

            if (ascending ? x > y : x < y) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }

    lastSortedColumn = columnIndex; // Update the last sorted column
}