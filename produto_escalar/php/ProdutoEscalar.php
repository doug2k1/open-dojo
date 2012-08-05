<?php
/**
 * Coding Dojo Ci&T
 * 
 * @author Leandro Leonardo Isotton (lisotton)
 * @author Alberto Viana (albertov)
 * @author Celso Lopes de Andrade (clopes)
 * 
 * Problema:Desenvolva um programa que, dado dois vetores de dimensão n, retorne o produto escalar entre eles.
 */

class ProdutoEscalar {
  
  /**
   * Calcula o produto escalar de duas listas
   * @param array $a
   * @param array $b
   * @return array
   * @throws InvalidArgumentException 
   */
  public function calculate($a, $b) {
    if (!is_array($a) || !is_array($b)) {
      throw new InvalidArgumentException('Wrong Arguments, needs to be arrays');
    }
    
    if (!count($a) || !count($b)) {
      throw new InvalidArgumentException('Wrong Arguments, size of array needs to be more than one');
    }
    
    if (count($a) !== count($b)) {
      throw new InvalidArgumentException('Wrong Arguments, size of arrays needs to be the same');
    }
    
    $product = 0;
    foreach ($a as $key => $value) {
      $product += $value * $b[$key];
    }
    return array($product, $this->get_angle($product));
  }
  
  /**
   * Retorna o angulo do produto
   * @param int $product
   * @return string 
   */
  public static function get_angle($product) {
    if ($product < 0) {
      return 'obtuso';
    }
    elseif ($product > 0) {
      return 'agudo';
    }
    else {
      return 'reto';
    }
  }
  
}

?>
