const nodes = document.querySelectorAll('.option');
const options = Array.prototype.slice.call(nodes);
const reset = document.querySelector('#reset_btn');
const rounds = document.querySelector('#round')

let user, cpu, tie, user_total, cpu_total, tie_total, result, player, ties, bot, round, computer;

init();

// initializare joc
function init(){
    user = -1;
    cpu = -1;
    tie = -1;
    round = 1;

    // totals
    user_total = 0;        
    cpu_total = 0;
    tie_total = 0;

    // ids
    result = document.getElementById('result');
    player = document.getElementById('p1-score');
    ties = document.getElementById('tie-score');
    bot = document.getElementById('p2-score');

}

options.forEach(element => {
    element.addEventListener('click', function(){

        // display on UI the option of user
        if(element.id === "1"){
            const image = document.getElementById('p1-img');
            image.setAttribute("src", "img/rock.png");
        }else if(element.id === "2"){
            const image = document.getElementById('p1-img');
            image.setAttribute("src", "img/paper.png");
        }else if(element.id === "3"){
            const image = document.getElementById('p1-img');
            image.setAttribute("src", "img/scissors.png");
        }

        // alculate and display on UI the option of computer
        choice();

        //find who won
        if(element.id == computer){
            cpu = 0;
            user = 0;
            tie = 1;
        }else if(element.id == 1 && computer == 2){
            cpu = 1;
            user = 0;
            tie = 0;
        }else if(element.id == 1 && computer == 3){
            cpu = 0;
            user = 1;
            tie = 0;
        }else if(element.id == 2 && computer == 1){
            cpu = 0;
            user = 1;
            tie = 0;
        }else if(element.id == 2 && computer == 3){
            cpu = 1;
            user = 0;
            tie = 0;
        }else if(element.id == 3 && computer == 1){
            cpu = 1;
            user = 0;
            tie = 0;
        }else if(element.id == 3 && computer == 2){
            cpu = 0;
            user = 1;
            tie = 0;
        }

        // display result, change board and round
        display();


    });
});

//  =================== display cpu choice ==========================
function choice(){
    computer = Math.floor(Math.random() * 3) + 1;
    console.log(computer);

    if(computer == 1){
        const image = document.getElementById('p2-img');
        image.setAttribute("src", "img/rock.png");
    }else if(computer == 2){
        const image = document.getElementById('p2-img');
        image.setAttribute("src", "img/paper.png");
    }else if(computer == 3){
        const image = document.getElementById('p2-img');
        image.setAttribute("src", "img/scissors.png");
    }
}


//  =================== reset ==========================

reset.addEventListener('click', function(){
    init();
    //img
    const p1_img = document.getElementById('p1-img');
    p1_img.setAttribute("src", "img/q-mark.png");

    const cpu_img = document.getElementById('p2-img');
    cpu_img.setAttribute("src", "img/q-mark.png");

    //board
    bot.innerHTML = cpu_total;
    ties.innerHTML = cpu_total;
    player.innerHTML = cpu_total;
    rounds.innerHTML = round;
    result.innerHTML = "Start!";
});

// ===================== display ========================
function display(){
    if(cpu == 1){
        result.innerHTML = "Computer won!";
        cpu_total++;
        bot.innerHTML = cpu_total;
    }else if(user == 1){
        result.innerHTML = "You won!";
        user_total++;
        player.innerHTML = user_total;
    }else{
        result.innerHTML = "It is a tie!";  
        tie_total++;
        ties.innerHTML = tie_total;          
    }
    
    round++;
    rounds.innerHTML = round;
}