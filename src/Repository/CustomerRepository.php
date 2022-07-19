<?php

namespace App\Repository;

use App\Entity\Customer;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Customer|null find($id, $lockMode = null, $lockVersion = null)
 * @method Customer|null findOneBy(array $criteria, array $orderBy = null)
 * @method Customer[]    findAll()
 * @method Customer[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CustomerRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Customer::class);
    }

    public function findAllQ(){
        return $this->createQueryBuilder('r')
        ->orderBy('r.status', 'ASC');
    
    }

    public function findAll(){
        $qb = $this->findAllQ()
        ->getQuery()
        ->getResult();
        return $qb;
    }


    public function findAllStatus($status){
        $qb =  $this->findAllQ()
        ->andWhere('r.status = :status')
        ->setParameter('status', $status)
        ->getQuery()
        ->getResult();
        return $qb;
    }

    public function findAllInterviewed(){
        return  $this->createQueryBuilder('r')
        ->andWhere('r.state = :state')
        ->setParameter('state', 1)
        ->getQuery()
        ->getResult();
    }

    // /**
    //  * @return Customer[] Returns an array of Customer objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Customer
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
