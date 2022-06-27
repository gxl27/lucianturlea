<?php

namespace App\Form;

use App\Entity\Project;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Validator\Constraints\PositiveOrZero;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProjectType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('link')
            ->add('subtitle')
            ->add('status', ChoiceType::class, [
                'choices' => $this->typeChoices(),
                
                'label' => 'status',
                'attr' => ['class' => 'form-control',
                
                ]
            ])
            ->add('public', ChoiceType::class, [
                'choices' => $this->typeChoices(),
                
                'label' => 'public',
                'attr' => ['class' => 'form-control',
                
                ]
            ])
            ->add('production', ChoiceType::class, [
                'choices' => $this->typeChoices(),
                
                'label' => 'production',
                'attr' => ['class' => 'form-control',
                
                ]
            ])
            ->add('github')
            ->add('level', IntegerType::class, [
                'label' => 'Level',
                'required' => false,
                'constraints' => [new PositiveOrZero()],
            ])

            ->add('description', TextareaType::class, [
                'label' => false
                ])
            ->add('login')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Project::class,
        ]);
    }

    private function typeChoices(){
        $type = [0 => "No", 1 => "Yes"];
        $choices = $type;
        $output = [];
        foreach ($choices as $k => $v) {
            $output[$v] = $k;
        }
        return $output;
    }
}
