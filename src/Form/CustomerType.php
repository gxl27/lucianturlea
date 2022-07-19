<?php

namespace App\Form;

use App\Entity\Customer;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CustomerType extends AbstractType
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
            ->add('link', TextType::class , [
                'label' => 'link',
                'required' => false,
                    'attr' => ['class' => 'form-control clearinput',
                'placeholder' => 'link',
                ],
                ])
            
            ->add('platform', TextType::class , [
                'label' => 'Platform',
                    'attr' => ['class' => '',
                'placeholder' => 'Platform',
                    ],
                ])
            ->add('location', TextType::class , [
                'required' => false,
                'label' => 'Location',
                    'attr' => ['class' => '',
                'placeholder' => 'Location',
                    ],
                ])
            ->add('salary', IntegerType::class , [
                'required' => false,
                'label' => 'Salary',
                'attr' => ['class' => '',
                'placeholder' => 'Salary',
                    ],
                ])
                ->add('email', EmailType::class , [
                    'required' => false,
                  'label' => 'E-mail',
                    'attr' => ['class' => 'form-control clearinput',
                  'placeholder' => 'E-mail',
               
                ],
              ])
              ->add('telephone', TextType::class , [
                'label' => 'Telephone',
                'required' => false,
                  'attr' => ['class' => 'form-control clearinput',
                'placeholder' => 'telephone',
                ],
              ])
                ->add('info', TextareaType::class , [
                  'label' => false,
                  'required' => false,
                  'attr' => ['class' => 'form-control clearinput',
                  'placeholder' => 'Write an info ...',
                  ],
                ])
                ->add('issues', TextareaType::class , [
                    'label' => false,
                    'required' => false,
                    'attr' => ['class' => 'form-control clearinput',
                    'placeholder' => 'Write an issues ...',
                    ],
                  ])
                
                
                ->add('status', ChoiceType::class, [
                  'choices' => $this->getChoices(),
                  'label'=>false,
                  'attr' => ['class' => 'form-control'
                ]
                ])
                ->add('state', ChoiceType::class, [
                    'choices' => $this->getChoicesState(),
                    'label'=>false,
                    'attr' => ['class' => 'form-control'
                  ]
                  ])
                ->add('rate', ChoiceType::class, [
                'choices' => $this->getChoicesRate(),
                'label'=>'rate',
                'attr' => ['class' => 'form-control'
                ]
                ])
                ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Customer::class,
        ]);
    }

    private function getChoices(){
        $choices = Customer::STATUS;
        $output = [];
        foreach ($choices as $k => $v) {
            $output[$v] = $k;
        }
        return $output;
    }


    private function getChoicesState(){
        $choices = Customer::STATE;
        $output = [];
        foreach ($choices as $k => $v) {
            $output[$v] = $k;
        }
        return $output;
    }

    private function getChoicesRate(){
        $choices = [0,1,2];
        $output = [];
        foreach ($choices as $k => $v) {
            $output[$v] = $v;
        }
        return $output;
    }

}
