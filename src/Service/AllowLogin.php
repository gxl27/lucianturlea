<?php

namespace App\Entity\Service;

class AllowLogin {

    const ALLOW = 1;

    public static function allowLogin(){

        return Self::ALLOW;

    }

}