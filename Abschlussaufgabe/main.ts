//Aufgabe: (Aufgabe 1)
//Name: (Marcel Hasemann)
//Matrikel: (256646)
//Datum: (12.10.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
namespace Abschlussaufgabe {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let img: ImageData;

    let object: MovingObjects[] = [];

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");
        let n: number = 5;

        //Himmel
        crc2.fillStyle = "#5CACEE";
        crc2.fillRect(0, 0, 800, 600);
         //Sonne
        crc2.beginPath();
        crc2.arc(695, 60, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFD700";
        crc2.fill();


      for (let i: number = 0; i < n; i++) {
         
            let t: Baum = new Baum(Math.random()*300, Math.random() * 600);
            object.push(t);
            let w: Wolken = new Wolken(0 + Math.random() * 800, 0 + Math.random() * 80);
            object.push(w);

        }
        let m: number = 150;
        for (let i: number = 0; i < m; i++) {
            let sn: Snow = new Snow(0 + Math.random() * 800, 0 + Math.random() * 600);
            object.push(sn);

        }
        img = crc2.getImageData(0, 0, 800, 600);
        console.log(img);
        animate();
    }

    //Animate 
    function animate(): void {
        crc2.putImageData(img, 0, 0);

        for (let i: number = 0; i < object.length; i++) {
            let s: MovingObjects = object[i];
            s.update();
        }


        window.setTimeout(animate, 20);
    }



}