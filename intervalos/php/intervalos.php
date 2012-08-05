<?php
/*
 Coding Dojo Ci&T
Solução: Alberto Leal e Vinicius Dusso
Dado uma lista de números inteiros, agrupe a lista em um conjunto de intervalos
Exemplo:
Entrada: 100, 101, 102, 103, 104, 105, 110, 111, 113, 114, 115, 150
Saída: ["100-105"], ["110-111"], ["113-115"], ["150"]
*/
class Interval {
  private $values;

  public function __construct($values) {
    $values = array_unique($values);
    sort($values);
    $this->values = $values;
  }

  public function get_values() {
    return $this->values;
  }

  public function get_intervals() {
    $sub_list = self::generate_sub_list($this->values);

    $output = '';
    foreach ($sub_list as $list) {      
      $first_element = $list[0];
      $last_element  = end($list);

      $output .= "[". $first_element;
      if ($first_element != $last_element) {
        $output .= "-". $last_element;
      }

      $output .= "], ";
    }

    return substr($output, 0, -2);
  }

  public static function generate_sub_list(Array $list = array()) {
    if (!is_array($list)) {
      throw new InvalidArgumentException("invalid argument", 1);      
    }

    $list = array_unique($list);
    sort($list);
    $sub_list = array(array());

    foreach ($list as $value) {
      $last_group   =& $sub_list[count($sub_list) - 1];      
      $last_element = end($last_group);

      if (empty($last_group) || $last_element == $value -1) {         
        array_push($last_group, $value);        
      } else {        
        array_push($sub_list, array($value));
      }
    }
    
    return $sub_list;
  }
}

class IntervalTest extends PHPUnit_Framework_TestCase {
  function test_order_list() {
    $interval = new Interval(array(105, 110, 102, 101));
    $this->assertEquals(array(101, 102, 105, 110), $interval->get_values());
  }

  function test_remove_dup_elements() {
    $interval = new Interval(array(105, 105, 105, 101));
    $values = $interval->get_values();
    $this->assertEquals(2, count($values));
  }

  /**
  * @expectedException InvalidArgumentException
  */
  function test_sub_list_invalid_argument() {    
    Interval::generate_sub_list("invalid");
  }

  function test_sub_list() {    
    $this->assertEquals(array(array(101, 102, 103), array(105)),  Interval::generate_sub_list(array(101, 102, 103, 105)));
  }

  function test_get_intervals() {        
    $interval = new Interval(array(100, 101, 102, 103, 104, 105, 110, 111, 113, 114, 115, 150));
    $this->assertEquals('[100-105], [110-111], [113-115], [150]',  $interval->get_intervals());
  }
}
?>