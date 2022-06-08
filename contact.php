<?php
	$lastname = $_POST['lastname'];
	$firstname = $_POST['firstname'];
	$name = $lastname. " " .$firstname;
	$from = "luminousfish96@gmail.com";
	$message = $_POST['message'];	
	$subject = "FeedBack From Light City Building and Constructions";
	$body = "Name: $name.\n".
					"Visitor Email: $from.\n".
					"Message: $message.\n";

	$to = "ejalonibudamilola96@gmail.com";
	$headers = "From: ". $from;
	$sendmail = mail($to, $subject, $body, $headers);

	if($sendmail){
		echo "Thank you, Your message has been sent.";

	}
	else{
		echo "Your message was not successfully sent, please try sending again";	
	}

?>
