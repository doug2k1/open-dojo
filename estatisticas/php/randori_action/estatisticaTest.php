<?php 
require 'estatistica.php';

class estatisticaTest extends PHPUnit_Framework_TestCase
{

	public $estatistica;

    public function setUp()
    {
        $this->estatistica = new estatistica;
    }

    public function testMinimo()
    {
    	$array = array(1,2,3,-2, 2.5, -3.5);
    	$this->estatistica->recebe($array);
    	$this->assertEquals(-3.5, $this->estatistica->minimo());
 	
    }

    public function testMaximo()
    {
    	$array = array(1,2,3);
    	$this->estatistica->recebe($array);
    	$this->assertEquals(3, $this->estatistica->maximo());
 	
    }

    public function testQuantidadeElementos()
    {
    	$array = array(1,2,3,5, 6);
    	$this->estatistica->recebe($array);
    	$this->assertEquals(5, $this->estatistica->quantidade_elementos());
 	
    }


	
    public function testValoresInvalidos()
    {
    	$array = 'array(1,2,3)';
    	$this->assertInstanceOf('RuntimeException', $this->estatistica->recebe($array));
    	$array = array();
    	$this->assertInstanceOf('RuntimeException', $this->estatistica->recebe($array));

    	$array = array(1,2,3, "dojo");
    	$this->assertInstanceOf('RuntimeException', $this->estatistica->recebe($array));
    }

    public function tearDown()
    {
        // your code here
    }
}


?>