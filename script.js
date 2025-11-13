 //creating the gameboard module which contains the gameboard array
        const gameboard = (function () {
            let board = ["","","","","","","","",""];
           
            return {
                getBoard ()  {
                    return board
                },
                //checking board state and dropping marker if empty
                dropToken (index,marker) {
                  if (board[index] === "") {
                    board[index] = marker;
                    return true;
                  } else {
                    return false;
                  }

                },
                //changes made <<<Adding a resetBoard method to the gamboard module>>>
                resetBoard() {
                    board = ["","","","","","","","",""];
                    for (let i = 0; i < board.lenght; i++) { //looping throught the board array and setting the inner content to empty string
                        board[i] = "";
                       
                    } 
                }
            }
       })();
       //Gameboard module is all set

       //creating the player factory function which accepts name and marker as arguments
       function createplayer (name,marker) {
        return {
            getName() { // leving the power of closures to access the private variables
                return name;
            },
            getMarker () {
                return marker
            }  
       };
    }

        //Setting up the gameController(the brain) module
       const gameController =  (function () {
            const play1 = document.querySelector('#player1')
            const play2 = document.querySelector('#player2')

            //creating a player instance
            Player1 = createplayer();
            Player2 = createplayer();

            // changes made
            let activePlayer = Player1;
        


       
        // ResetGame Function
        function resetGame() {
            // 1. reset Internal Board
            gameboard.resetBoard();
            // 2. Reset Game variables: when gameboard.resetBoard() is called switch player from 1 to 2
            activePlayer = Player2;
            isGameOver = false;

            // a function which clears the inner content of the cells when called upon
            handleDisplay.clearCells() 

            //updating the UI
            const display = document.querySelector('.display-status');
            display.innerHTML = `New game initialized! It's ${activePlayer.getName()}'s turn`

                display.style.background = '#ffa600d0'
        }

        checkWin = () => {//looping through all set of possible winning conditions
            const winConditions = [
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]
            ];

            const board = gameboard.getBoard();

            for (let i = 0; i < winConditions.length; i++) {
                //applying destructuring here to unpack the values of the object.. Where i refers to each array 
                const [a,b,c] = winConditions[i];

                //check if all three cells are n ot empty and are equal
                if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
                    return true; // We have a winner!
                    
                }
            }
            return false; // no winner found
        }

        checkTie = () => {
            const board = gameboard.getBoard();
            // use the .every() method to check if every element is Not an empty string
            return board.every (cell => cell!="");

        }

        swithPlayerTurn = () => {
            activePlayer = (activePlayer === Player1) ? Player2 : Player1;
            // console.log(`it's ${activePlayer.getMarker}'s turn`);
            display.innerHTML = `It's ${activePlayer.getName()}'s turn`
        }


        //start game function
          startGame = () => {
            const start_btn = document.querySelector('#perform-click-operation')
            const player = document.querySelector('#player1');
            let display = document.querySelector('.display-status');
            start_btn.addEventListener('click',() => {
                if (player.value != "") {
                    console.log('Please fill out your names to start the game')
                
                handleDisplay.create_boxes()
                 handleClick()
                
                    //reset_operation()
                        const play1 = document.querySelector('#player1')
                        const play2 = document.querySelector('#player2')

                        Player1 = createplayer(play1.value,'X')
                        Player2 = createplayer(play2.value,'0')

                        activePlayer = Player1;
                    
                  
               
                } else {
                    alert(`hello Player, Please fill in you name to start the game `)

                }
               
                // console.log('hello')
            })
        }
        const display = document.querySelector('.display-status');
        let isGameOver = false;

      
        return {
          playRound(index) {
            if (isGameOver) {
                console.log('Game over. Start a new game to play.')
                display.innerHTML = `Game is over. Start a new game to play!`
                display.style.background = '#ff0000c4'

                return
            }
            // start_game_btn()
            // dialog(),
           
                 startGame()
            
           
            
 
            const marker = activePlayer.getMarker()
            const airdrop = gameboard.dropToken(index,marker)
            if (airdrop) {
                console.log(gameboard.getBoard());
                if (checkWin()) {
                    // console.log(`${activePlayer.getMarker()} wins`)
                    display.innerHTML = `Hurrayy ${activePlayer.getName()} wins🥂🎉🎊`;
                    display.style.background = `rgb(123,171,233)`;

                    isGameOver = true;
                   
                } else if (checkTie()) {
                    console.log(`it's a tie`)
                    display.innerHTML = `Draw`
                    display.style.background = '#00f7ffb4'

                    isGameOver = true;

                } else {
                    swithPlayerTurn(); 
                    display.style.background = '#3f0949b9'

                }
                    
            }  else {
                // console.log('That cell is already taken. try again');
                display.innerHTML != ''?  display.innerHTML = `Try elsewhere ${activePlayer.getName()}, This cell is already taken` : display.innerHTML = ``;
              
               
            }
            // console.log(play1.value)
            // console.log(play2.value)
        
        },
        resetGame
        
           
            }  
            
       })()
    
    // gameController.playRound()
   

//creating the handleDisplay module
    const handleDisplay = (function () {
        const select_container = document.querySelector('.game-grid-box');   
        // display = document.querySelector('.box');
        
        //reset btn which appears after clicking on the lets go
        function createResetbtn() {
             const game_container = document.querySelector('.game-container');
             isGameOver = false
                const reset_game = document.createElement("button");
                reset_game.textContent = "Reset Game";
                reset_game.classList.add('reset-btn');
                game_container.appendChild(reset_game);   
        }

        //Giving reset btn a set of operations
        function reset_operation() {
            reset_game = document.querySelector('.reset-btn')
            reset_game.addEventListener('click',()=> {
                //Calling the gameController.resetGame() function
                gameController.resetGame()

                //won't be using the splice since it clears the entire array
                console.log('Game successfully reset');
                console.log('Internal board state:', gameboard.getBoard())
                })
        }
                
                
                console.log(gameboard.getBoard())

             
            
           
        

        const get_lost_btn = () => {
            const start_game = document.querySelector('.start-btn')         // alert('hello')
            start_game.style.display = "none";
        }
        // changes made
        function clearCells() {
            //Get all the 9 cell elements
            const select_box = document.querySelectorAll('.box');

            //Iterate and clear the visible content
            select_box.forEach (box => {
                box.textContent = ""
            })
        }
       
        
        return {    
        //    looping through the board array to create respective boxes
            create_boxes() {
               
                    gameboard.getBoard().forEach((cellContent,index) => {
                    const cell = document.createElement('div');
                    cell.classList.add('box');
                    cell.textContent = cellContent;
                    
                    
                    cell.dataset.index = index; // store index for later use (e.g., click handling)
                    

                    select_container.appendChild(cell);
                   
                })
            
                
         
              
               createResetbtn()
               get_lost_btn()
               reset_operation()
              
             
            
               
            },
             clearCells
        };
           
    })();
 
    //working around the handleClick function
    function handleClick () {
        const get_box = document.querySelectorAll('.box')
     
        get_box.forEach((cell)=> {
            cell.addEventListener('click',() => {
                // alert('hello')
                let indexValue = cell.dataset.index;//attaching the index of each cell unto it's element
                console.log(indexValue); 
                gameController.playRound(parseInt(indexValue)) //calling the gameController.playRound() Also the 
                // parseInt converts the indexValue into an integer
                
                cell.textContent = gameboard.getBoard()[indexValue];
                let display = document.querySelector('.display-status');
                // display.style.background = '#277ce299'
                
            })
        })
    
       
    }
    //modal logic
        const dialog = () => {
            const openButton = document.querySelector("[data-open-modal]")
            const modal = document.querySelector('[data-modal]')

            openButton.addEventListener('click', () => {
                modal.showModal() //This displays the moday
                // gameController.playRound()
            });
            gameController.playRound()

        }
        dialog()
   

   