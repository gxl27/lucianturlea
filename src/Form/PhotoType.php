<?php

namespace App\Form;

use App\Entity\Photo;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Validator\Constraints\PositiveOrZero;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PhotoType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('photo', FileType::class, [
                'required' => true,
                'mapped' => false,
                'constraints' => [
                    new File([
                        'maxSize' => '10240k',
                    ])
                ],
            ])
            ->add('level', IntegerType::class, [
                'label' => 'Level',
                'required' => false,
                'constraints' => [new PositiveOrZero()],
            ])
            ->add('details', TextareaType::class , [
                'label' => 'Details',
                'required' => true,
            ])
            
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Photo::class,
        ]);
    }
}
