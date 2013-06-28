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
  
  "Sum of two halves 2/4 + 2/4" should "be 4/4" in {
    val x1:Fraction = new Fraction(2,4)
    assert((x1 + x1).toString() === "4/4")
  }
  
  "Sum 1/2 (-1)/2" should "be 0/2" in {
    val x1: Fraction = new Fraction(1,2)
    val x2: Fraction = new Fraction(-1,2)

    assert((x1 + x2).toString() === "0/2")
  }

  "Sum 1/2 1/3" should "be 5/6" in {
    val x1: Fraction = new Fraction(1,2)
    val x2: Fraction = new Fraction(1,3)
    
    assert((x1+x2).toString() === "5/6")
  }
  
  "Sum of two negatives" should "also be negative" in {
    assert((new Fraction(-1, 2) + new Fraction(-1, 2)).toString === "-2/2")
  }
  
  it should "be negative even in denominator" in {
    assert((new Fraction(1, -2) + new Fraction(1,-2)).toString === "2/-2")
  }
  
  it should "be negative even if denominator differs" in {
    assert((new Fraction(-1,2) + new Fraction(-1,3)).toString === "-5/6")
  }
  
  it should "be negative even if both differs" in {
    assert((new Fraction(-1,2) + new Fraction(-2,-1)).toString === "-3/-2")
  }
  
  "Sum of 1/2 with 1/2" should "
}
