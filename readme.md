Mitra
---------------

A simple and small javascript templating engine for your HTML.

  - Mustache syntax for templating. ie, {{name}}
  - Mustaches go in your HTML.
  - 288 bytes (compressed)

The below html will show "Hello, stranger. Welcome to Mitra"

<html>
  <head>
    <script src='mitra.min.js'></script>		
      <style>
      body { background: #232323; color: #b2ffd6}
      div { padding: 40px;
      margin: 10%; 
      border: 1px dotted #b2ffd6; 
      box-shadow: 0 0 10px #000 inset 
      }			
      </style>
  </head>
	
  <body>
    <div>
      <b>Hello,</b> {{name}}. Welcome to {{app}}
    </div>
  </body>
	
  <script>
    var data = {
      name: "stranger",
      app : "Mitra"
    };

    Mitra.render(data)

    </script>
</html>



