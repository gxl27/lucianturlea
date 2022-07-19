<?php

namespace App\Controller\Admin;

use App\Controller\BaseController;
use App\Repository\ContactRepository;
use App\Repository\CustomerRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends BaseController
{
    /**
     * @Route("/admin", name="admin")
     */
    public function index(ContactRepository $contactRepository, CustomerRepository $customerRepository): Response
    {
        $contacts = $contactRepository->findAll();
        $contactsInitial= $contactRepository->findAllStatus(0);
        $contactsRead = $contactRepository->findAllStatus(1);
        $contactsFinished = $contactRepository->findAllStatus(2);

        $customers = $customerRepository->findAll();
        $customersInitial= $customerRepository->findAllStatus(0);
        $customersRead = $customerRepository->findAllStatus(1);
        $customersFinished = $customerRepository->findAllStatus(2);
        $customersInterviewed = $customerRepository->findAllInterviewed();


        return $this->render('admin/index.html.twig', [
            'contacts' => $contacts,
            'contactsInitial' => $contactsInitial,
            'contactsRead' => $contactsRead,
            'contactsFinished' => $contactsFinished,
            'customers' => $customers,
            'customersInitial' => $customersInitial,
            'customersRead' => $customersRead,
            'customersFinished' => $customersFinished,
            'customersInterviewed' => $customersInterviewed,
        ]);

    }
}
