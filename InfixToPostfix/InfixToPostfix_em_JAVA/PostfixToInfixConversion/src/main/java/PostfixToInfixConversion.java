import java.util.Scanner;  
import java.util.Stack;  

public class PostfixToInfixConversion {
    //user-defined function that checks the character is operator or not      
    private boolean isOperator(char ch) {  
        if (ch == '+' || ch == '-' || ch == '*' || ch == '/' || ch == '^')  
            //returns true if either of the operator is found  
            return true;  
            //else returns false  
        return false;  
    }  
    //user-defined function that performs conversion  
    public String convertPostfixToInfix(String postfixstring) {  
        //implementing stack      
        Stack<String> s = new Stack<>();  
        //iterates over the postfix expression  
        for (int i = 0; i < postfixstring.length(); i++) {  
            //reading a character at a time      
            char ch = postfixstring.charAt(i);  
            //inside the if-statement we have called the user-defined function that checks whether the character is operator or not  
            if (isOperator(ch)) {  
                String b = s.pop();  
                String a = s.pop();  
                //push the character (operator) into stack in between the string a and b  
                s.push("(" + a + ch + b + ")");  
            } else  
                //push character into the stack  
                s.push("" + ch);  
        }  
        //pop character from the stack and returns the same  
        return s.pop();  
    }  
    public static void main(String args[]) {  
        //creating object of the class  
        PostfixToInfixConversion obj = new PostfixToInfixConversion(); 
        System.out.print("Enter the postfix expression you want to convert: ");
        Scanner sc = new Scanner(System.in); 
        //reads a postfix expression from the user  
        String postfixstring = sc.next(); //for example ab+  
        //prints the infix expression  
        System.out.println("Infix expression for the given postfix expression is: " +
                                      obj.convertPostfixToInfix(postfixstring));  
    }  
}
