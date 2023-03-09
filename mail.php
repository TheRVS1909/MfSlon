<?php
//-------------------------------------------------------------------
require './assets/lib/PHPMailer/src/PHPMailer.php';
require './assets/lib/PHPMailer/src/SMTP.php';
require './assets/lib/PHPMailer/src/Exception.php';
require './Add_new_lead.php';
//-------------------------------------------------------------------
define('ADMIN_EMAIL',  'order@mfslon.ru');
//-------------------------------------------------------------------


$method = $_SERVER['REQUEST_METHOD'];


$c = true;
if ($method === 'POST' && !empty($_POST))
{
    // Данные для письма

    $title = $_POST['project_name'];
    $form_subject = $_POST['form_subject'];


    // Данные для формирование лида в CRM Bitrix

    $lead_info['CITY'] = $_POST['city'];
    $lead_info['THEME'] = $form_subject;
    $lead_info['NAME'] = strip_tags(trim($_POST['Имя']));
    $lead_info['TEL'] = $_POST['Телефон'];


    // Обработка данных формы

    foreach ($_POST as $key => $value)
    {
        $value = trim($value);
        $value = strip_tags($value);

        $key = str_replace('_', ' ', $key);
        if ($key != 'Комментарий к заказу' && $value != '')
        {
            if ($value == 'on') $value = 'Да';
            else $value = str_replace('_', ' ', $value);
        }
        if ($key == 'Agree') $key = 'Согласен на обработку персональных данных';


        // Получение данных для письма

        if ($value != '' &&
            $key != 'project name' &&
            $key != ADMIN_EMAIL &&
            $key != 'form subject' &&
            $key != 'city')
        {
            $message .= "
			" . (($c = !$c) ? '<tr>' : '<tr style="background-color: #f8f8f8;">') . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
			";
        }


        // Получение данных для формирования лида в CRM Bitrix

        if ($value != '' &&
            $key != 'project name' &&
            $key != ADMIN_EMAIL &&
            $key != 'form subject' &&
            $key != 'Имя' &&
            $key != 'Телефон' &&
            $key != 'Agree' &&
            $key != 'city')
            $lead_info['COMMENT'] .= '<b>' . $key . '</b><br>' . $value . '<br><br>';

    }
    $message = "<table style='width: 100%;'>$message</table>";


    // Файлы phpmailer

    // Файлы, которые отправляет пользователь

    $file = $_FILES['form_file'];


    // Формирование самого письма

    $body = $form_subject;
    $body .= $message;


    // Настройки PHPMailer

    $mail = new PHPMailer\PHPMailer\PHPMailer();
    try
    {
        $mail->isSMTP();
        $mail->CharSet = "UTF-8";
        $mail->SMTPAuth = true;
        // $mail->SMTPDebug = 1;
        //$mail->Debugoutput = function ($str, $level) {
        //    $GLOBALS['status'][] = $str;
        //};


        // Настройки почты

        $mail->Host = 'ssl://smtp.mail.ru';                                             // SMTP сервера почты
		$mail->Username = 'mf-slon@mfslon.ru'; // Логин на почте
		$mail->Password = 'aeAGvqRqyZ37RFfSG8wj'; // Пароль для внешнего приложения
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        $mail->setFrom('mf-slon@mfslon.ru', 'Лид с лендинга 2023 mf-slon.ru');   // Адрес самой почты и имя отправителя

        // Получатели письма
        $mail->addAddress('order@mfslon.ru');
        $mail->addAddress('nick2112@mail.ru');
        $mail->addAddress('elena@kandalova.ru');
        $mail->addAddress('aikp@mail.ru');
	    $mail->addAddress('order.mfslon@yandex.ru');


        // Прикрепление файлов к письму
        if (!empty($file['name'][0]))
        {
            for ($ct = 0; $ct < count($file['tmp_name']); $ct++)
            {
                $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
                $filename = $file['name'][$ct];

                if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile))
                {
                    $mail->addAttachment($uploadfile, $filename);
                    $rfile[] = "Файл $filename прикреплён";
                }
                else $rfile[] = "Не удалось прикрепить файл $filename";
            }
        }


        // Отправка сообщения

        $mail->isHTML(true);
        $mail->Subject = $title;
        $mail->Body = $body;


        // Проверка успешности отправки сообщения

        if ($mail->send()) $result = "success";
        else $result = "error";

    } catch (Exception $e)
    {
        $result = "error";
        $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
    }


    // Добавление нового лида в CRM Bitrix

    Add_new_lead($lead_info['CITY'], $lead_info['THEME'], $lead_info['NAME'], $lead_info['TEL'], $lead_info['COMMENT'], !empty($file['name'][0]));
}
//-------------------------------------------------------------------
