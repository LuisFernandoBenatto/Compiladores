package toPostfix;

import java.util.Scanner;  

public class InfixToPostfix {
    public static void main(String[] args) {
        Scanner scanf = new Scanner(System.in);
        System.out.println("***INFIX TO POSTFIX***");
        int i = 0;
        while(i != 5) {
            System.out.println(i + " - " + " Coloque suas expressão infix: ");
            String inputString = scanf.next();
            System.out.println("A expressão Infix para espressão "
                         + "Postfix fornecida é: "
                         + toPostfix(inputString));  
            i++;
        }
    }
    
    public static String toPostfix(String infix) {  
        Stack operators = new Stack();  
        char symbol;  
        String postfix = " ";  
        for(int i = 0; i < infix.length(); i++) {
            symbol = infix.charAt(i);
            if(Character.isLetter(symbol)) {
                postfix = postfix + symbol;
            } else if(symbol == '(') {
                operators.push(symbol);
            } else if (symbol==')')  { 
                while (operators.peek() != '(') {  
                    postfix = postfix + operators.pop();  
                }  
                operators.pop();  
            } else { 
                while (!operators.isEmpty() && !(operators.peek()=='(') &&
                                     prec(symbol) <= prec(operators.peek()))  
                    postfix = postfix + operators.pop();  
                operators.push(symbol);  
            }  
        }  
        while (!operators.isEmpty()) {
            postfix = postfix + operators.pop(); 
        }          
        return postfix;
    }
    static int prec(char x) {  
        if (x == '+' || x == '-')  
            return 1;  
        if (x == '*' || x == '/' || x == '%')  
            return 2;  
        return 0;  
    }   
}
