package br.com.cit.dojo.diamond;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

import org.junit.Test;

/**
 * @author Dojo
 *
 */
public class DiamondTest {

	/**
	 * 
	 */
	@Test
	public void testA() {
		
		try {
			new Diamond('A');			
			fail();
		}
		catch(Exception e) {
			// ok
		}
		
		
	}
	
	/**
	 * 
	 */
	@Test
	public void testInvalidLetter() {
		for (char i=0; i<255; i++) {
			
			if (i > 'A' && i <= 'Z') {
				continue;
			}
			
			try {
				new Diamond(i);
				fail();
			}catch(Exception e){
				// ok
			}
		}
	}
	
	/**
	 * 
	 */
	@Test
	public void testValidLetters() {
		for (char i='B'; i <= 'Z'; i++) {
			
			try{
				
				Diamond diamond = new Diamond(i);
				
				assertEquals(diamond.getLetter(), i);
				
				
			}catch(Exception e){
				fail();
			}
			
		}
	}

	
	/**
	 * 
	 */
	@Test
	public void testInput(){
		for (char i=65; i<=91; i++){
			
			if(i < 66){
				try{
					new Diamond(i);
					fail();
				}catch(Exception e){
					// ok
				}
			}
		}
	}
	
	/**
	 * 
	 */
	@Test
	public void testDiamondB() {
		try {
			Diamond diamond = new Diamond('B');
			String b = diamond.toString();
			StringBuilder btest = new StringBuilder();
			btest.append(" A \n");
			btest.append("B B\n");
			btest.append(" A ");
			assertEquals(btest.toString(), b.toString());
		} catch (Exception e) {
			fail();
		}
	}
	
	/**
	 * 
	 */
	@Test	
	public void testDiamondC(){
		
		try{
			
			Diamond diamond = new Diamond('C');
			String c = diamond.toString();
			
			StringBuffer ctest = new StringBuffer();
			ctest.append("  A  \n");
			ctest.append(" B B \n");
			ctest.append("C   C\n");
			ctest.append(" B B \n");
			ctest.append("  A  ");
			assertEquals(ctest.toString(), c.toString());
		}catch(Exception e) {
			fail();
		}
	}
	
	/**
	 * 
	 */
	@Test	
	public void testDiamondE(){
		
		try{
			
			Diamond diamond = new Diamond('E');
			String e = diamond.toString();
			
			StringBuilder etest = new StringBuilder();
			etest.append("    A    \n");
			etest.append("   B B   \n");
			etest.append("  C   C  \n");
			etest.append(" D     D \n");
			etest.append("E       E\n");
			etest.append(" D     D \n");
			etest.append("  C   C  \n");
			etest.append("   B B   \n");
			etest.append("    A    ");
			assertEquals(etest.toString(), e);
		}catch(Exception e) {
			fail();
		}
	}
	
	/**
	 * 
	 */
	@Test
	public void testSecondLineC() {
		
		try{
			Diamond diamond = new Diamond('C');
			String c = diamond.toString();			
			
			String[] s = c.toString().split("\n");
			assertEquals(" B B ", s[1]);
			
		}catch(Exception e){
			fail();
		}
		
	}
	
	/**
	 * 
	 */
	@Test
	public void testFirstLineB() {
		
		try {
			Diamond diamond =  new Diamond('B');
			String b = diamond.toString();
			String[] s = b.toString().split("\n");			
			assertEquals(" A ", s[0]);			
			
		} catch (Exception e) {
			fail();
		}
	}
	
	/**
	 * 
	 */
	@Test 
	public void testSecondLineB() {
		try {
			Diamond diamond = new Diamond('B');
			String b = diamond.toString();
			String[] s = b.toString().split("\n");
			assertEquals("B B", s[1]);
		} catch (Exception e) {
			fail();
		}
		
	}
	
	/**
	 * 
	 */
	@Test
	public void testThirdLineB(){
		try {
			Diamond diamond = new Diamond('B');
			String b = diamond.toString();
			String[] s = b.toString().split("\n");
			assertEquals(" A ", s[2]);
		} catch (Exception e) {
			fail();
		}
		
	}
}
