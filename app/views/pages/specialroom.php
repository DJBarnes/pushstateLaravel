<!Doctype HTML>
<html>
<head>
  <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css">
  <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
  <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
  <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
<div id="tabsDiv">
  <ul class="tabs">
    <li id="classroom" class="classroom">Classrooms</li>
    <li id="computerclassroom" class="computerclassroom">Computer Classrooms</li>
    <li id="breakoutroom" class="breakoutroom">Breakout Rooms</li>
    <li id="specialroom" class="specialroom selectedTab">Special Rooms</li>
  </ul>
  <div id="tabsContent" class="tab-content">
    <p>Special Rooms Content</p>
  </div>
</div>
<script src="http://code.jquery.com/jquery-1.10.0.min.js"></script>
<script src="http://underscorejs.org/underscore-min.js"></script>
<script src="http://backbonejs.org/backbone-min.js"></script>
<script src="../js/views/breakoutRoomView.js"></script>
<script src="../js/views/classroomView.js"></script>
<script src="../js/views/computerClassroomView.js"></script>
<script src="../js/views/specialRoomView.js"></script>
<script src="../js/util.js"></script>
<script src="../js/main.js"></script>
</body>
</html>