//class bola
function Bola(ctx){
	this.context = ctx;
	this.x = 0;
	this.y = 0;
	this.velocidadeX = 0;
	this.velocidadeY = 0;
	this.cor = 'black';
	this.raio = 10;
}
Bola.prototype = {
	atualizar: function(){
		var	ctx = this.context;

		if(this.x < this.raio || this.x > ctx.canvas.width - this.raio){
			this.velocidadeX *= -1;
		}

		if(this.y < this.raio || this.y > ctx.canvas.height - this.raio){
			this.velocidadeY *= -1;
		}
		this.x += this.velocidadeX;
		this.y += this.velocidadeY;
	},
	desenhar: function(){
		var ctx = this.context;
		//guardar as configuracoes atuais
		ctx.save();
		//configurar o contexto de acordo com a bola
		ctx.fillStyle = this.cor;
		//desenhar
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.raio,0,2*Math.PI,false);
		ctx.fill();
		//voltar as configuracoes anteriores
		ctx.restore();
	},
	retangulosColisao: function(){
		return [{
			x: this.x - this.raio,
			y: this.y - this.raio,
			largura: this.raio * 2,
			altura: this.raio * 2
		}];
	},
	colidiuCom: function(sprite){
		if(this.x < sprite.x)// estou na esquerda
			this.velocidadeX = - Math.abs(this.velocidadeX);// -
		else //senao, estou na direita
			this.velocidadeX = Math.abs(this.velocidadeX);

		if(this.y < sprite.y)//estou em cima
			this.velocidadeY = -Math.abs(this.velocidadeY);
		else //senao, estou embaixo
			this.velocidadeY = Math.abs(this.velocidadeY);
	}
}