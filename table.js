let companies = [
    { name: "Saab AB", town: "Stockholm", year: 1937 },
    { name: "Volvo Group", town: "Göteborg", year: 1927 },
    { name: "Sandvik AB", town: "Stockholm", year: 1862 },
    { name: "Atlas Copco Group", town: "Nacka", year: 1873 },
    { name: "Electrolux AB", town: "Stockholm", year: 1919 },
    { name: "Skanska AB", town: "Stockholm", year: 1887 },
];

let isTableVisible = false; // Initialize isTableVisible

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    data.map(key => {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    });
}

function generateTable(table, data) {
    data.map(element => {
        let row = table.insertRow();
        Object.values(element).map(value => {
            let cell = row.insertCell();
            let text = document.createTextNode(value);
            cell.appendChild(text);
        });
    });
}


function handleClick() {
    let table = document.querySelector("table");
    let data = Object.keys(companies[0]);
    if (isTableVisible) {
        table.innerHTML = '';
    } else {
        generateTable(table, companies);
        generateTableHead(table, data);
    }
    isTableVisible = !isTableVisible;
}

