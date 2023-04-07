const people = [
    { name: "Jane", pic: "images/patrick.png", score: 300 },
    { name: "Abram", pic: "images/spongebob.png", score: 10} ,
    { name: "Abby", pic: "images/spongebob.png", score: 960 },
    { name: "Hope", pic: "images/patrick.png", score: 980 },
    { name: "Jazz", pic: "images/spongebob.png", score: 600 },
    { name: "Isabel", pic: "images/patrick.png", score: 40 }
];

let i=0;
while(i<people.length){
let template = `
    <div class="card">
        <div>
            <img src="${people[i].pic}">
            <p>${people[i].name} scored ${people[i].score}</p>
        </div>
    </div>
`;
document.querySelector(".players").innerHTML += template;
++i
}

