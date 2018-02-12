//Aufgabe: (Aufgabe 1)
//Name: (Marcel Hasemann)
//Matrikel: (256646)
//Datum: (12.10.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    let img;
    let object = [];
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        let n = 5;
        //Himmel
        Abschlussaufgabe.crc2.fillStyle = "#5CACEE";
        Abschlussaufgabe.crc2.fillRect(0, 0, 800, 600);
        //Be    
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(150, 112);
        Abschlussaufgabe.crc2.lineTo(200, 50);
        Abschlussaufgabe.crc2.lineTo(750, 562);
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.strokeStyle = "#c2c2c2";
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.fillStyle = "#c2c2c2";
        Abschlussaufgabe.crc2.fill();
        //Piste
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(0, 0);
        Abschlussaufgabe.crc2.lineTo(800, 600);
        Abschlussaufgabe.crc2.lineTo(0, 600);
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.strokeStyle = "#FFFFFF";
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.fillStyle = "#FFFFFF";
        Abschlussaufgabe.crc2.fill();
        //Sonne
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(695, 60, 40, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.fillStyle = "#FFD700";
        Abschlussaufgabe.crc2.fill();
        //Lift
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(250, 0);
        Abschlussaufgabe.crc2.lineTo(1050, 600);
        Abschlussaufgabe.crc2.strokeStyle = "#000000";
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(260, 8);
        Abschlussaufgabe.crc2.lineTo(110, 210);
        Abschlussaufgabe.crc2.strokeStyle = "#000000";
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(505, 190);
        Abschlussaufgabe.crc2.lineTo(355, 392);
        Abschlussaufgabe.crc2.strokeStyle = "#000000";
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(700, 338);
        Abschlussaufgabe.crc2.lineTo(550, 540);
        Abschlussaufgabe.crc2.strokeStyle = "#000000";
        Abschlussaufgabe.crc2.stroke();
        //Liftsitze
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(300, 38);
        Abschlussaufgabe.crc2.lineTo(275, 70);
        Abschlussaufgabe.crc2.strokeStyle = "#000000";
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(275, 70);
        Abschlussaufgabe.crc2.lineTo(295, 85);
        Abschlussaufgabe.crc2.strokeStyle = "#000000";
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(650, 300);
        Abschlussaufgabe.crc2.lineTo(625, 332);
        Abschlussaufgabe.crc2.strokeStyle = "#000000";
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(625, 332);
        Abschlussaufgabe.crc2.lineTo(605, 317);
        Abschlussaufgabe.crc2.strokeStyle = "#000000";
        Abschlussaufgabe.crc2.stroke();
        //Schnemann 
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(500, 550, 40, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.strokeStyle = "#000000";
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.fillStyle = "#DCDCDC";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(500, 480, 30, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.strokeStyle = "#000000";
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.fillStyle = "#DCDCDC";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(500, 430, 20, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.strokeStyle = "##000000";
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.fillStyle = "##DCDCDC";
        Abschlussaufgabe.crc2.fill();
        //Augen Schneemann
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(495, 430, 2, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.strokeStyle = "#000000";
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.fillStyle = "#000000";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(510, 430, 2, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.strokeStyle = "#000000";
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.fillStyle = "#000000";
        Abschlussaufgabe.crc2.fill();
        for (let i = 0; i < n; i++) {
            let s = new Abschlussaufgabe.Ski(0, 0, "#0000ff", Math.random() * 2 + 5, Math.random() * 2 + 5);
            object.push(s);
            let t = new Abschlussaufgabe.Baum(50 + Math.random() * 170, 200 + Math.random() * 150);
            object.push(t);
            let w = new Abschlussaufgabe.Wolken(0 + Math.random() * 800, 0 + Math.random() * 80);
            object.push(w);
        }
        let m = 150;
        for (let i = 0; i < m; i++) {
            let sn = new Abschlussaufgabe.Snow(0 + Math.random() * 800, 0 + Math.random() * 600);
            object.push(sn);
        }
        img = Abschlussaufgabe.crc2.getImageData(0, 0, 800, 600);
        console.log(img);
        animate();
    }
    //Animate 
    function animate() {
        Abschlussaufgabe.crc2.putImageData(img, 0, 0);
        for (let i = 0; i < object.length; i++) {
            let s = object[i];
            s.update();
        }
        window.setTimeout(animate, 20);
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=main.js.map