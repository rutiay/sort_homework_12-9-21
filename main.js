//! נתון מערך של 5 שמות הדפס את המערך בסדר אלפביתי.

var arrayOfNames = ["Ruti", "Shahar", "Noam", "Ariel", "Osher"];
// console.log(arrayOfNames.sort());

//? ------------------------------------------------------------------------

//! נתון מערך עם שמות של 4 ערים הדפס את הערים בסדר אלפביתי.

var arrayOfCities = ["Netanya", "Lod", "Tel Aviv", "Ramat Gan"];
// console.log(arrayOfCities.sort());

//? ------------------------------------------------------------------------

//! נתון המערך [3,1,9,4,2,7] הדפס אותם בסדר עולה.

var numbers = [3, 1, 9, 4, 2, 7];
// console.log(numbers.sort());

//? ------------------------------------------------------------------------

//! נתון המערך [30,1,13,40,2,7,51,23]

var numbersArray = [30, 1, 13, 40, 2, 7, 51, 23];

//? ------------------------------------------------------------------------

//! הדפס אותם בסדר עולה


numbersArray.sort(function (a, b) {
    return a - b;
});
// console.log(numbersArray);

//? ------------------------------------------------------------------------

//! הדפס אותם בסדר יורד.


numbersArray.sort(function (a, b) {
    return b - a;
});
// console.log(numbersArray);

//? ------------------------------------------------------------------------

//! נתון מערך של מוצרים: שם ומחיר:

var arrayOfProducts = [
    {
        name: "milk",
        price: 12
    },
    {
        name: "bread",
        price: 10
    },
    {
        name: "apple",
        price: 3
    },
    {
        name: "banana",
        price: 19
    }
];

//? ------------------------------------------------------------------------

//! הדפס אותם  מהמחיר הנמוך לגבוה.

arrayOfProducts.sort(function (a, b) {
    return a.price - b.price;
});

// console.log(arrayOfProducts);

//? ------------------------------------------------------------------------

//! נתון מערך של מחרוזות הדפס את המערך בסדר הפוך

var strArray = ["abc", "def", "ghi", "jkl"];

strArray.reverse();

// console.log(strArray);

//? ------------------------------------------------------------------------

//! נתון מערך של מספרים הדפס את המערך בסדר הפוך

var arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arrayOfNumbers.reverse();

// console.log(arrayOfNumbers);

//? ------------------------------------------------------------------------

//! נתון מערך של 5 פירות הדפס אותם לפי אותיות סדר הפוך

var fruits = ["banana", "apple", "watermelon", "grape", "cherry"];

fruits.sort();
fruits.reverse();

// console.log(fruits);

//? ------------------------------------------------------------------------

//! נתון מערך שמות

var arrayOfNames = ["Ruti", "Shahar", "Noam", "Ariel", "Osher"];

//! המר אותו למחרוזת בעזרת join

// console.log(arrayOfNames.join());

//! המר אותו למחרוזת עם רווחים

// console.log(arrayOfNames.join(" "));

//? ------------------------------------------------------------------------

//! נתון מערך של רכבים: מחיר, שנתון, דגם

var carsArray = [
    {
        price: 23000,
        year: 2015,
        model: "Abarth"
    },
    {
        price: 29000,
        year: 2017,
        model: "Aston Martin"
    },
    {
        price: 40000,
        year: 2020,
        model: "Bentley"
    },
    {
        price: 21000,
        year: 2009,
        model: "BMW"
    },
    {
        price: 2000,
        year: 1995,
        model: "Acura"
    },
];

//? ------------------------------------------------------------------------

//! הדפס את המערך מסודר מהזול ליקר

carsArray.sort(function (a, b) {
    return a.price - b.price;
});
// console.log(carsArray);

//? ------------------------------------------------------------------------

//! הוסף 2 כפתורים ב HTML

var ascendingBtn = document.getElementById("ascending");
var descendingBtn = document.getElementById("descending");
var section = document.getElementById("mySection");

//? ------------------------------------------------------------------------

//! כפתור אחד מציג את הרכבים מהיקר לזול

ascendingBtn.onclick = () => {
    carsArray.sort(function (a, b) {
        return a.price - b.price;
    });
    section.innerHTML = `<h1>BY PRICE (low to high):</h1>`;
    for (var i = 0; i < carsArray.length; i++) {
        section.innerHTML += `<article>
        <h1>${carsArray[i].model}</h1>
        <p>Year: ${carsArray[i].year} Price: ${carsArray[i].price}$</p>
        </article>`
    }
};

//? ------------------------------------------------------------------------

//! כפתור אחד מציג את הרכבים מהזול ליקר

descendingBtn.onclick = () => {
    carsArray.sort(function (a, b) {
        return b.price - a.price;
    });
    section.innerHTML = `<h1>BY PRICE (high to low):</h1>`;
    for (var i = 0; i < carsArray.length; i++) {
        section.innerHTML += `<article>
        <h1>${carsArray[i].model}</h1>
        <p>Year: ${carsArray[i].year} Price: ${carsArray[i].price}$</p>
        </article>`
    }
};

//? ------------------------------------------------------------------------

//! הדפס את המערך מסודר מהישן לחדש - בדוק מיון לפי תאריך

carsArray.sort(function (a, b) {
    return a.year - b.year;
});

// console.log(carsArray);

//? ------------------------------------------------------------------------

//! הוסף עוד שני כפתורים

var alphabeticalBtn = document.getElementById("alphabeticalBtn");
var dateBtn = document.getElementById("dateBtn");

//? ------------------------------------------------------------------------

//! כפתור אחד מציג את הרכבים לפי סדר אלפביתי - בדוק מיון לפי טקסט באובייקט

alphabeticalBtn.onclick = () => {
    carsArray.sort(function (a, b) {
        var firstName = a.model.toLowerCase();
        var secondName = b.model.toLowerCase();
        if (firstName > secondName) {
            return 1;
        };
        if (firstName < secondName) {
            return -1;
        };
        return 0;
    });
    section.innerHTML = `<h1>ALPHABETICAL ORDER:</h1>`;
    for (var i = 0; i < carsArray.length; i++) {
        section.innerHTML += `<article>
        <h1>${carsArray[i].model}</h1>
        <p>Year: ${carsArray[i].year} Price: ${carsArray[i].price}$</p>
        </article>`
    }
};

//? ------------------------------------------------------------------------

//! כפתור אחד מציג את הרכבים מהישן לחדש

dateBtn.onclick = () => {
    carsArray.sort(function (a, b) {
        return a.year - b.year;
    });
    section.innerHTML = `<h1>BY DATE:</h1>`;
    for (var i = 0; i < carsArray.length; i++) {
        section.innerHTML += `<article>
        <h1>${carsArray[i].model}</h1>
        <p>Year: ${carsArray[i].year} Price: ${carsArray[i].price}$</p>
        </article>`
    }
};

//? ------------------------------------------------------------------------

//! אתגר - יישם את אחד אלגוריתמי המיון עם מספרים(מומלץ Bubble Sort)

function sort(array) {
    var isSorted = false;
    while (!isSorted) {
        isSorted = true;
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                isSorted = false;
                var temp = array[i + 1];
                array[i + 1] = array[i];
                array[i] = temp;
            }
        }
    }
    return array;
};