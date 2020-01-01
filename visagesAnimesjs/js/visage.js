/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

class Visage {

    constructor(canvas, x, y, vx, vy, rayon) {
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.rayon = rayon;

    }

    dessiner() {
        let ctx = this.canvas.getContext("2d");

        ctx.strokeStyle = 'orange';
        ctx.shadowBlur = 2;
        ctx.shadowColor = 'black';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.rayon, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = document.getElementById("couleur").value;
        ctx.fill();

        ctx.strokeStyle = 'blue';
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.rayon * 0.6, 0, Math.PI);
        ctx.stroke();

        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(this.x + this.rayon * 0.3, this.y - this.rayon * 0.2, this.rayon * 0.1, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x - this.rayon * 0.3, this.y - this.rayon * 0.2, this.rayon * 0.1, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    }

    deplacer(){
        this.x += this.vx;
        this.y += this.vy;
        if (this.x > (this.canvas.width - this.rayon) || this.x < this.rayon){
            this.vx = -this.vx;
        }
        if (this.y > (this.canvas.height - this.rayon) || this.y < this.rayon){
            this.vy = -this.vy;
        }


    };

};



let visage1 = new Visage(canvas, canvas.width / 2, canvas.height / 2, 3, -2, 40);
let visage2 = new Visage(canvas, canvas.width / 2 + 100, canvas.height / 2, -2, -5, 20);
//let visage3 = new Visage(canvas, canvas.width / 2 + 200, canvas.height / 2, -2, -5, 20);

let LesVisages = new Array(visage1, visage2);


//function dessiner&deplacer les visages
function drawAndMoove() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < LesVisages.length; i++) {
        LesVisages[i].dessiner();
    }
    for (let i = 0; i < LesVisages.length; i++) {
        LesVisages[i].deplacer();
    }
}

function ChangerNombre() {
    let nbVisage = document.getElementById("btnNombre").value;
   /* while (nb < LesVisages.length) {
        LesVisages.pop();
    }*/
    while (nbVisage > LesVisages.length) {
        let rayon = Math.random()*95+5;//rmax = 100, rmin = 5
        let x=rayon+Math.random()*(canvas.width-2*rayon);
        let y=rayon+Math.random()*(canvas.height-2*rayon);
        let vx=Math.random()*10;
        let vy=Math.random()*2*Math.PI;
        let newVisage = new Visage(canvas, x, y, vx*Math.cos(vy), vx*Math.sin(vy), rayon);
        LesVisages.push(newVisage);

    };

}

let myTimer;

function start() {
    myTimer = setInterval(function () {
        drawAndMoove();
    }, 20);
    document.getElementById("btnStart").disabled = true;
    document.getElementById("btnStop").disabled = false;
}

function stop() {
    clearInterval(myTimer);
    document.getElementById("btnStart").disabled = false;
    document.getElementById("btnStop").disabled = true;
}


document.querySelector("#btnStart").addEventListener('click',
    () => start()
);

document.querySelector("#btnStop").addEventListener('click',
    () => stop()
);

document.querySelector("#btnNombre").addEventListener('input',
    () => ChangerNombre()
);

drawAndMoove();// sinon au chargement les visage ne se dessineront pas mais au start oui


