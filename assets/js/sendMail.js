function send(event, php){
console.log("Отправка запроса");
event.preventDefault ? event.preventDefault() : event.returnValue = false;
var req = new XMLHttpRequest();
req.open('POST', '../lib/PHPMailer/src/'+php, true);
req.onload = function() {
	if (req.status >= 200 && req.status < 400) {
        setTimeout(function(){
			$(location).attr('href','thank-page.html');
		  }, 1000 );
    // Если не удалось связаться с php файлом
    } else {alert("Ошибка сервера. Номер: "+req.status);}}; 

// Если не удалось отправить запрос. Стоит блок на хостинге
req.onerror = function() {alert("Ошибка отправки запроса");};
req.send(new FormData(event.target));
}

export send;