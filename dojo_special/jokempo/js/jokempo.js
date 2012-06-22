// function Jogador(jogada) {

// 	this.jogada = jogada;

// 	this.getJogada = function() {
// 		return this.jogada;
// 	}
// }

function Juiz(jogada1, jogada2){

	//this.getJogadas = function(){
	//	return [1,2];
	//}
	//

	var jogadas = [];
	jogadas['Pedra']   = 'Tesoura';
	jogadas['Papel']   = 'Pedra'
	jogadas['Tesoura'] = 'Papel';

	if (typeof jogadas[jogada1] == 'undefined') {
		throw{
			name: "Error",
			message: "Jogada Invalida"
		};
	}

	this.resultado = function () {
		if(jogada2 === jogada1) {
			return "Empate";
		}
		else{
			if (jogadas[jogada1] === jogada2) {
				return jogada1;
			}else {
				return jogada2;
			}
		}
	}
}