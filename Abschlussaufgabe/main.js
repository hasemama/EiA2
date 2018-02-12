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
        //Gras
        Abschlussaufgabe.crc2.fillStyle = "green";
        Abschlussaufgabe.crc2.fillRect(0, 200, 800, 400);
        //Sonne
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(695, 60, 40, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.fillStyle = "#FFD700";
        Abschlussaufgabe.crc2.fill();
        for (let i = 0; i < 50; i++) {
            let t = new Abschlussaufgabe.Baum(Math.random() * 350, Math.random() * 400 + 150);
            object.push(t);
        }
        for (let i = 0; i < n; i++) {
            let w = new Abschlussaufgabe.Wolken(0 + Math.random() * 800, 0 + Math.random() * 80);
            object.push(w);
        }
        for (let i = 0; i < 50; i++) {
            let t = new Abschlussaufgabe.Baum(Math.random() * 250 + 550, Math.random() * 400 + 150);
            object.push(t);
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