# Project-Tic-Tac-Toe
❌⭕ Tic-Tac-Toe
📜 Project Description
This is a browser-based implementation of the classic game Tic-Tac-Toe (also known as Noughts and Crosses). This project was completed as part of [The Odin Project's Full Stack JavaScript path] focusing on Object-Oriented Programming (OOP) principles, proper module structure, and manipulating the DOM for an interactive user experience.

The core challenge of this project was to keep global code minimal and encapsulate logic within JavaScript Module and Factory patterns.

✨ Features
Two-Player Gameplay: Allows two human players to compete against each other.

Dynamic UI: Visually updates the game board and status (current player, winner/tie message).

Game Flow Control: Automatically checks for winning conditions (rows, columns, diagonals) and ties after every move.

Player Customization: Allows players to input their names before starting the game.

Restart Functionality: A clear button to reset the board and start a new game.

Clean Separation of Concerns: Logic is organized into distinct objects (Gameboard, Player, GameController, DisplayController).

⚙️ Built With
HTML5

CSS3 (with a focus on Flexbox or Grid for the board layout)

JavaScript (ES6+)

Key Concept Focus: Module Pattern (for single-instance objects like the GameController) and Factory Functions (for creating Player objects).



🏗️ Project Structure and Code Organisation
Following The Odin Project's guidelines, the application logic is meticulously organized to minimize global scope pollution:

Gameboard Module: An IIFE/Module Pattern used to store the state of the 3x3 board (e.g., as an array). It contains methods for placing a mark and retrieving the current board state.

Player Factory: A Factory Function used to create new player objects (Player X and Player O), storing their name and assigned mark.

GameController Module: The single instance responsible for managing the game flow:

Tracking the current player.

Handling turns and switching players.

Calling the win-check logic.

DisplayController Module: Responsible for all DOM manipulation:

Rendering the board to the screen.

Handling user clicks and passing the input to the GameController.

Updating status messages (e.g., "Player X's turn," "Player O Wins!").

🚀 Getting Started
To get a local copy of the project up and running, follow these simple steps.

Prerequisites
You only need a modern web browser to run this game.

Installation
Clone the repository:

Bash

git clone https://github.com/OfosuNewton/-Project-Tic-Tac-Toe.git
Navigate to the project directory:

Bash

cd your-repo-name
Open the game: Simply open the index.html file in your preferred web browser.

🤝 Contributing
This project is a personal assignment, but feedback and suggestions are always welcome!

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'feat: Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

👤 Author
[Aboagye Newton]

GitHub: @OfosuNewton

LinkedIn: [Newton Ofosu]

©️ Acknowledgements
The Odin Project: For providing the comprehensive curriculum and project specifications.

