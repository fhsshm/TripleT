<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<head>
<meta charset="UTF-8">
<title>Tic Tac Toe</title>
<link rel="stylesheet" href="css/style.css" />
<script type="text/javascript" src="js/Game.js"></script>
<script type="text/javascript" src="js/Player.js"></script>
<script type="text/javascript" src="js/Board.js"></script>
</head>

<body>
	<div class="game-board">
		<div class="box" position="0">
			<img>
		</div>
		<div class="box" position="1">
			<img>
		</div>
		<div class="box" position="2">
			<img>
		</div>
		<div class="box" position="3">
			<img>
		</div>
		<div class="box" position="4">
			<img>
		</div>
		<div class="box" position="5">
			<img>
		</div>
		<div class="box" position="6">
			<img>
		</div>
		<div class="box" position="7">
			<img>
		</div>
		<div class="box" position="8">
			<img>
		</div>
		<div class="modal" id="modal">
			<div class="modal-content">
				<div class="modal-text">
					<p>Choose your piece</p>
				</div>
				<button id="selectX">X</button>
				<button id="selectO">O</button>
			</div>
		</div>
	</div>
</body>

</html>