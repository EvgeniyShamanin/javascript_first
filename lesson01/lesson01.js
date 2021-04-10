document.addEventListener("DOMContentLoaded", function(event) {

    document.getElementById('submit').onclick = function() {
        console.log('hi!!!');
        const deg = document.getElementById('deg').value;
        console.log(deg);
        let answer = document.getElementById('answer');
        let tf = (9 / 5) * Number(deg) + 32
        answer.innerText = tf

    };
    document.getElementById('submit2').onclick = function() {
        console.log('hi2!!!');
        let admin;
        let name;
        name = document.getElementById('name').value;
        admin = name.slice(0);
        console.log( admin);

        let answer = document.getElementById('answer1');

        answer.innerText = admin

    };
    let task4 = 1000 + "108";
    console.log(task4)
    console.log(typeof task4)

});
