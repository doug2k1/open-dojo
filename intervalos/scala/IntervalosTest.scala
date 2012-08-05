package br.com.ciandt.dojo.intervalos;
import org.scalatest.FunSuite
import org.junit.runner.RunWith
import org.scalatest.junit.JUnitRunner

@RunWith(classOf[JUnitRunner])
class IntervalosTest extends FunSuite {
  

  
 test("casos comuns") {
   var test = Intervalos.calcula(List(100, 101, 102, 103, 104, 105, 110, 111, 113, 114, 115, 150))
   assert(test == List("100-105", "110-111", "113-115", "150"), test);
   
   test = Intervalos.calcula(List(100, 101, 102, 103, 104, 105, 110, 111, 113, 114, 115))
   assert(test == List("100-105", "110-111", "113-115"), test);
   
   test = Intervalos.calcula(List(100, 101, 102, 103, 104, 105, 110, 111, 113, 114, 115, 150, 151))
   assert(test == List("100-105", "110-111", "113-115", "150-151"), test);

  }

 
 test("um numero") {
   val test = Intervalos.calcula(List(100))
    assert(test == List("100"), test);
  }
}