<?php

namespace App\Repository;

use App\Entity\Project;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Project|null find($id, $lockMode = null, $lockVersion = null)
 * @method Project|null findOneBy(array $criteria, array $orderBy = null)
 * @method Project[]    findAll()
 * @method Project[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProjectRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Project::class);
    }

    public function getAll()
    {
        $qb = $this->getAllQuery()
        ->getQuery()
        ->getResult();
   
        return $qb;
    }

    public function getActive()
    {
        $qb = $this->getActiveQuery()
        ->getQuery()
        ->getResult();
        
        return $qb;
    }

    public function getAllQuery() {
        return $this->createQueryBuilder('p')
        ->orderBy('p.level', 'DESC');
       
    }

    public function getActiveQuery()
    {
        $qb = $this->getAllQuery();
        $qb->andWhere('p.status = :status')
        ->setParameter('status', 1);
        
        return $qb;
    }

}
