class Celular {
	constructor(color,peso,tamaño,rdc,ram){
		this.color = color;
		this.peso = peso;
		this.tamaño = tamaño;
		this.resolucionDeCamara = rdc;
		this.memoriaRam = ram;
		this.encendido = false;
	}
	presionarBotonEncedido(){
		if(this.encendido == false) {
			alert("celular prendido");
			this.encendido = true;
		} else {
			alert("celular apagado");
		}
	}
	reiniciar() {
		if(this.encendido == true) {
			alert("reiniciando celular");
		} else {
			alert("El celular se está apagado");
		}
	}
	tomarFoto(){
		alert(`foto tomada en una resolucion ${this.resolucionDeCamara}`);
	}
	grabarVideo(){
		alert(`grabando video en ${this.resolucionDeCamara}`);
	}
	mobileInfo(){
		return `
		Color: <b>${this.color}</b></br>
		Peso: <b>${this.peso}</b></br>
		Tamaño: <b>${this.tamaño}</b></br>
		Resolucion de video: <b>${this.resolucionDeCamara}</b></br>
		Memoria Ram: <b>${this.memoriaRam}</b></br>
		`;
	}
}


celular1 = new Celular("rojo","150g","5'","hd","1GB");
celular2 = new Celular("negro","155g","5.4'","full hd","2GB");
celular3 = new Celular("blanco","15046g","5.9'","full hd","2GB");


document.write(`
	${celular1.mobileInfo} <br>
	${celular2.mobileInfo} <br>
	${celular3.mobileInfo} <br>
`);