import org.scalatest.matchers.ShouldMatchers
import org.scalatest.FlatSpec

class Testing extends FlatSpec with ShouldMatchers{
  
  "Sum of two halves" should "be 2/2" in {
    val x1: Fraction = new Fraction(1,2)
    assert((x1 + x1).toString() === new Fraction(2,2).toString())
  }

  "Sum of two halves simplified" should "be 1/1" in {
    val x1: Fraction = new Fraction(1,2)
    assert((x1 + x1).simplify().toString() === new Fraction(1,1).simplify().toString())
  }
  
  "Sum of two halves 2/4 + 2/4" should "be 1" in {
    val x1:Fraction = new Fraction(2,4)
    assert((x1 + x1).toString() === "1")
  }
  
  "Sum 1/2 (-1)/2" should "be 0" in {
    val x1: Fraction = new Fraction(1,2)
    val x2: Fraction = new Fraction(-1,2)

    assert((x1 + x2).toString() === "0")
  }

  "Sum 1/2 1/3" should "be 5/6" in {
    val x1: Fraction = new Fraction(1,2)
    val x2: Fraction = new Fraction(1,3)
    
    assert((x1+x2).toString() === "5/6")
  }
  
  "Sum of two negatives" should "also be negative" in {
    assert((new Fraction(-1, 2) + new Fraction(-1, 2)).toString === "-1")
  }
  
  it should "be negative even in denominator" in {
    assert((new Fraction(1, -2) + new Fraction(1,-2)).toString === "-1")
  }
  
  it should "be negative even if denominator differs" in {
    assert((new Fraction(-1,2) + new Fraction(-1,3)).toString === "-5/6")
  }
  
  it should "be negative even if both differs" in {
    assert((new Fraction(-1,2) + new Fraction(-2,-1)).toString === "3/2")
  }
  
  "Sub 1/2 and 1/2" should "0" in {
    assert((new Fraction(1,2) - new Fraction(1,2)).toString === "0")
  }
  
  "Sub 3/4 - 2/4" should "1/4" in {
    assert((new Fraction(3,4) - new Fraction(2,4)).toString === "1/4")
  }
  
  "Sub 1/2 - 2/4" should "0" in {
    assert((new Fraction(1,2) - new Fraction(2,4)).toString === "0")
  }
  
  "2/4" should "be 1/2 simplified" in {
    assert((new Fraction(2, 4)).toString() === "1/2")
  }
  
  "Mul 1/2 * 1/2" should "be 1/4" in {
    assert((new Fraction(1,2) * new Fraction(1,2)).toString === "1/4")
  }
  
//  "Mul 1/2 * -1/2" should "be -1/4" in {
//    assert((new Fraction(1, 2) * new Fraction(-1, 2)).toString === "-1/4" )
//  }
}
