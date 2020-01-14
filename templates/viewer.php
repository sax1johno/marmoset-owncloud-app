<?php
  /** @var array $_ */
  /** @var OCP\IURLGenerator $urlGenerator */
  $urlGenerator = $_['urlGenerator'];
  $version = \OCP\App::getAppVersion('marmosetviewer');
  $lang = $_['lang'];
  if (method_exists(\OC::$server, 'getContentSecurityPolicyNonceManager')) {
      $nonce = \OC::$server->getContentSecurityPolicyNonceManager()->getNonce();
  } else {
      $nonce = '';
  }
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Marmoset Viewer</title>
    <base target="_blank" />


<!-- <link rel="stylesheet" href="<?php p($urlGenerator->linkTo('marmosetviewer', 'vendor/color-picker/dist/color-picker.min.css')) ?>?v=<?php p($version) ?>" /> --> -->

</head>
<script nonce="<?=$nonce?>">
    var lang = '<?=$lang?>';
</script>
<body>
</body>
<script nonce="<?=$nonce?>" src="<?php p($urlGenerator->linkTo('marmosetviewer', 'vendor/marmoset/marmoset.js')) ?>?v=<?php p($version) ?>"></script>
<script nonce="<?=$nonce?>" src="<?php p($urlGenerator->linkTo('marmosetviewer', 'script.js')) ?>?v=<?php p($version) ?>"></script>
</html>
