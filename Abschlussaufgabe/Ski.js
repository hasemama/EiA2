var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Ski extends Abschlussaufgabe.MovingObjects {
        constructor(_x, _y, _color, _dx, _dy) {
            super(_x, _y);
            this.color = _color;
            this.dx = _dx;
            this.dy = _dy;
        }
        draw() {
            Abschlussaufgabe.crc2.fillStyle = this.color;
            Abschlussaufgabe.crc2.fillRect(this.x, this.y, 5, -20);
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 2.5, this.y - 20, 7, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x - 4, this.y - 4);
            Abschlussaufgabe.crc2.lineTo(this.x + 13, this.y + 7);
            Abschlussaufgabe.crc2.strokeStyle = this.color;
            Abschlussaufgabe.crc2.stroke();
        }
        move() {
            if (this.x > 800) {
                this.x = 0;
                this.y = 0;
            }
            if (this.y > 600) {
                this.x = 0;
                this.y = 0;
            }
            this.y += this.dy;
            this.x += this.dx;
        }
    }
    Abschlussaufgabe.Ski = Ski;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Ski.js.map