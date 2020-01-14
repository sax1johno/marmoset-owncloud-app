var MViewApp = {
  width: 1024,
  height: 768,
  autoStart: false,
  viewer: null,
  file: null,
  dir: null,
  load: function(success, failure) {
		var filename = MViewApp.file;
		var dir = MViewApp.dir;
		var url = '';
		var sharingToken = '';
		if ($('#isPublic').val() && $('#mimetype').val() === 'application/mview') {
			sharingToken = $('#sharingToken').val();
			url = OC.generateUrl('/apps/marmosetviewer/public/{token}', {token: sharingToken});
		} else if ($('#isPublic').val()) {
			sharingToken = $('#sharingToken').val();
			url = OC.generateUrl('/apps/marmosetviewer/public/{token}?dir={dir}&filename={filename}',
                { token: sharingToken, filename: filename, dir: dir});
			//url = this._currentContext.fileList.getDownloadUrl(filename, dir);
		} else {
			url = OC.generateUrl('/apps/marmosetviewer/ajax/loadfile?filename={filename}&dir={dir}',
                {filename: filename, dir: dir});
		}
		$.get(url).done(function(data) {
			// OCA.FilesMindMap._file.writeable = data.writeable;
			// OCA.FilesMindMap._file.mime = data.mime;
			// OCA.FilesMindMap._file.mtime = data.mtime;
			success(data.filecontents);
		}).fail(function(jqXHR) {
			failure(JSON.parse(jqXHR.responseText).message);
		})
  },
  onView: function(file, data) {
    MViewApp.file = file;
    MViewApp.dir = data.dir;
    var sharingToken = "";
    var downloadUrl = "";
    if ($('#isPublic').val() && $('#mimetype').val() === 'application/mview') {
  		sharingToken = $('#sharingToken').val();
  		downloadUrl = OC.generateUrl('/s/{token}/download', {token: sharingToken});
  		// var viewer = OCA.FilesMindMap;
  		// viewer.show(downloadUrl, false);
  	} else {
      downloadUrl = data.fileList.getDownloadUrl(MViewApp.file, MViewApp.dir);
    }
      MViewApp.viewer = marmoset.embed(downloadUrl, {
        "width": this.width,
        "height": this.height,
        "autoStart": this.autoStart
      };
      // loaderCtx.load(data.fileList.getDownloadUrl(), data.$file.attr('data-mime'));
  }
}

$(document).ready(function() {
  OCA.Files.fileActions.registerAction({
    name: 'View',
    mime: "application/mview",
    actionHandler: MViewApp.onView,
    permissions: OC.PERMISSION_READ,
  });
  OCA.Files.fileActions.setDefault("application/mview", 'View');

    // if(typeof FileActions !== 'undefined') {
    //   OCA.Files.fileActions.register("application/octet-stream", 'View', OC.PERMISSION_READ, '', loaderCtx.onView);
        // for(var i=0; i<loaderCtx.mimeTypes.length; i++) {
        //     var m = loaderCtx.mimeTypes[i];
        //     OCA.Files.fileActions.register(m, 'View', OC.PERMISSION_READ, '', loaderCtx.onView);
        //     OCA.Files.fileActions.setDefault(m, 'View');
        // }
    }
});
