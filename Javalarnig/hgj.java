public class hgj {
    public static void main(String[] args) {
        int x = 19;
        int y = 9;
        //x=x + y+ 5*2;
        System.out.println(x >= y);
        System.out.println(x <= y);
        if(x >= y || x >10)
            {System.out.println( x + y);
            System.out.println("my name is smit");}

        // }
         else
            System.out.println("y is biger than x");
        
        System.out.println(x);
        System.out.println(y);

        System.out.println(++x);//Increment
        System.out.println(x % y);//Modulus
        System.out.println(--x);//Decrement
        System.out.println(x %= 3);//Assignment
        System.out.println( x &= 3);//Assignment
        System.out.println(x ^= 3);//Assignment
        System.out.println(x != y);//Not equal
        System.out.println(!(x > 3 && x < 10));//Logical not
  }
}