class Fraction(val x1: Int, val x2: Int)
{
    def + (otherF:Fraction) = {
      if (x2 == otherF.x2) {
        new Fraction(x1 + otherF.x1, x2)
      } else {
    	  new Fraction(x1*otherF.x2 + x2*otherF.x1, x2*otherF.x2)
      }
    }
    
    def unary_- = new Fraction(-x1, x2)
    
    
    def -(otherF:Fraction) = {
      this + -otherF      
//      if (x2 == otherF.x2) {
//        new Fraction(x1 - otherF.x1, x2)
//      } else{
//        new Fraction(x1*otherF.x2 - x2*otherF.x1, x2*otherF.x2)
//      }
    }
    
    def * (otherF:Fraction) ={
      new Fraction(x1*otherF.x1, x2*otherF.x2)
    }
    
    def simplify() : Fraction = {
      def mdc(a:Int, b:Int) : Int = {
        if (b == 0) a 
        else mdc (b, a%b)
      }
      
      new Fraction(x1/mdc(x1, x2), x2/mdc(x1,x2))
      
    }
    
    override def toString() = {
      val temp : Fraction = new Fraction(x1,x2).simplify()
      if (temp.x2 == 1){
        temp.x1.toString()
      } else      
        temp.x1 + "/" + temp.x2
    }
} 