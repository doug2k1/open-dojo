// Your lib code.
var caixa =
{
	saque: function(ammount)
	{
		var notas = ['100', '50', '20', '10'];

		if(ammount % 10 != 0 || ammount <= 0)
		{
		    throw {
		        name: "Error",
      		    message: "valor invalido"
            }
		}

		var retorno = {};

		for (nota in notas) {
			var numeric = parseInt(nota);
			if (ammount > nota) {
				retorno[nota] = parseInt(ammount / numeric);
				ammount -= numeric * retorno[nota];
			}
		}

		return retorno;

	}
}

