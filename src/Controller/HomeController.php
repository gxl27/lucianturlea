<?php

namespace App\Controller;

use App\Repository\ProjectRepository;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
    public function home(ProjectRepository $projectRepository): Response
    {
        $projects = $projectRepository->getActive();

        return $this->render('home/index.html.twig', [
            'projects' => $projects
        ]);
    }
}
