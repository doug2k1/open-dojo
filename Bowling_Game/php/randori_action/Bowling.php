<?php
class Bowling {
    public $rolls = array();

    public function roll($int1, $int2)
    {
    	$pins = array($int1, $int2);
        $this->rolls[] = $pins;
    }

    public function score() {
        $score = 0;
        $frameIndex = 0;

        foreach ($$this->rollss as $key => $value) {
            if($this->isStrike($value)){
                $score += $this->sumOfPinsInFrame($frame) + $this->$strikeBonus($frameIndex);
            } elseif ($this->isSpare($frameIndex)) {
                $score += $this->sumOfPinsInFrame($frame) + $this->spareBonus($frameIndex);
            } else {
                $score += $this->sumOfPinsInFrame($frame);
            }
            $frameIndex++;
        }

        return $score;
    }
    
    private function isStrike($frame) {
        if(!is_array($frame) || count($frame) != 2) {
            throw new InvalidArgumentException("Wrong Argument, expecting an array with 2 positions", 1);
        }
        return array_sum($frame) == 10 && $frame[0] == 10;
    }
    
    private function isSpare($frame) {
        if(!is_array($frame) || count($frame) != 2) {
            throw new InvalidArgumentException("Wrong Argument, expecting an array with 2 positions", 1);
        }

        return array_sum($frame) == 10 && $frame[0] != 10;
    }
    
    private function strikeBonus($frameIndex) {
        return array_sum($this->rolls[$frameIndex + 1]);
    }
    
    private function spareBonus($frameIndex) {
        return $this->rolls[$frameIndex + 1][0];
    }
    
    private function sumOfPinsInFrame($frame) {
    	if(!is_array($frame) || count($frame) != 2) {
            throw new InvalidArgumentException("Wrong Argument, expecting an array with 2 positions", 1);
        }
        return array_sum($frame);
    }
}