<?php
namespace App\Service\GlobalsettingsService;

use App\Entity\Menulist;
use App\Entity\Globalsettings;
use Doctrine\Persistence\ManagerRegistry;


class GlobalsettingsService
{
    private $gs;

    public function __construct(ManagerRegistry $managerRegistry) {

        // get active global settings from database
        $this->gs = $managerRegistry->getRepository(Globalsettings::class)->findLatest();
    
    }

    public function getGlobalsettings(){

        if(!$this->gs){

            return false;

        }

        return $this->gs;

    }

    public function checkWebsite(){

        if($this->gs->getEnableWebsite()){

            return true;
        }

        return false;
    }

    public function checkEmailService(){

        if($this->gs->getEnableEmailService()){
            
            return true;
        }

        return false;
    }

    public function checkLogin(){

        if($this->gs->getEnableLogin()){
            
            return true;
        }

        return false;
    }

    public function getEmail(){

        return $this->gs->getEmail();

    }
}