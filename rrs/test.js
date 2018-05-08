var xhr = new XMLHttpRequest();
var data = "";

xhr.open("GET", 'https://ig0wxl2wy3.execute-api.eu-west-1.amazonaws.com/beta/items', true);
// xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        data = JSON.parse(xhr.responseText)
    };
};

xhr.send();

// var data = JSON.parse('{"id": "1", "url": "http://ya.ru", "title": "Mega title", "date": "Today", "itemtype": "test"}')

itemsbar = document.getElementById("items")

var item = document.createElement('div');
item.className = "content c"
item.innerHTML = '<div class="title"><a href="' + data.url + '">' + data.title +'</a></div><div class="done action">D</div><div class="renew action">R</div>'

itemsbar.appendChild(item)

els = document.getElementsByClassName("action")
for (var i = 0; i < els.length; i++) {
    els[i].addEventListener("click", function (event) {
        // display the current click count inside the clicked div
        //event.target.textContent = "click count: " + event.detail;
        console.log(event.target.textContent + "!");
    }, false);
};