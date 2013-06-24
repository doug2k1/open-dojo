import org.scalatest.matchers.ShouldMatchers
import org.scalatest.FlatSpec

class Testing extends FlatSpec with ShouldMatchers{
  
  "Sum of two halves" should "be 2/2" in {
    val x1: Fraction = new Fraction(1,2)
    assert((x1 + x1).toString() === new Fraction(2,2).toString())
  }

  "Sum of two halves simplified" should "be 1/1" in {
    val x1: Fraction = new Fraction(1,2)
    assert((x1 + x1).simplified().toString() === new Fraction(1,1).simplified().toString())
  }
  
  "Sum of two halves simplified 2/4 + 2/4" should "be 1/1" in {
    val x1:Fraction = new Fraction(2,4)
    assert((x1.simplified() +x1.simplified()).toString() === new Fraction(1,1).simplified().toString())
  }
}
