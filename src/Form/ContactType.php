<?php

namespace App\Form;

use App\Entity\Contact;
use App\Entity\Customer;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class , [
            'label' => 'Name',
              'attr' => ['class' => '',
            'placeholder' => 'Full name / company name',
              ],
            ])
            ->add('email', EmailType::class , [
              'label' => 'E-mail',
                'attr' => ['class' => 'form-control clearinput',
              'placeholder' => 'E-mail',
           
            ],
          ])
            ->add('title', TextType::class , [
                'label' => "Subject *",
                'required' => false,
                  'attr' => ['class' => 'form-control clearinput',
                'placeholder' => 'Subject',
              ],
            ])
            ->add('content', TextareaType::class , [
                'label' => false,
                  'attr' => ['class' => 'form-control clearinput',
                'placeholder' => 'Write a message ...',
            ],
            ])
            ->add('info', TextareaType::class , [
              'label' => false,
              'required' => false,
              'attr' => ['class' => 'form-control clearinput',
              'placeholder' => 'Write an info ...',
              ],
            ])
            ->add('telephone', TextType::class , [
              'label' => false,
              'required' => false,
                'attr' => ['class' => 'form-control clearinput',
              'placeholder' => 'telephone',
              ],
            ])
            ->add('status', ChoiceType::class, [
              'choices' => $this->getChoices(),
              'label'=>false,
              'attr' => ['class' => 'form-control'
            ]
            ])
            ->add('customer', EntityType::class, [
              'class' => Customer::class,
              'required' => false,
              'choice_label' => 'name',
              'label' => 'Customer',
              'attr' => ['class' => 'form-control',
            ]
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

    private function getChoices(){
      $choices = Contact::STATUS;
      $output = [];
      foreach ($choices as $k => $v) {
          $output[$v] = $k;
      }
      return $output;
  }

}
