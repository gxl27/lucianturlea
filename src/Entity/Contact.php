<?php

namespace App\Entity;


use Symfony\Component\Validator\Constraints as Assert;

class Contact
{
    const ANTISPAM = ['antispam_time'=> true,
            'antispam_time_min' => 5,
            'antispam_time_max' => 3600,
            'antispam_honeypot' => true,
            'antispam_honeypot_class' => 'none',
            'antispam_honeypot_field' => 'contact-repeat',
        ];
    
    /**
     * @var(type="string", length=255)
     * @Assert\Length(min=3, max=125)
     */
    private $name;
        
    /**
     * @var(type="string", length=20)
     * @Assert\Length(min=3, max=20)
     */
    private $telephone;

    /**
     * @var(type="string", length=100)
     */
    private $email;

     /**
     * @var(type="string", length=255)
     * @Assert\Length(max=255)
     */
    private $title;

    /**
     * @var(type="text")
     * @Assert\Length(max=2000)
     */
    private $subject;

    /**
     * @var(type="datetime")
     */
    private $createdAt;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
    }

    /**
     * Get the value of name
     */ 
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @return  self
     */ 
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }


    public function getTelephone()
    {
        return $this->telephone;
    }

    public function setTelephone(string $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }
    
    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }


    /**
     * Get the value of title
     */ 
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set the value of title
     *
     * @return  self
     */ 
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get the value of subject
     */ 
    public function getSubject()
    {
        return $this->subject;
    }

    /**
     * Set the value of subject
     *
     * @return  self
     */ 
    public function setSubject($subject)
    {
        $this->subject = $subject;

        return $this;
    }

    /**
     * Get the value of createdAt
     */ 
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * Set the value of createdAt
     *
     * @return  self
     */ 
    public function setCreatedAt($createdAt)
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    
}
