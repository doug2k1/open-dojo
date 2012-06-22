<?php
require_once 'Bowling.php';

class BowlingTest extends PHPUnit_Framework_TestCase
{
    public function testRoll()
    {
        $game = new Bowling();
        $game->roll(5,5);
        $this->assertContains(5,$game->game[1]['rolls']);
        $this->assertArrayHasKey(1,$game->game);
    }

    public function testScore() {
    	$game = new Bowling();
    	$game->roll(5,5);
    	$this->assertEquals(10,$game->score());
    }
    
}


