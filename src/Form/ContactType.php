<?php

namespace App\Form;

use App\Entity\Contact;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class , [
            'label' => false,
              'attr' => ['class' => '',
            'placeholder' => 'Numele complet',
            ],
            ])
            ->add('telephone', TextType::class , [
                'label' => false,
                  'attr' => ['class' => 'form-control clearinput',
                'placeholder' => 'Telefon',
            ],
            ])
            ->add('email', TextType::class , [
                'label' => false,
                  'attr' => ['class' => 'form-control clearinput',
                'placeholder' => 'E-mail',
            ],
            ])
            ->add('title', TextType::class , [
                'label' => false,
                  'attr' => ['class' => 'form-control clearinput',
                'placeholder' => 'Titlul',
            ],
            ])
            ->add('subject', TextareaType::class , [
                'label' => false,
                  'attr' => ['class' => 'form-control clearinput',
                'placeholder' => 'Scrie mesajul ...',
            ],
            ])
              ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Contact::class,
            'method' => 'post',
        ]);
    }

    public function getBlockPrefix(){
        return '';
    }

}
