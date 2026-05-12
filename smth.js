document.addEventListener("keydown", function(event) {
  if (event.key === "r") {
    document.open();document.write('<!DOCTYPE html>
<html>
<head>
  <title>Google Classroom</title>
  <link rel="icon" href="https://ssl.gstatic.com/classroom/favicon.png">

  <style>
    html, body {
      margin: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #faf8ef;
    }

    iframe {
      width: 100vw;
      height: 100vh;
      border: none;
    }
  </style>
</head>

<body>
  <iframe src="https://play2048.co"></iframe>
</body>
</html>');document.close();
  }
});
