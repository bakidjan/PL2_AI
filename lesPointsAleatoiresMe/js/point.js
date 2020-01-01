let canvas =document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

 class Point {
     constructor(nom, x, y){
         this.nom = nom;
         this.x = x;
         this.y = y;
     };

     dessin(ctx){
         if (this.nom==='point1'){
             ctx.strokeStyle = 'red';
         } else {
             ctx.strokeStyle = 'blue';
         }
         ctx.beginPath();
         ctx.arc(this.x, this.y, 5, 0, Math.PI*2, true);
         ctx.stroke();
     };

     toString(){
         return this.nom+'('+this.x+','+this.y+')';
     };

     distanceA(p){
         dx = this.x - p.x;
         dy = this.y - p.y;
         return Math.sqrt(dx*dx + dy*dy);
     }
 }
    let p1 = new Point('point1', canvas.width/2, canvas.height/2);
    let points = [];


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
    function pointAlea() {
    let nbPoint = document.querySelector('#nbPoint').value;
        for (let i = 0; i < nbPoint; i++) {
            let nom = 'P'+(i+1);
            let x =getRandomArbitrary(5, canvas.width-5);
            let y = getRandomArbitrary(5, canvas.height-5);
            points[i] = new Point(nom, x, y);

        }
    }

function dessiner() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < points.length; i++) {
        points[i].dessin(ctx);
    }
    p1.dessin(ctx);
}

pointAlea();
dessiner(ctx);
 function draw () {
            pointAlea();
            dessiner(ctx);
        }
