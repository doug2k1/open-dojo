class Fraction(val x1: Int, val x2: Int)
{
    def + (otherF:Fraction) = {
      new Fraction(x1+otherF.x1, x2)
    }
    
    def simplified() : Fraction = {
      if(x1 == x2) {
        return new Fraction(1,1)
      }
      this
      
      if(x1 % x2 == 0) {
       
        
      }  
        val result =
        return new   
      }
    }
    override def toString() = {
      x1 + "/" + x2
    }
} 