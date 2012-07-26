package br.com.ciandt.dojo.produtoEscalar;
import org.scalatest.FunSuite
import org.junit.runner.RunWith
import org.scalatest.junit.JUnitRunner

@RunWith(classOf[JUnitRunner])
class ProdutoEscalarTest extends FunSuite {
  

 test("tamanho diferente") {
   val a = List(1,2,3,4)
   val b = List(1,2,3)

    val thrown = intercept[IllegalArgumentException] {
      val test = ProdutoEscalar.calcula(a,b)
    }
    assert(thrown.getMessage === "Tamanhos diferentes")

  }

 
  test("angulos agudos") {
    var a = List(1,2,3)
    var b = List(1,2,3)
    var test = ProdutoEscalar.calcula(a,b)
    assert(test === "Agudo", test)
    
    a = List(1,2)
    b = List(1,2)
    test = ProdutoEscalar.calcula(a,b)
    assert(test === "Agudo", test)
    
    a = List(1)
    b = List(1)
    test = ProdutoEscalar.calcula(a,b)
    assert(test === "Agudo", test)
  }

  test("angulos retos") {
    var a = List(1, 2, 3)
    var b = List(-3, 0, 1)
    var test = ProdutoEscalar.calcula(a, b)

    assert(test === "Reto", test)
    
    a = List(1,2)
    b = List(-2,1)
    test = ProdutoEscalar.calcula(a,b)
    assert(test === "Reto", test)
    
    a = List(10)
    b = List(0)
    test = ProdutoEscalar.calcula(a,b)
    assert(test === "Reto", test)

  }

  test("angulos obtusos") {
    var a = List(1, 2, -3)
    var b = List(1, 2, 3)
    var test = ProdutoEscalar.calcula(a, b)

    assert(test === "Obtuso", test)
    
    a = List(1,2)
    b = List(-1,-2)
    test = ProdutoEscalar.calcula(a,b)
    assert(test === "Obtuso", test)
    
    a = List(-1)
    b = List(1)
    test = ProdutoEscalar.calcula(a,b)
    assert(test === "Obtuso", test)

  }
}