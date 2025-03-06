const testUlRef = document.querySelector("#avg");

arry = [95,72,88,45,60,79,82,91,50,38];

function calculateAverage(array) {
    var total = 0;
    var count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;

}

console.log(calculateAverage(arry));

testUlRef.innerHTML += "<p>" + calculateAverage(arry) + "</p>"

// https://flexiple.com/javascript/get-average-of-array-javascript