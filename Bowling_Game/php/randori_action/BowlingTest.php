<?php
require_once 'Bowling.php';

class BowlingTest extends PHPUnit_Framework_TestCase
{
    protected $game;

    protected function setup() {
        $this->game = new Bowling();
    }

   public function testRoll()
    {
        $this->game->roll(5,5);
        $this->assertContains(5,$this->game->game[1]['rolls']);
        $this->assertArrayHasKey(1,$this->game->game);
    }

    public function testScore() {
        $this->game->roll(5,5);
        $this->assertEquals(10,$this->game->score());
    }

    public function testStrike() {
        $this->assertTrue($this->game->isStrike(array(10,0)));
    }

    /**
     * @dataProvider dataProviderSpare
     */
    public function testIsNotStrike($frame){
        $this->assertFalse($this->game->isStrike($frame));
    }

    /**
     * @dataProvider dataProviderSpare
     * @depends testIsNotStrike
     */
    public function testSpare($frame) {
        $this->assertTrue($this->game->isSpare($frame));
    }


    public function dataProviderSpare() {
        return array(
            array(array(5,5))
        );
    }

    /**
    * @expectedException InvalidArgumentException
    * @expectedExceptionMessage Wrong Argument, expecting an array with 2 positions
    * @expectedExecptionCode 1
    */
    public function testExceptions() {
        $this->game->isStrike(5);
    }
    
}


