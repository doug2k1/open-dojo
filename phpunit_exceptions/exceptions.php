<?php
class DivisionByZeroException extends Exception{}

class NullPointerException extends Exception{}

class MDC {
<<<<<<< HEAD
	private $a;
	private $b;

	private function validate() {
		if(is_null($this->a) || is_null($this->b)) {
			throw new NullPointerException();
		}

	    if(!is_int($this->a) || !is_int($this->b)) {
	    	throw new InvalidArgumentException();
	    }

	    if($this->a < 0 || $this->b < 0) {
	    	throw new InvalidArgumentException();			
		}

		if ($this->a * $this->b == 0) {
			throw new DivisionByZeroException();			
		}
	}

	public function what_is($a, $b)
	{   
		$this->a = $a;
		$this->b = $b;

		$this->validate();
=======
  private $a      = NULL;
  private $b      = NULL;
  private $result = NULL;
  
  public function __construct($a, $b) {
    $this->a = $a;
    $this->b = $b;
    
    $this->validate_numbers();
  }
  
  private function validate_numbers() {
    if(is_null($this->a) || is_null($this->b)) {
      throw new NullPointerException();
    }

    if(!is_int($this->a) || !is_int($this->b)) {
      throw new InvalidArgumentException();
    }

    if($this->a < 0 || $this->b < 0) {
      throw new InvalidArgumentException();			
    }
>>>>>>> 7ca872866ce8acef94692008d7f53f8b4a3c0628

    if ($this->a * $this->b == 0) {
      throw new DivisionByZeroException();			
    }
  }
  
	protected function what_is() {   
		$resto = $this->a % $this->b;
		
		while($resto !== 0 ){        		        		
			$this->a = $this->b;
			$this->b = $resto;        		
			$resto = $this->a % $this->b;
		}
		$this->result = $this->b;
		
		return $this->result;
  }
  
  public function get_result() {
    if (!is_null($this->result)) {
      return $this->result;
    }
    
    return $this->what_is();
  }
}
?>