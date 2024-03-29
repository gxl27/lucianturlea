<?php

namespace App\Repository;

use App\Entity\Globalsettings;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Globalsettings|null find($id, $lockMode = null, $lockVersion = null)
 * @method Globalsettings|null findOneBy(array $criteria, array $orderBy = null)
 * @method Globalsettings[]    findAll()
 * @method Globalsettings[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GlobalsettingsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Globalsettings::class);
    }


    public function findLatest(){

        return $this->createQueryBuilder('g')
        ->andWhere('g.status = :val')
        ->setParameter('val', 1)
        ->getQuery()
        ->getOneOrNullResult()
    ;
    }

    // /**
    //  * @return Globalsettings[] Returns an array of Globalsettings objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('g.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Globalsettings
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
