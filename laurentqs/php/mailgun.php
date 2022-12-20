<?php

$json = file_get_contents('php://input');
$jsond = json_decode($json, true);
$nom = $jsond['nom'];
$prenom = $jsond['prenom'];

// $data = array(
// 	"Messages" => array(array(
// 		"From" => array(
// 			"Email" => 'laurent-hauman.fr',
// 			"Name" => 'Laurent Hauman'
// 		),
// 		"To" => array(
// 			array(
// 				"Email" => "matdup73@gmail.com",
// 				"Name" => "test"
// 			)
// 		),
// 		"Attachments" => array(
// 			array(
// 				"ContentType" => "text/plain",
// 				"Filename" => "file.txt",
// 				"Base64Content" => base64_encode($json),
// 			)
// 		),
// 		"Subject" => ''. $nom .' '. $prenom .'',
// 		"TextPart" => 'Bonjour Laurent, '. $nom .' '. $prenom .', ne sera pas présent.',
// 		"HTMLPart" => 'Bonjour Laurent, '. $nom .' '. $prenom .', ne sera pas présent.',
// 	)
// 	));


$data = array(
	"from" => "laurent Hauman <laurenthauman@test.fr>",
	"to" => "matdup73@gmail.com",
	"subject" => "'. $nom .' '. $prenom .'",
	"text" => "Bonjour Laurent, '. $nom .' '. $prenom .', ne sera pas présent.",
	//"o:deliverytime" => "Tue, 20 Dec 2022 13:20:00",
	//"attachments" => array("content-type" => "text/plain", "name" => "file.txt")
);



$ch = curl_init();


curl_setopt($ch, CURLOPT_URL, 'https://api.mailgun.net/v3/sandbox5d3545964ac54006ac2cd376380a6b84.mailgun.org');
curl_setopt($ch, CURLOPT_USERPWD, "api:c4995e30adc02401b4472824ef5322f1-eb38c18d-bbbf401e");
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

// $headers = array();
// $headers[] = 'Authorization: Basic Nzc3YzBiNjZlYzJhODIzY2U1NGM4MTA1ZWRmODFiMjA6NmVhNjRkMDkxYmZjNzA0NTZhNWQyYmJmMWEwZGVkYTg=';
// $headers[] = 'Accept: application/json';
// $headers[] = 'Content-type: application/json';
// curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

echo $response  = curl_exec($ch);

if($errno = curl_errno($ch)) {
	$error_message = curl_strerror($errno);
	echo "cURL error ({$errno}):\n {$error_message}";
}

curl_close($ch);

?>


