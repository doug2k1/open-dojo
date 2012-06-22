<?php
class estatistica {

	public $numeros;

	public function recebe($array) {
		if (!is_array($array) || empty($array)) {
			return new RuntimeException("Argument is not an array", 1);			
		}
		foreach ($array as $key => $value) {
			if (!is_numeric($value)) {
			  return new RuntimeException("Argument is a valid array", 1);	
			}
		}
		$this->numeros = $array; 
	}

	public function minimo() {
		return min($this->numeros);
	}

	public function maximo()
	{
		return max($this->numeros);
	}

	public function quantidade_elementos()
	{
		return count($this->numeros);
	}




}
?>