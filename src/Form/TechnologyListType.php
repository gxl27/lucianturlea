<?php

namespace App\Form;

use App\Entity\Technology;
use App\Repository\TechnologyRepository;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TechnologyListType extends AbstractType
{
    public function __construct(TechnologyRepository $techRep){
        $this->techRep = $techRep;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
        // ->add('item', ChoiceType::class, [
        //     'label' => "Articol",
        //     'mapped' => false,
        //     'choices' => $this->getChoicesItem(),
        //     'attr' => [ "id" => 'tech_itemId',
        //                 'class' => 'form-control service-select-item'
        //         ]           
        // ])
        ->add('technology', EntityType::class, [
            'class' => Technology::class,
            'required' => false,
            'choice_label' => function($technology) {
                return $technology->getName() . " - " . $technology->getversion();
              },
            'mapped' => false,
            'label' => 'Choose technology',
            'attr' => ['class' => 'form-control',
            
          ]
        ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Technology::class,
        ]);
    }

    private function getChoicesItem(){
        $items = $this->techRep->findAll();
        $choices = [];

        for($i=0; $i<sizeof($items);$i++){
            $choices[$items[$i]->getId()] = $items[$i]->getName() . " - " .  $items[$i]->getVersion();
            
        }
        $output = [];
        foreach ($choices as $k => $v) {
            $output[$v] = $k;
        }

        return $output;
    }
}
