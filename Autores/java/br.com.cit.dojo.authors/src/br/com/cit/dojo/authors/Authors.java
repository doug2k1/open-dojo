package br.com.cit.dojo.authors;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.lang.reflect.Array;
import java.util.ArrayList;

/**
 * 
 * @author Dojo
 * 
 *         Quando se lista o nome de autores de livros, artigos e outras
 *         publicações é comum que se apresente o nome do autor ou dos autores
 *         da seguinte forma: sobrenome do autor em letras maiúsculas, seguido
 *         de uma vírgula e da primeira parte do nome apenas com as iniciais
 *         maiúsculas.
 * 
 *         Por exemplo:
 * 
 *         SILVA, Joao 
 *         COELHO, Paulo
 *         ARAUJO, Celso de
 * 
 *         Seu desafio é fazer um programa que leia um número inteiro
 *         correspondendo ao número de nomes que será fornecido, e, a seguir,
 *         leia estes nomes (que podem estar em qualquer tipo de letra) e
 *         imprima a versão formatada no estilo exemplificado acima.
 * 
 *         As seguintes regras devem ser seguidas nesta formatação: o sobrenome
 *         será igual a última parte do nome e deve ser apresentado em letras
 *         maiúsculas;
 * 
 *         se houver apenas uma parte no nome, ela deve ser apresentada em
 *         letras maiúsculas (sem vírgula): se a entrada for “ Guimaraes” , a
 *         saída deve ser “ GUIMARAES”;
 * 
 *         se a última parte do nome for igual a "FILHO", "FILHA", "NETO",
 *         "NETA", "SOBRINHO", "SOBRINHA" ou "JUNIOR" e houver duas ou mais
 *         partes antes, a penúltima parte fará parte do sobrenome.
 * 
 *         Assim: se a entrada for "Joao Silva Neto", a saída deve ser
 *         "SILVA NETO, Joao" ; se a entrada for "Joao Neto" , a saída deve ser
 *         "NETO, Joao"; as partes do nome que não fazem parte do sobrenome
 *         devem ser impressas com a inicial maiúscula e com as demais letras
 *         minúsculas; "da", "de", "do", "das", "dos" não fazem parte do
 *         sobrenome e não iniciam por letra maiúscula.
 * 
 */
public class Authors {
	
	ArrayList<String> exceptions = new ArrayList<String>();
	ArrayList<String> suffixs = new ArrayList<String>();

	/**
	 * @param args
	 */

	private String[] names;

	/**
	 * @return the names
	 */
	public String[] getNames() {
		return names;
	}

	/**
	 * @param names
	 *            the names to set
	 */
	public void setNames(String[] names) {
		this.names = names;
	}

	public Authors(String fileName) throws IOException {
		BufferedReader is = new BufferedReader(new FileReader(fileName));
		String line; 
		while((line = is.readLine()) != null) {
			System.out.println(line + "LEU");
		}		
	}
	
	public Authors(String[] names) {
		
		exceptions.add("de");
		exceptions.add("da");
		exceptions.add("do");
		exceptions.add("das");
		exceptions.add("dos");
		
		this.names = names;
		
		suffixExceptions();

		if (!isValid())
			throw new IllegalArgumentException("parâmetro names");
		else {
			formatName();
		}

	}

	private boolean isValid() {

		for (int i = 0; i < this.names.length; i++) {
			if ("".equals(names[i])) {
				return false;
			}
		}
		return true;
	}

	private String camelCase(String name) {
		name = name.toLowerCase();
		
		if (!exceptions.contains(name)) {			
			char[] arrayName = name.toCharArray();
			arrayName[0] = name.toUpperCase().toCharArray()[0];
			return String.valueOf(arrayName);
		}
		
		return name; 

	}

	private String formatWithThe(String name) {
		String exception[] = { "de", "da", "do", "das", "dos" };
		String[] littleBrokenName = name.split(" ");

		return "";
	}
	
	private void suffixExceptions() {
		String namesSuffixs[] = { "FILHO", "FILHA", "NETO",    "NETA", "SOBRINHO", "SOBRINHA", "JUNIOR",
				"JÚNIOR"};
		for(int i = 0; i < namesSuffixs.length; i++) {
			this.suffixs.add(namesSuffixs[i]);
		}
	}
	
	private void formatName() {
		String[] arraySplit;

		
		
		for (int i = 0; i < this.names.length; i++) {			
			arraySplit = this.names[i].split(" ");
			
			switch(arraySplit.length) {
				case 1:
					this.names[i] = nameToUpper(this.names[i]);
					break;
				case 2:
					this.names[i] = formatTwoNames(arraySplit);
					break;
				default:
					this.names[i] = formatMultipleNames(arraySplit);
					
			}
		}

	}	

	private String formatTwoNames(String[] arraySplit) {
		return arraySplit[arraySplit.length - 1].toUpperCase()
				.concat(", ").concat(camelCase(arraySplit[0]));
	}

	private String nameToUpper(String name) {
		return name.toUpperCase();
	}
	
	private String formatMultipleNames(String[] arraySplit) {
					
		String strNomeInteiro = nameToUpper(arraySplit[arraySplit.length -1]).concat(",");
		
		if (suffixs.contains(arraySplit[arraySplit.length - 1].toUpperCase())){
			strNomeInteiro = arraySplit[arraySplit.length -2].toUpperCase() + " " + strNomeInteiro;
			
			for(int i = 0; i<arraySplit.length -2; i++)
				 strNomeInteiro = strNomeInteiro.concat(" ".concat(camelCase(arraySplit[i])));
		}
		else{		
			for(int i = 0; i<arraySplit.length -1; i++)
				strNomeInteiro = strNomeInteiro.concat(" ".concat(camelCase(arraySplit[i])));
		}	
		return strNomeInteiro ;
		
		//return "ROSA, Guimaraes de";
	}

}
