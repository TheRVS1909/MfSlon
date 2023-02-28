<?php
define('CRM_HOST', 'mfslon.bitrix24.ru'); // домен CRM системы
define('CRM_PORT', '443'); // порт сервера CRM. Установлен по умолчанию
define('CRM_PATH', '/crm/configs/import/lead.php'); // путь к компоненту lead.rest
define('CRM_LOGIN', 'ЛОГИН CRM'); // логин пользователя CRM по управлению лидами
define('CRM_PASSWORD', 'ПАРОЛЬ CRM'); // пароль пользователя CRM по управлению лидами
// Добавление нового лида в CRM Bitrix
function Add_new_lead($city, $lead_theme, $name, $phone, $comments, $is_file){
	if ($is_file) $comments = '<b>Файл</b><br>см. почте!<br><br>' . $comments; $postData = array(
		'TITLE' => '(' . $city . ') ' . $lead_theme,
		'NAME' => $name,
		'PHONE_MOBILE' => $phone,
		'COMMENTS' => $comments,
		'STATUS_ID' => 'IN_PROCESS',
		'ADDRESS_CITY' => $city,
		'SOURCE_ID' => 'WEB');
	if (defined('CRM_AUTH')) $postData['AUTH'] = CRM_AUTH;
	else {
		$postData['LOGIN'] = CRM_LOGIN;
		$postData['PASSWORD'] = CRM_PASSWORD;
	}
	$fp = fsockopen("ssl://".CRM_HOST, CRM_PORT, $errno, $errstr, 30);
	if ($fp) {
		$strPostData = '';
		foreach ($postData as $key => $value)
			$strPostData .= ($strPostData == '' ? '' : '&').$key.'='.urlencode($value);
			$str = "POST ".CRM_PATH." HTTP/1.0\r\n";
			$str .= "Host: ".CRM_HOST."\r\n";
			$str .= "Content-Type: application/x-www-form-urlencoded\r\n";
			$str .= "Content-Length: ".strlen($strPostData)."\r\n";
			$str .= "Connection: close\r\n\r\n";
			$str .= $strPostData;
			fwrite($fp, $str);
			fclose($fp);
	}
}
