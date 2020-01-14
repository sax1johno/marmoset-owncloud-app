var loaderCtx = {
  width: 1024,
  height: 768,
  autoStart: false,
  viewer: null,
  file: null,
  dir: null,
  onView: function(file, data) {
      loaderCtx.file = file;
      loaderCtx.dir = data.dir;
      // Get file extension
      var ext = file.split('.').pop();
      if (ext == "mview") {
        // This is an mview file, so render it.
        loaderCtx.viewer = marmoset.embed(data.fileList.getDownloadUrl(loaderCtx.file, loaderCtx.dir), {
          "width": this.width,
          "height": this.height,
          "autoStart": this.autoStart
        };
      }
      // loaderCtx.load(data.fileList.getDownloadUrl(), data.$file.attr('data-mime'));
  }
}

$(document).ready(function() {
    if(typeof FileActions !== 'undefined') {
      OCA.Files.fileActions.register("application/octet-stream", 'View', OC.PERMISSION_READ, '', loaderCtx.onView);
        // for(var i=0; i<loaderCtx.mimeTypes.length; i++) {
        //     var m = loaderCtx.mimeTypes[i];
        //     OCA.Files.fileActions.register(m, 'View', OC.PERMISSION_READ, '', loaderCtx.onView);
        //     OCA.Files.fileActions.setDefault(m, 'View');
        // }
    }
});
