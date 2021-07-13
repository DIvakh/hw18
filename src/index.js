// ===== Task 1: =====

function generateList(arr) {
    const $list = document.createElement('ul');
    for (const item of arr) {
        if (!Array.isArray(item)) {
            const $li = document.createElement('li');
            $li.textContent = item;
            $list.append($li);
        } else {
            const $li = document.createElement('li');
            $li.append(generateList(item));
            $list.append($li);
        }
    }
    return $list;
}
const resultArray = ['1', '2', '3', ['1.1', '1.2', ['2.1', '2.2', '2.3']], '4'];
document.querySelector('.task1').after(generateList(resultArray));

// ===== Task 2: =====

function tableCreator(tableDatas, tableRows) {
    const $table = document.createElement('table');
    let content = 1;
    for (let j = 1; j <= tableRows; j++) {
        const $tr = document.createElement('tr');

        for (let i = 1; i <= tableDatas; i++) {
            const $td = document.createElement('td');
            $td.textContent = content++;
            $tr.append($td);
        }
        $table.append($tr);
    }
    return $table;
}
const resultSize = 10;
document.querySelector('.task2').append(tableCreator(resultSize, resultSize));
