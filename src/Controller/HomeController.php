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
        // remove the fields that have to be filled by admin and not the visitor
        $form->remove('telephone');
        $form->remove('status');
        $form->remove('info');
        $form->remove('customer');

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) 
        {   
            // $contactEmailService->setReciver($this->gs->getEmail());
            // $contactEmailService->initializeEmail($contact);
            // $contactEmailService->send();
           

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($contact);
            $entityManager->flush();

            $message = "Message sent successfully!";
            $this->addFlash('success', $message);

            return $this->redirectToRoute('home');


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
