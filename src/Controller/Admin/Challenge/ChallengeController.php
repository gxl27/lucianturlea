<?php

namespace App\Controller\Admin\Challenge;

use App\Entity\Challenge;
use App\Form\ChallengeType;
use App\Repository\ChallengeRepository;
use App\Controller\BaseController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/challenge")
 */
class ChallengeController extends BaseController
{
    /**
     * @Route("/", name="challenge_index", methods={"GET"})
     */
    public function index(ChallengeRepository $challengeRepository): Response
    {
        return $this->render('admin/challenge/index.html.twig', [
            'challenges' => $challengeRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="challenge_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $challenge = new Challenge();
        $form = $this->createForm(ChallengeType::class, $challenge);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($challenge);
            $entityManager->flush();

            return $this->redirectToRoute('challenge_index');
        }

        return $this->render('admin/challenge/new.html.twig', [
            'challenge' => $challenge,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="challenge_show", methods={"GET"})
     */
    public function show(Challenge $challenge): Response
    {
        return $this->render('admin/challenge/show.html.twig', [
            'challenge' => $challenge,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="challenge_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Challenge $challenge): Response
    {
        $form = $this->createForm(ChallengeType::class, $challenge);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('challenge_index');
        }

        return $this->render('admin/challenge/edit.html.twig', [
            'challenge' => $challenge,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="challenge_delete", methods={"POST"})
     */
    public function delete(Request $request, Challenge $challenge): Response
    {
        if ($this->isCsrfTokenValid('delete'.$challenge->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($challenge);
            $entityManager->flush();
        }

        return $this->redirectToRoute('challenge_index');
    }
}
