<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Form\ContactType;
use App\Repository\ProjectRepository;
use App\Service\ContactEmailService;
use App\Controller\BaseController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends BaseController
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
    public function home(Request $request, ProjectRepository $projectRepository, ContactEmailService $contactEmailService): Response
    {
        $projects = $projectRepository->getActive();

        $contact = new Contact();
        $form = $this->createForm(ContactType::class, $contact, Contact::ANTISPAM);
       

        
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) 
        {   
            dump($contactEmailService);
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

            $message = "Mesajul a fost trimis!";
            $this->addFlash('success', $message);

            return $this->redirectToRoute('home');

            // return $this->redirect($request->headers->get('referer'));

        }elseif($form->isSubmitted()){
            $message = "Message cannot be send! Invalid request";
            $this->addFlash('alert', $message);
        }



        return $this->render('home/index.html.twig', [
            'form' => $form->createView(),
            'projects' => $projects,
        ]);
    }

}
