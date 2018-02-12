var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Snow extends Abschlussaufgabe.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            Abschlussaufgabe.crc2.fillStyle = "#ffffff";
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fill();
        }
        move() {
            if (this.y > 600) {
                this.y = 0;
            }
            this.y += Math.random();
        }
    }
    Abschlussaufgabe.Snow = Snow;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Snow.js.map