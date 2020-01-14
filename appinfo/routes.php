<?php
/**
 * Create your routes in here. The name is the lowercase name of the controller
 * without the controller part, the stuff after the hash is the method.
 * e.g. page#index -> OCA\MarmosetViewer\Controller\PageController->index()
 *
 * The controller class has to be registered in the application.php file since
 * it's instantiated in there
 */
return [
  ['name' => 'display#showMarmosetViewer', 'url' => '/', 'verb' => 'GET'],
  ['name' => 'FileHandling#save', 'url' => '/ajax/savefile', 'verb' => 'PUT'],
  ['name' => 'FileHandling#load', 'url' => '/ajax/loadfile', 'verb' => 'GET'],
  ['name' => 'PublicFileHandling#save', 'url' => '/share/save', 'verb' => 'PUT'],
  ['name' => 'PublicFileHandling#load', 'url' => '/public/{token}', 'verb' => 'GET']
];
