var player1_score = 0;
var player2_score = 0;
document.getElementById('player1Score').innerHTML = player1_score;
document.getElementById('player2Score').innerHTML = player2_score;
Player_1NAME = localStorage.getItem('Name_Player_1');
Player_2NAME = localStorage.getItem('Name_Player_2');
console.log(Player_1NAME);
console.log(Player_2NAME);
document.getElementById('player1').innerHTML = Player_1NAME + " : ";
document.getElementById('player2').innerHTML = Player_2NAME + " : ";
document.getElementById('Player_Question').innerHTML = Player_1NAME;
document.getElementById('Player_Answer').innerHTML = Player_2NAME;


function send() {
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;
    console.log("num1 : " + num1);
    console.log("num2 : " + num2);
    act_ans = parseInt(num1) * parseInt(num2);
    console.log("Answer : " + act_ans);
    question = "Q. " + "<h4>" + num1 + " X " + num2 + "</h4>";
    input_box = "<br> Answer : <input type = 'number' id='input_check_box'>";
    check_button = "<br> <br> <button class='btn btn-info' onclick = 'check()'> CHECK </button>";
    row = question + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

var question_turn = "Player_1";
var answer_turn = "Player_2";

function check() {
    var get_answer = document.getElementById('input_check_box').value
    if (get_answer == act_ans) {
        if (answer_turn == "Player_1") {
            player1_score = player1_score + 1;
            document.getElementById('player1Score').innerHTML = player1_score;
            console.log("CORRECT")
        }

        else {
            player2_score = player2_score + 1;
            document.getElementById('player2Score').innerHTML = player2_score;
            console.log("CORRECT")
        }


    }
    else {
        console.log("INCORRECT");
    }

    if (question_turn == "Player_1") {
        question_turn = "Player_2";
        document.getElementById('Player_Question').innerHTML = Player_2NAME;

    }
    else {
        question_turn = "Player_1";
        document.getElementById('Player_Question').innerHTML = Player_1NAME;
    }

    if (answer_turn == "Player_1") {
        answer_turn = "Player_2";
        document.getElementById('Player_Answer').innerHTML = Player_2NAME;
    }

    else {
        answer_turn = "Player_1";
        document.getElementById('Player_Answer').innerHTML = Player_1NAME;
    }


}
