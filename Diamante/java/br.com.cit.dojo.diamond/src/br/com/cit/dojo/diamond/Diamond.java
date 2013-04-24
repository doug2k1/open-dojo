package br.com.cit.dojo.diamond;


/**
 * @author Dojo
 *
 * Diamond class related to Dojo problem.
 * Please refer to http://dojopuzzles.com/problemas/exibe/diamantes/.
 */
public class Diamond {

	/**
	 * Input letter, which will be in the center of the diamond.
	 */
	private char letter;
	
	/**
	 * Diamond class constructor.
	 * 
	 * @param letter
	 *   Input letter.
	 * @throws Exception
	 *   
	 */
	public Diamond(char letter) throws Exception {
		this.setLetter(letter);
	}
	
	/**
	 * Validates whether the letter is within a correct range.
	 * 
	 * @param letter
	 *   The input letter.
	 * @return
	 *   
	 * @throws Exception
	 */
	private boolean validate(char letter) throws Exception {
		
		if(letter < 'B' ||  letter > 'Z') {
			 throw new Exception();
		}
		
		return true;
	}

	/**
	 * @return
	 */
	public char getLetter() {
		return letter;
	}

	/**
	 * @param letter
	 * @throws Exception
	 */
	public void setLetter(char letter) throws Exception {
		if(validate(letter)) {
			 this.letter = letter;	
		}
		
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	public String toString() {
		StringBuilder diamond = new StringBuilder();
			
		construirParteSuperiorDiamante(diamond);

		construirParteInferiorDiamante(diamond);
				
		return diamond.toString();
	}
	

	/**
	 * @param diamond
	 */
	private void construirParteSuperiorDiamante(StringBuilder diamond) {
		for (char i = 'A'; i <= this.letter; i++) {
			imprimeLinha(diamond, i);
			diamond.append("\n");
	    }
	}
	
	/**
	 * @param diamond
	 */
	private void construirParteInferiorDiamante(StringBuilder diamond) {		
		for (char i = (char)(this.letter - 1); i >= 'A'; i--) {
			imprimeLinha(diamond, i);
			if (i != 'A')
				diamond.append("\n");
		}		
	}
	
	/**
	 * @param diamond
	 * @param i
	 */
	private void imprimeLinha(StringBuilder diamond, char i) {
		
		int delta = this.letter - i;
		int omega = i - 'A';
		
		for (int j = delta; j > 0; j--) {
			diamond.append(" ");
		}
		diamond.append(i);
		
		for (int j = 2*omega - 1; j > 0; j--) {
			diamond.append(" ");	
		}
		
		if (omega != 0)
			diamond.append(i);

		for (int j = delta; j > 0; j--){
			diamond.append(" ");
		}
	}

}
