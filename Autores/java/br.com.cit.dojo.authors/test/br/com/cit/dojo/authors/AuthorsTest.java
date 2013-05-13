package br.com.cit.dojo.authors;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

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
		assertTrue(auth.getNames()[0].equals("GUIMARAES"));
		
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
	
}
