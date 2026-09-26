function countLetter(str, letter) {
    let count = 0;
    let lowerStr = str.toLowerCase();
    let lowerLetter = letter.toLowerCase();

    for (let i = 0; i < lowerStr.length; i++) {
        if (lowerStr.charAt(i) === lowerLetter) {
            count++;
        }
    }
    return count;
}

function getRow(firstRow, secondRow, letter = 'а') {
    let count1 = countLetter(firstRow, letter);
    let count2 = countLetter(secondRow, letter);

    if (count1 > count2) {
        return firstRow;
    } else if (count2 > count1) {
        return secondRow;
    } else {
        return 'Кількість літер однакова в обох рядках';
    }
}

function runTask1() {
    let text1 = prompt('Введіть перший рядок:', 'Тише їдеш — далі будеш');
    let text2 = prompt('Введіть другий рядок:', 'Повторення — мати навчання');
    let searchLetter = prompt('Введіть літеру для підрахунку:', 'а');

    if (text1 && text2 && searchLetter) {
        let res = getRow(text1, text2, searchLetter);
        alert('Результат 1 завдання:\n' + res);
        console.log('Результат 1 завдання:', res);
    }
}

function formattedPhone(phone) {
    if (!phone) {
        return 'Ви не ввели номер';
    }

    let clean = phone.replaceAll('+', '')
                     .replaceAll(' ', '')
                     .replaceAll('(', '')
                     .replaceAll(')', '')
                     .replaceAll('-', '');

    let digits = '';

    if (clean.length === 10) {
        digits = clean;
    } else if (clean.length === 11 && clean.startsWith('80')) {
        digits = clean.slice(1);
    } else if (clean.length === 11 && clean.startsWith('8')) {
        digits = clean.slice(1);
    } else if (clean.length === 12 && clean.startsWith('380')) {
        digits = clean.slice(2);
    } else {
        return 'Неправильний формат номера';
    }

    let code = digits.slice(1, 4);
    let p1 = digits.slice(4, 7);
    let p2 = digits.slice(7, 9);
    let p3 = digits.slice(9, 11);

    return '+38 (' + code + ') ' + p1 + '-' + p2 + '-' + p3;
}

function runTask2() {
    let userPhone = prompt('Введіть номер телефону:', '+380971234567');

    if (userPhone) {
        let formatted = formattedPhone(userPhone);
        alert('Результат 2 завдання:\n' + formatted);
        console.log('Результат 2 завдання:', formatted);
    }
}

runTask1();
runTask2();