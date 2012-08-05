package br.com.ciandt.dojo.intervalos;
object Intervalos {

  def main(args: Array[String]) {

    val lista = List(100, 101, 102, 103, 104, 105, 110, 111, 113, 114, 115, 150, 151)

    val interval = intervalos(lista)
    println(interval)
    println(format_intervalos(interval._1, interval._2))

  }
  
  def calcula(entrada: List[Int]): List[String] = {
    val interval = intervalos(entrada)
    format_intervalos(interval._1, interval._2)
  }
  
  private def format_intervalos(min: List[Int], max: List[Int]): List[String] = {
    min.zip(max).map({ 
      case (x,y) if x == y => x + "" 
      case (x,y) if x != y => x + "-" + y 
      })
  }

  
  private def intervalos(entrada: List[Int]): (List[Int], List[Int]) = {

    var min, max = List[Int]()
    var sentinel = entrada(0)
    for (i <- 1 to entrada.length-1) {
      if (entrada(i) > entrada(i-1) + 1) { // salto na sequencia
         min = min ::: List(sentinel)
         max = max ::: List(entrada(i-1))
         sentinel = entrada(i)
      }
    }

    min = min ::: List(sentinel)
    max = max ::: {
      if (sentinel != entrada.last) {
        List(entrada.last)
      } else {
        List(sentinel)
      }
    }

    (min, max)
  }


}

