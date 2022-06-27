<?php

namespace App\Controller\Admin\Technology;

use App\Entity\Technology;
use App\Form\TechnologyType;
use App\Repository\TechnologyRepository;
use App\Controller\BaseController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/technology")
 */
class TechnologyController extends BaseController
{
    /**
     * @Route("/", name="technology_index", methods={"GET"})
     */
    public function index(TechnologyRepository $technologyRepository): Response
    {
        return $this->render('admin/technology/index.html.twig', [
            'technologies' => $technologyRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="technology_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $technology = new Technology();
        $form = $this->createForm(TechnologyType::class, $technology);
        // remove the photo field from the form (it can be uploaded only from the /edit ruoute)
        $form->remove('photo');
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($technology);
            $entityManager->flush();

            return $this->redirectToRoute('technology_index');
        }

        return $this->render('admin/technology/new.html.twig', [
            'technology' => $technology,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="technology_show", methods={"GET"})
     */
    public function show(Technology $technology): Response
    {
        return $this->render('admin/technology/show.html.twig', [
            'technology' => $technology,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="technology_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Technology $technology): Response
    {
        $form = $this->createForm(TechnologyType::class, $technology);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            if($form->get('photo')->getData()) {
                // check if there is any photo uploaded and save it
                
                $file = $form->get('photo')->getData();
                $originalName = $file->getClientOriginalName();
                $filename = md5(uniqid()). '.' . $file->guessExtension();
                $uploads_directory = $this->getParameter('uploads_directory') . "tech/";
                $file->move(
                    $uploads_directory,
                    $filename
                );
                
                $technology->setDocument($filename);
            }

            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('technology_index');
        }

        return $this->render('admin/technology/edit.html.twig', [
            'technology' => $technology,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="technology_delete", methods={"POST"})
     */
    public function delete(Request $request, Technology $technology): Response
    {
        if ($this->isCsrfTokenValid('delete'.$technology->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($technology);
            $entityManager->flush();
        }

        return $this->redirectToRoute('technology_index');
    }
}
