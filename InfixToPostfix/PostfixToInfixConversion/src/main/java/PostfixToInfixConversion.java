import java.util.Scanner;  
import java.util.Stack;  

public class PostfixToInfixConversion {      
    private boolean isOperator(char ch) {  
        if (ch == '+' || ch == '-' || ch == '*' || ch == '/' || ch == '^') return true;  
        return false;  
    }  
    
    public String convertPostfixToInfix(String postfixstring) {     
        Stack<String> s = new Stack<>();  
        for (int i = 0; i < postfixstring.length(); i++) {    
            char ch = postfixstring.charAt(i);  
            if (isOperator(ch)) {  
                String b = s.pop();  
                String a = s.pop();  
                s.push("(" + a + ch + b + ")");  
            } else  
                s.push("" + ch);  
        }  
        return s.pop();  
    }  
    
    public static void main(String args[]) {   
        PostfixToInfixConversion obj = new PostfixToInfixConversion(); 
        System.out.println("Insira a expressão postfix que deseja converter: ");
        Scanner sc = new Scanner(System.in); 
        String postfixstring = sc.next(); 
        System.out.println("Expressão Infix para a expressão "
                         + "Postfix fornecida é: " +
                                      obj.convertPostfixToInfix(postfixstring));  
    }  
}
