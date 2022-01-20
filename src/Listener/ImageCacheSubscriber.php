<?php
namespace App\Listener;

use App\Entity\Photo;

use Doctrine\Common\EventSubscriber;
use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use Doctrine\ORM\Event\PreFlushEventArgs;
use Doctrine\ORM\Event\LifecycleEventArgs;
use Doctrine\ORM\Event\PreUpdateEventArgs;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Vich\UploaderBundle\Templating\Helper\UploaderHelper;

class ImageCacheSubscriber implements EventSubscriber{

/**
 * @var CacheManager
 */
private $cacheManager;

/**
 * @var UploaderHelper
 */
private $uploaderHelper;

    public function __construct(CacheManager $cacheManager, UploaderHelper $uploaderHelper){
        $this->cacheManager = $cacheManager;
        $this->uploaderHelper = $uploaderHelper;
    }
    public function getSubscribedEvents()
    {
        return[
            'preRemove'
           
        ];
    }

    public function preRemove(LifecycleEventArgs $args){
        // clear photo's cache when delete that photo (in cache folder -> mini / thumnail / img / etc)

        $entity = $args->getEntity();

        if($entity instanceof Photo){
            $this->cacheManager->remove($this->uploaderHelper->asset($entity, 'projectImages'));
        }

    }
    


}