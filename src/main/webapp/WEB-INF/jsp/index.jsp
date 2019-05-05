<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<head>
<meta charset="UTF-8">
<title>Tic Tac Toe</title>
<link rel="stylesheet" href="css/style.css" />
<script type="text/javascript" src="js/game.js"></script>
</head>

<body>
	<div class='game-board'>
		<div class='box'></div>
		<div class='box'></div>
		<div class='box'></div>
		<div class='box'></div>
		<div class='box'></div>
		<div class='box'></div>
		<div class='box'></div>
		<div class='box'></div>
		<div class='box'></div>
		<div class='modal' id='modal'>
			<div class='modal-content'>
				<div class='modal-text'>
					<p>Choose your piece</p>
				</div>
				<button id='selectX'>X</button>
				<button id='selectO'>O</button>
			</div>
		</div>
	</div>
</body>

</html>