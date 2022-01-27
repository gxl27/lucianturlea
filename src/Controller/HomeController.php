<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Form\ContactType;
use App\Repository\ProjectRepository;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="index")
     */
    public function index(): Response
    {
        return $this->redirectToRoute('home');
    }

    /**
     * @Route("/home", name="home")
     */
    public function home(Request $request, ProjectRepository $projectRepository): Response
    {
        $projects = $projectRepository->getActive();

        $contact = new Contact();
        $form = $this->createForm(ContactType::class, $contact, Contact::ANTISPAM);
       

        
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) 
        {   

            // $order = new Order();
            // $order->setType(0);
            // $order->setTitle("Nume: ".$contactmsg->getName(). $contactmsg->getTitle());
            // $order->setDetails($contactmsg->getSubject());
            // $order->setTelephone($contactmsg->getTelephone());
            // $order->setEmail($contactmsg->getEmail());

            // $order->setPriority(0);

            // $entityManager = $this->getDoctrine()->getManager();
            // $entityManager->persist($order);
            // $entityManager->flush();

            // if(!$this->gs->getDisableEmail()){
            //     $emailService = new EmailService($this->gs, $order, $mailer);
            //     $emailService->send();
            // }

            // $message = "Mesajul a fost trimis!";
            // $this->addFlash('success', $message);

            // return $this->redirect($request->headers->get('referer'));

        }elseif($form->isSubmitted()){
            $message = "Mesajul nu poate fi trimis! Solicitare invalida";
            $this->addFlash('alert', $message);
        }



        return $this->render('home/index.html.twig', [
            'form' => $form->createView(),
            'projects' => $projects,
        ]);
    }
}
