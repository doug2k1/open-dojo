<?php
require 'exceptions.php';
<<<<<<< HEAD
class MDCTest extends PHPUnit_Framework_TestCase
{
    private $mdc = NULL;

    public function setUp() {
        $this->mdc = new MDC();
    }

    public function testMDCSimples()
    {
        $mdc = $this->mdc->what_is(108, 72);

        $this->assertEquals($mdc, 36);
    }

    public function tearDown()
    {
       unset($this->mdc);
    }
=======
class MDCTest extends PHPUnit_Framework_TestCase {
    
  public function testMDCSimples() {
  	$mdc = new MDC(108, 72);
  	$this->assertEquals($mdc->get_result(), 36);
  }

  /**
   * @dataProvider zeroProvider     
   */
  public function testMDCZero($a, $b, $exception) 
  {
  	$this->setExpectedException($exception);
  	$mdc = new MDC($a, $b);
  }
>>>>>>> 7ca872866ce8acef94692008d7f53f8b4a3c0628

  /**
   * @dataProvider negativeProvider     
   */
  public function testMDCNegative($a, $b, $exception) 
  {
  	$this->setExpectedException($exception);
  	$mdc = new MDC($a, $b);
  }

<<<<<<< HEAD
    /**
     * @expectedException DivisionByZeroException     
     */
    /*
    public function testMDCZero() 
    {
        $mdc = $this->mdc->what_is(108, 0);
    } */

    /**
     * @dataProvider zeroProvider     
     */
    public function testMDCZero($a, $b, $exception) 
    {
        $this->setExpectedException($exception);
        $mdc = $this->mdc->what_is($a, $b);
    }

    
    /**
     * @dataProvider negativeProvider     
     */
    public function testMDCNegative($a, $b, $exception) 
    {
        $this->setExpectedException($exception);
        $mdc = $this->mdc->what_is($a, $b);
    }

    /**
     * @dataProvider nullProvider     
     */
    public function testMDCNull($a, $b, $exception) 
    {
        $this->setExpectedException($exception);
        $mdc = $this->mdc->what_is($a, $b);
    }

    /**
     * @dataProvider stringProvider     
     */
    public function testMDCString($a, $b, $exception) 
    {
        $this->setExpectedException($exception);
        $mdc = $this->mdc->what_is($a, $b);
    }
=======
  /**
   * @dataProvider nullProvider     
   */
  public function testMDCNull($a, $b, $exception) 
  {
  	$this->setExpectedException($exception);
  	$mdc = new MDC($a, $b);
  }

  /**
   * @dataProvider stringProvider     
   */
  public function testMDCString($a, $b, $exception) 
  {
  	$this->setExpectedException($exception);
  	$mdc = new MDC($a, $b);
  }


  public function zeroProvider() {
  	return array(
  		array(0,2,'DivisionByZeroException'),
  		array(4,0,'DivisionByZeroException'),
  		array(0,0,'DivisionByZeroException')
  	);
  }

  public function negativeProvider() {
  	return array(
  		array(-1,2,'InvalidArgumentException'),
  		array(4,-2,'InvalidArgumentException'),
  		array(-10,-10,'InvalidArgumentException')
  	);
  }
>>>>>>> 7ca872866ce8acef94692008d7f53f8b4a3c0628

  public function nullProvider() {
  	return array(
  		array(NULL,2,'NullPointerException'),
  		array(4,NULL,'NullPointerException'),
  		array(NULL,NULL,'NullPointerException')
  	);
  }

<<<<<<< HEAD
    public function zeroProvider() {
        return array(
            array(0,2,'DivisionByZeroException'),
            array(4,0,'DivisionByZeroException'),
            array(0,0,'DivisionByZeroException')
        );
    }

    public function negativeProvider() {
        return array(
            array(-1,2,'InvalidArgumentException'),
            array(4,-2,'InvalidArgumentException'),
            array(-10,-10,'InvalidArgumentException')
        );
    }

    public function nullProvider() {
        return array(
            array(NULL,2,'NullPointerException'),
            array(4,NULL,'NullPointerException'),
            array(NULL,NULL,'NullPointerException')
        );
    }

    public function stringProvider() {
        return array(
            array('',2,'InvalidArgumentException'),
            array(4,'','InvalidArgumentException'),
            array('','','InvalidArgumentException')
        );
    }

=======
  public function stringProvider() {
  	return array(
  		array('',2,'InvalidArgumentException'),
  		array(4,'','InvalidArgumentException'),
  		array('','','InvalidArgumentException')
  	);
  }

>>>>>>> 7ca872866ce8acef94692008d7f53f8b4a3c0628
}

?>