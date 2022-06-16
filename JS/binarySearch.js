var amount;
document.getElementById("amount").addEventListener('submit', getter);

function createGrid(){
    document.getElementById("container").innerHTML = "";
    var cont = document.getElementById("container");
    amount = document.getElementById("input1").value;
    for(var i = 1; i <= amount; ++i){
        var div = document.createElement("div");
        div.setAttribute("class", "square");
        div.setAttribute("id", i);
        var h1 = document.createElement("h1");
        h1.textContent = i;
        div.appendChild(h1);
        cont.appendChild(div);
    }
}

function getter() {
    var key = document.getElementById("input2").value;
    var array = new Array(amount);
    for(var i = 1; i <= amount; i++){
        array.push(i);
    }
    let middle = array[Math.round((array.length - 1) / 2)]
    recursiveBinarySearch(key, middle, 0, 1, array.length-1)
}

function recursiveBinarySearch(key, middle, counter, left, right) {
    document.getElementById("results").innerHTML = "";
    var current = document.getElementById(middle);
    if (middle == key) {
        current.setAttribute("class", "found");
        counter++;
        document.getElementById("results").innerHTML = "It took " + counter + " hops to find " + key;
        throw new Error()
    } else if (middle < key) {
        // continue searching to the right
        current.querySelector("h1").innerHTML = "<";
        current.setAttribute("class", "tooSmall");
        counter++;
        left = middle + 1;
        middle = Math.round((left + right) / 2)
        setTimeout(function () {
            recursiveBinarySearch(key, middle, counter, left, right);
        }, 1000)
    } else if (middle > key) {
        // search searching to the left
        current.querySelector("h1").innerHTML = ">";
        current.setAttribute("class", "tooBig");
        counter++;
        right = middle - 1;
        middle = Math.round((left + right) / 2)
        setTimeout(function () {
            recursiveBinarySearch(key, middle, counter, left, right);
        }, 1000)
    } else {
        return -1
    }
}

