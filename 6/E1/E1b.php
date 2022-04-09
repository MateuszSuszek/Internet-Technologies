<!DOCTYPE html>
<html lang="en">

	<head>

		<title>Set 7 Exercise 1b</title>
		<meta charset="UTF-8">

	</head>

	<body>

	<?php
		echo "\$_SERVER['PHP_SELF'] Returns the filename of the currently executing script: <br>";
		echo $_SERVER['PHP_SELF'];
		echo "<br> \$_SERVER['SERVER_NAME'] Returns the name of the host server: <br>";
		echo $_SERVER['SERVER_NAME'];
		echo "<br> \$_SERVER['HTTP_HOST'] Returns the Host header from the current request: <br>";
		echo $_SERVER['HTTP_HOST'];
		echo "<br> \$_SERVER['SERVER_SOFTWARE'] Returns the server identification string: <br>";
		echo $_SERVER['SERVER_SOFTWARE'];
		echo "<br> \$_SERVER['SERVER_PORT'] Returns the port on the server machine being used by the web server for communication: <br>";
		echo $_SERVER['SERVER_PORT'];
	?>  
		
	</body>

</html>
