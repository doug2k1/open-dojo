package br.com.ciandt.dojo.produtoEscalar;
object ProdutoEscalar {

  def main(args: Array[String]) {
    val a = List(1,2)
    val b = List(1,2,3)
    
    println(calcula(a,b))
    
  }
  
 
  def calcula(a: List[Int], b: List[Int]): String = {
    
    if (a.length != b.length) throw new IllegalArgumentException("Tamanhos diferentes")
    
    calculoAngularidade(calculaProduto(a, b))
  }
  
  private def calculaProduto(a: List[Int], b: List[Int]): Int = {
    (a,b).zipped.map(_*_).fold(0)(_+_)
  }
  
  private def calculoAngularidade(produto : Int) : String = {
    
    if (produto == 0) return "Reto"
   
    produto / produto.abs match {
      case -1 => "Obtuso"
      case 1  => "Agudo"
    }
  }

}

