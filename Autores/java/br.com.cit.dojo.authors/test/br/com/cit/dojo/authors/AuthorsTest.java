package br.com.cit.dojo.authors;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.io.IOException;

import org.hamcrest.core.IsNull;
import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;

public class AuthorsTest {

	@Test
	public void testIsNotNull() {
		String[] names = new String[] { "FOO BAR" };

		try {
			Authors auth = new Authors(names);
			assertNotNull(auth);
		} catch (Exception e) {
			fail();
		}
	}

	@Test
	public void testWhenArgumentIsNotValid() {
		try {
			Authors auth = new Authors(new String[] { "" });
			fail();
		} catch (Exception e) {
			// Success!!!
		}

		// assertFalse(auth.isValid());

		Authors auth2 = new Authors(new String[] { "Joao Silva" });

		Authors auth3 = new Authors(
				new String[] { "Joao Silva", "Lucas Arruda" });
	}

	@Test
	public void testSimpleName() {
		Authors auth = new Authors(new String[] { "Guimaraes" });
		assertEquals("GUIMARAES", auth.getNames()[0]);
		//assertTrue(auth.getNames()[0].equals("GUIMARAES"));
		
		Authors auth2 = new Authors(new String[]{"foo", "bar", "buzz"});
		assertTrue(auth2.getNames()[1].equals("BAR"));

	}
	
	@Test
	public void testCompositeTwoName() {
		Authors auth = new Authors(new String[] {"Guimaraes Rosa"});
		assertEquals("ROSA, Guimaraes", auth.getNames()[0]);
	}
	
	/**
	 * Teste com letra maiúscula no meio do nome
	 */
	@Test
	public void testCompositeWithUpperCase(){
		Authors auth = new Authors(new String[] {"GuiMaraes Rosa"});
		assertEquals( "ROSA, Guimaraes", auth.getNames()[0]);
	}
	
	@Test
	public void testCompositeWithLowerCase(){
		Authors auth = new Authors(new String[] {"guimaraes rosa"});
		assertEquals( "ROSA, Guimaraes", auth.getNames()[0]);	
	}
	
	
	@Test
	public void testCompositeWithThe(){
		Authors auth = new Authors(new String[] {"Guimaraes de rosa"});
		assertEquals( "ROSA, Guimaraes de", auth.getNames()[0]);	
	}
	
	@Test
	public void testCompositeWithThe2(){
		Authors auth = new Authors(new String[] {"guimaraes de rosa"});
		assertEquals("ROSA, Guimaraes de", auth.getNames()[0]);
	}
	
	@Test
	public void testCompositeWithThe3(){
		Authors auth = new Authors(new String[] {"guimAraes De rOsa"});
		assertEquals("ROSA, Guimaraes de", auth.getNames()[0]);
	}
	
	@Test
	public void testMultipleNames() {
		Authors auth = new Authors(new String[] {"Guimarães de Rosa Silva"});
		assertEquals("SILVA, Guimarães de Rosa", auth.getNames()[0]);
	}
	
	@Test
	public void testMultipleNamesMultipleThe() {
		Authors auth = new Authors(new String[] {"Guimarães de Rosa da Silva"});
		assertEquals("SILVA, Guimarães de Rosa da", auth.getNames()[0]);
	}
	
	@Test
	public void testMultipleNamesWithSuffix(){
		Authors auth = new Authors(new String[]{"Guimarães SilVa Júnior"});
		assertEquals("SILVA JÚNIOR, Guimarães", auth.getNames()[0]);
	}
	@Test
	public void testMultipleNamesWithSuffixCaps(){
		Authors auth = new Authors (new String[] {"Guimarães Silva JUNIOR"});
		assertEquals("SILVA JUNIOR, Guimarães", auth.getNames()[0]);
	}
	@Test
	public void testMultipleNamesWithSuffixandThe(){
		Authors auth = new Authors (new String[] {"Guimarães da Silva FILHO"});
		assertEquals("SILVA FILHO, Guimarães da", auth.getNames()[0]);
	}
	
	@Test
	public void testFabioJunior(){
		Authors auth = new Authors (new String[] {"Fabio Junior"});
		assertEquals("JUNIOR, Fabio", auth.getNames()[0]);
	}
	
	@Test
	public void testFile() throws IOException{
		Authors auth = new Authors ("C:\\Users\\lucas\\workspace\\open-dojo\\Autores\\java\\br\\com\\cit\\dojo\\authors\\src\\br\\com\\cit\\dojo\\authors\\names.txt");
		//
	}

	
	
}
