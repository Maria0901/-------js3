const post = ['Руководитель', 'Программист', 'Контент менеджер', 'Стажер'];
const people_post = [
    ['Антон', 0],
    ['Юля', 1],
    ['Коля', 1],
    ['Ира', 2],
    ['Катя', 3]
]
createTable(1, 0, 3, "table1");
createTable(2, 0, 3, "table2");

show.addEventListener('click', function() {
    var table = document.getElementById("table2");
    table.parentNode.removeChild(table);
    createTable(2, 1, 1, "table2");
});
show1.addEventListener('click', function() {
    var table = document.getElementById("table2");
    table.parentNode.removeChild(table);
    createTable(2, 0, 3, "table2");
});

function createTable(countString, criterion1, criterion2, idTable) {
    var table = document.createElement('table');
    table.setAttribute("id", idTable);
    document.querySelector('.tables').appendChild(table); 
    for (let i = 0; i < people_post.length; i++) {
        var tr = document.createElement('tr');
        if (people_post[i][1] >= criterion1 && people_post[i][1] <= criterion2) {
            var td = document.createElement('td');
            td.innerHTML = people_post[i][0];
            tr.appendChild(td);
            table.appendChild(tr);
            for (let j=1; j < countString; j++) {
                    var td = document.createElement('td');
                    td.innerHTML = post[people_post[i][j]];
                    tr.appendChild(td);
                    table.appendChild(tr);
            }
        }
    }
}