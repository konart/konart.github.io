var xhr = new XMLHttpRequest();

var body = 'title=mememe&id=3'

xhr.open("POST", 'https://t0zsgw77r5.execute-api.eu-west-1.amazonaws.com/beta/rrs', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.setRequestHeader('Origin', 'https://konart.github.io');

xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        alert(xhr.responseText);
    };
};

xhr.send(body);

els = document.getElementsByClassName("action")
for (var i = 0; i < els.length; i++) {
    els[i].addEventListener("click", function (event) {
        // display the current click count inside the clicked div
        //event.target.textContent = "click count: " + event.detail;
        console.log(event.target.textContent + "!");
    }, false);
};

