<?php

namespace App\Entity;

use App\Repository\GlobalsettingsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=GlobalsettingsRepository::class)
 */
class Globalsettings
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="boolean")
     */
    private $enableWebsite;

    /**
     * @ORM\Column(type="boolean")
     */
    private $enableEmailService;

    /**
     * @ORM\Column(type="boolean")
     */
    private $enableLogin;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $email;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $status;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEnableWebsite(): ?bool
    {
        return $this->enableWebsite;
    }

    public function setEnableWebsite(bool $enableWebsite): self
    {
        $this->enableWebsite = $enableWebsite;

        return $this;
    }

    public function getEnableEmailService(): ?bool
    {
        return $this->enableEmailService;
    }

    public function setEnableEmailService(bool $enableEmailService): self
    {
        $this->enableEmailService = $enableEmailService;

        return $this;
    }

    public function getEnableLogin(): ?bool
    {
        return $this->enableLogin;
    }

    public function setEnableLogin(bool $enableLogin): self
    {
        $this->enableLogin = $enableLogin;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getStatus(): ?bool
    {
        return $this->status;
    }

    public function setStatus(?bool $status): self
    {
        $this->status = $status;

        return $this;
    }
}
