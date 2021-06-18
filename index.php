<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Basic Project Template</title>
    <link rel="stylesheet" href="public/css/main.min.css?v=<?php echo rand(0, 1000000) ?>">

</head>

<body>
    <h1><?php echo "Hello, World!"; ?></h1>
    <div class="notes">
        <p>Starting a new project:</p>
        <ul>
            <li>Make new project directory <code>mkdir "new-project"</code></li>
            <li>Run <code>git clone https://github.com/dfynest/new-project--basic</code> to copy template from github</li>
            <li>Run <code>npm status</code> to check if npm installed</li>
            <li>Run <code>npm install</code> to install all packages from <em>packages.json</em> file</li>
            <li>Edit <code>gulpfile.js</code> and change virtual host record (eg git.localhost)</li>
            <li>Run <code>gulp</code></li>
        </ul>
    </div>
    <script src="public/js/scripts.min.js"></script>
</body>

</html>