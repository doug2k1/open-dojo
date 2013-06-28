class Fraction(val x1: Int, val x2: Int)
{
    def + (otherF:Fraction) = {
      if (x2 == otherF.x2) {
        new Fraction(x1 + otherF.x1, x2)
      } else {
    	  new Fraction(x1*otherF.x2 + x2*otherF.x1, x2*otherF.x2)
      }
    }
    
    def simplified() : Fraction = {
      if(x1 == x2) {
        return new Fraction(1,1)
      }
     
      
      if(x1 % x2 == 0) {
    	  return new Fraction(1, x2/x1)
      } 
      
      this
          
      
    }
    override def toString() = {
      x1 + "/" + x2
    }
} 