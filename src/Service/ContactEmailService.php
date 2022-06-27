<?php

namespace App\Service;

class ContactEmailService {

    public function initializeEmail($contactmsg){
        $to = $this->gs->getEmail();
        $name = $contactmsg->getName();
        $subject = "Mesaj contact: $name";
        $content =  $contactmsg->getSubject();
        $textmail = "<h1>".(new \DateTime('now'))->format('d-m-Y h:i')."</h1>";
        $htmlmail = "<div>".$textmail. "<p>". $content . "</p>". "</div>";
        $email = (new PHPEmail())
        ->from('caprirom@lucianturlea.ro')
        ->to($to)
        //->cc('cc@example.com')
        //->bcc('bcc@example.com')
        //->replyTo('fabien@example.com')
        //->priority(Email::PRIORITY_HIGH)
        ->subject($subject)
        ->text($textmail)
        ->html($htmlmail);
        // ->attach($dompdf->output(), $pdfname);
        $this->mailer->send($email);
    }

}