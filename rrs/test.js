var xhr = new XMLHttpRequest();

var body = 'title=mememe%id=3'

xhr.open("POST", 'https://t0zsgw77r5.execute-api.eu-west-1.amazonaws.com/beta/rrs', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.setRequestHeader('Origin', 'https://konart.github.io');

xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        alert(xhr.responseText);
    };
};

xhr.send(body);