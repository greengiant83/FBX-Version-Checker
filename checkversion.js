//https://code.blender.org/2013/08/fbx-binary-file-format-specification/

var fs = require('fs');

var filepath = process.argv[2];

if(filepath)
{
	fs.open(filepath, 'r', function(status, fd) {
	    if (status) {
	        console.log(status.message);
	        return;
	    }
	    var buffer = Buffer.alloc(100);
	    fs.read(fd, buffer, 0, 100, 0, function(err, num) {
	    	var u8array = new Uint8Array([buffer[26], buffer[25], buffer[24], buffer[23]]);
	    	var view = new DataView(u8array.buffer);
	    	console.log("Version: ", view.getUint32());
	    });
	});
}
else
{
	console.log("No file specified");
}