<?php

namespace App\Controller\Admin\Project;

use App\Entity\Project;
use App\Entity\Photo;
use App\Entity\Technology;
use App\Form\ChallengeType;
use App\Form\ProjectType;
use App\Form\PhotoType;
use App\Form\TechnologyListType;
use App\Repository\ProjectRepository;
use App\Controller\BaseController;
use App\Entity\Challenge;
use App\Form\ProjectTechnologyCollectionType;
use App\Repository\TechnologyRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/project")
 */
class ProjectController extends BaseController
{
    /**
     * @Route("/", name="project_index", methods={"GET"})
     */
    public function index(ProjectRepository $projectRepository): Response
    {
        $projects = $projectRepository->getAll();
        dump($projects);

        return $this->render('admin/project/index.html.twig', [
            'projects' => $projects
        ]);
    }

    /**
     * @Route("/new", name="project_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $project = new Project();
        $form = $this->createForm(ProjectType::class, $project);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($project);
            $entityManager->flush();

            return $this->redirectToRoute('project_index');
        }

        return $this->render('admin/project/new.html.twig', [
            'project' => $project,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="project_show", methods={"GET", "POST"})
     */
    public function show(Project $project, Request $request, TechnologyRepository $techRep): Response
    {

        // technology
        $techList = $this->createForm(TechnologyListType::class);

        $techList->handleRequest($request);
        if ($techList->isSubmitted() && $techList->isValid()) {
        
            $project->addTechnology($techList->get('technology')->getData());

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($project);
            $entityManager->flush();

            return $this->redirect($request->headers->get('referer'));
            
        }

        // challenge
        $challenge = new Challenge();
        $challengeForm = $this->createForm(ChallengeType::class, $challenge);
        //remove the level field (it can be edited only in the challenge\show route)
        $challengeForm->remove('level');

        $challengeForm->handleRequest($request);
        if ($challengeForm->isSubmitted() && $challengeForm->isValid()) {
        
            $project->addChallenge($challenge);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($project);
            $entityManager->flush();

            return $this->redirect($request->headers->get('referer'));
            
        }

        // photo
        $photo = new Photo();
        $photo->setProject($project);
        $photoForm = $this->createForm(PhotoType::class, $photo);
        $photoForm->handleRequest($request);

        if ($photoForm->isSubmitted() && $photoForm->isValid()) {
            //get file from the form
            $file = $photoForm->get('photo')->getData();
            $originalName = $file->getClientOriginalName();
            
            $filename = md5(uniqid()). '.' . $file->guessExtension();
            $uploads_directory = $this->getParameter('uploads_directory') . "photos/";
            $file->move(
                $uploads_directory,
                $filename
            );
            
            $photo->setDocument($filename);
            $photo->setName($originalName);
            $project->addPhoto($photo);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($photo);
            $entityManager->flush();
            
            return $this->redirect($request->headers->get('referer'));

        }

        return $this->render('admin/project/show.html.twig', [
            'project' => $project,
            'challengeForm' => $challengeForm->createView(), 
            'techList' => $techList->createView(), 
            'form' => $photoForm->createView()
        ]);
    }

    /**
     * @Route("/{id}/edit", name="project_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Project $project): Response
    {
        $form = $this->createForm(ProjectType::class, $project);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('project_index');
        }

        return $this->render('admin/project/edit.html.twig', [
            'project' => $project,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/delete", name="project_delete", methods={"POST"})
     */
    public function delete(Request $request, Project $project): Response
    {
        if ($this->isCsrfTokenValid('delete'.$project->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($project);
            $entityManager->flush();
        }

        return $this->redirectToRoute('project_index');
    }

    //  ---------------------------------- API ---------------------------------

    /**
     * @Route("/{id}/profile-picture/", name="project_profile_picture", methods={"POST"})
     */
    public function profilePicture(Photo $photo, ProjectRepository $projectRep): Response
    {
        $entityManager = $this->getDoctrine()->getManager();

        if(!$photo->getProfile()){
            $projectId = $photo->getProject()->getId();
            $project = $projectRep->findOneBy(['id' => $projectId]);
            $photos = $project->getPhotos();
            if($photos){
                for($i=0; $i<sizeof($photos); $i++){
                    $photos[$i]->setProfile(NULL);
                    $entityManager->persist($photos[$i]);
                }
            }
            $photo->setProfile(1);
        }else{
            $photo->setProfile(NULL);
        }
        
        
        $entityManager->persist($photo);
        $this->getDoctrine()->getManager()->flush();   
        
        return new Response('success', $status = 200);   
    }

    /**
     * @Route("/{id}/technology/remove/{techid}", name="project_technology_remove", methods={"GET"})
     */
    public function technologyRemove(Project $id, Technology $techid): Response
    {
       
        $entityManager = $this->getDoctrine()->getManager();

        $id->removeTechnology($techid);
        try{
            $entityManager->persist($id);
            $this->getDoctrine()->getManager()->flush();   

            return new Response('success', $status = 200);  

        }catch(\Exception $e){

            return new Response ($e, $status = 500);
        }        
    }

    /**
     * @Route("/{id}/challenge/remove/{challengeid}", name="project_challenge_remove", methods={"GET"})
     */
    public function challengeRemove(Project $id, Challenge $challengeid): Response
    {
       
        $entityManager = $this->getDoctrine()->getManager();

        $id->removeChallenge($challengeid);
        try{
            $entityManager->persist($id);
            $this->getDoctrine()->getManager()->flush();   

            return new Response('success', $status = 200);  

        }catch(\Exception $e){

            return new Response ($e, $status = 500);
        }        
    }

}
