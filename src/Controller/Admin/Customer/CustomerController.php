<?php

namespace App\Controller\Admin\Customer;

use App\Entity\Customer;
use App\Form\CustomerType;
use App\Repository\CustomerRepository;
use App\Controller\BaseController;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/customer")
 */
class CustomerController extends BaseController
{
    /**
     * @Route("/", name="customer_index", methods={"GET"})
     */
    public function index(CustomerRepository $customerRepository): Response
    {
        $customers = $customerRepository->findAll();
        $customersInitial= $customerRepository->findAllStatus(0);
        $customersRead = $customerRepository->findAllStatus(1);
        $customersFinished = $customerRepository->findAllStatus(2);
        $customersInterviewed = $customerRepository->findAllInterviewed();
        
        return $this->render('admin/customer/index.html.twig', [
            'customers' => $customers,
            'customersInitial' => $customersInitial,
            'customersRead' => $customersRead,
            'customersFinished' => $customersFinished,
            'customersInterviewed' => $customersInterviewed,
        ]);

        return $this->render('admin/customer/index.html.twig', [
            'customers' => $customerRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="customer_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $customer = new Customer();
        $form = $this->createForm(CustomerType::class, $customer);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($customer);
            $entityManager->flush();

            return $this->redirectToRoute('customer_index');
        }

        return $this->render('admin/customer/new.html.twig', [
            'customer' => $customer,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="customer_show", methods={"GET"})
     */
    public function show(Customer $customer): Response
    {
        return $this->render('admin/customer/show.html.twig', [
            'customer' => $customer,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="customer_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Customer $customer): Response
    {
        $form = $this->createForm(CustomerType::class, $customer);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('customer_index');
        }

        return $this->render('admin/customer/edit.html.twig', [
            'customer' => $customer,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="customer_delete", methods={"POST"})
     */
    public function delete(Request $request, Customer $customer): Response
    {
        if ($this->isCsrfTokenValid('delete'.$customer->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($customer);
            $entityManager->flush();
        }

        return $this->redirectToRoute('customer_index');
    }
}
