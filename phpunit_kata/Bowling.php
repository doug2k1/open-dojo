<?php
class Bowling {

	public $game = array();

	public function roll($int1, $int2) {
		$frame = array($int1, $int2);
		$count =  count($this->game) + 1;
		$this->game[$count]['rolls'] = $frame;
		$this->game[$count]['score'] = $int1 + $int2;
	}

	public function score() {
		$sum = 0;
		$count = 1;
		foreach ($this->game as $frame => $values) {
			if (is_Spare($values['rolls'][0], $values['rolls'][1])) {
				$values['score'] = $values['score'] + $t
			} elseif() {

			}
		}
		return $sum;
	}

	function is_Spare($int1, $int2) {
		if ($int1 + $int2 <> 10 || $int1 == 10) {
			return false;
		}
		return true;
	}

	function is_Strike($int1, $int2) {
		if ($int1 != 10 || $int2 != 10) {
			return false;
		}
		return true;
	}

}