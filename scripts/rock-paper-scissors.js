let computerMove = '';
        let score = JSON.parse(localStorage.getItem('score')) || {
            win: 0,
            lose: 0,
            tie: 0
        };

        UpdateScoreElement();

        //Select the computers move

        function pickComputerMove() {
            const select = Math.random();
            if (select >= 0 && select < 1 / 3) {
                computerMove = 'rock';
            }
            else if (select >= 1 / 3 && select < 2 / 3) {
                computerMove = 'paper';
            }
            else if (select >= 2 / 3 && select < 1) {
                computerMove = 'scissors';
            }
            return computerMove;
        }

        //Compare the player's and the computer's moves

        function PlayGame(playerMove) {
            let result;
            const computerMove = pickComputerMove();

            pickComputerMove();

            //ROCK

            if (playerMove === 'rock' && computerMove === 'rock') {
                result = 'tied';
            }
            else if (playerMove === 'rock' && computerMove === 'paper') {
                result = 'lose';
            }
            else if (playerMove === 'rock' && computerMove === 'scissors') {
                result = 'win';
            }

            //PAPER

            if (playerMove === 'paper' && computerMove === 'rock') {
                result = 'win';
            }
            else if (playerMove === 'paper' && computerMove === 'paper') {
                result = 'tied';
            }
            else if (playerMove === 'paper' && computerMove === 'scissors') {
                result = 'lose';
            }

            //SCISSORS

            if (playerMove === 'scissors' && computerMove === 'rock') {
                result = 'lose';
            }
            else if (playerMove === 'scissors' && computerMove === 'paper') {
                result = 'win';
            }
            else if (playerMove === 'scissors' && computerMove === 'scissors') {
                result = 'tied';
            }

            //Check Score
            if (result === 'win') {
                score.win++;
            }
            else if (result === 'lose') {
                score.lose++;
            }
            else if (result === 'tied') {
                score.tie++;
            }

            localStorage.setItem('score', JSON.stringify(score));

            UpdateScoreElement();

            document.querySelector('.js-result').innerHTML = `You ${result}`

            document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"> - <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`
        }

        function UpdateScoreElement() {
            document.querySelector('.js-score').innerHTML = `Wins: ${score.win} Loses: ${score.lose} Ties: ${score.tie}`
        }