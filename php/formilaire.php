<?php

// Envoi du message sur ma boite mail

    $email = $_POST['mail'];
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    
    $sujet="Formulaire de contact";
    $mailDestinataire="adrien.naulet@gmail.com";

	$from = "From: ".$prenom." ".$nom."<".$email."> \nMime-Version:\n"; 
	$from .= " 1.0\nContent-Type: text/html; charset=UTF-8\n";
	$header= $Sujet;
	
	$messageMail = "
            Formulaire de contact:
            
            Nom :   ".$nom."
            Prénom :   ".ucfirst($prenom)."
            Email :   ".$email."
			Objet :   ".$objet."
            
            ----------- Commentaires -----------
            ".Stripslashes($_POST['commentaire'])."
            ---------------------------------------";
            
	mail($mailDestinataire, $sujet, $messageMail, $from);

?>