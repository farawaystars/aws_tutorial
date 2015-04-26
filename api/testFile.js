//////////////// FOR TESTING OPSWORKS //////////////////////


exports.version = "0.1.0";

exports.testing = function(req, res){

	   // Write output
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.write("successful test.\n");
   res.end();
   console.log("success");
}