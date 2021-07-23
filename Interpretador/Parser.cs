using System;

namespace Interpretador
{
  public class Parser
  {
    public string Output { get; private set; }
    private Lexer _lexer;
    private Token lookahead;
    public Parser(Lexer lexer)
    {
      _lexer = lexer;
      lookahead = _lexer.NextToken();
    }
    public void Match(Token token)
    {
      if (lookahead.Type == token.Type && lookahead.Value == token.Value)
      {
        lookahead = lexer.NextToken();
      } 
      else 
      {
         throw new System.Exception("\n*** Syntax Error! Values do not match. *** \n");
      }
    }
    public Term()
    { //term ::= OPEN expr CLOSE | NUM | VAR
      if (lookahead == OPEN) 
      {
        return Expr();
      }
      if (lookahead == NUMBER)
      {
        double v = lookahead.value;
        Match(NUM);
        return v;
      }
      if (lookahead == VAR)
      {
        int referece = lookahead.value;
        Match(VAR);
        return getValue(symbol_table, referece);
      }
        throw new System.Exception("\n*** Syntax Error! '" + lookahead.value + "' it's not a number. ***\n");
    }
    public double Fact() 
    {// fact ::= term MULT fact | term DIV fact | term
      double term = Term();    
      if (lookahead == MULT) {
        Match(MULT);
        double fact1 = Fact();
        return term * fact1;
      } else if (lookahead == DIV) {
        Match(DIV);
        double fact1 = Fact();
        return term / fact1;
      } else {
        return term;
      }
    } 
    public double Expr() 
    {//expr ::= fact SUM expr | fact SUB expr | fact 
      double fact = Fact();    
      if (lookahead == SUM) {
        Match(SUM);
        double expr1 = Expr();
        return fact + expr1;
      } else if (lookahead == SUB) {
          Match(SUB);
          double expr1 = Expr();
          return fact - expr1;
      } else {
        return fact;
      }
    }
    public void Print() 
    {// imp  ::= PRINT OPEN VAR CLOSE
      Match(PRINT);
      Match(OPEN);
      int reference = lookahead.value;
      Match(VAR);
      Match(CLOSE);
      double value = getValue(symbol_table, reference);
      Console.WriteLine("%d\n", value);;
    }
    public void Atr() 
    { // atr  ::= VAR EQ expr
      int reference = lookahead.value;
      Match(VAR);
      Match(EQ);
      double expr = Expr();
      setValue(symbol_table, reference, expr);
    }
    public void Stmt()
    { //  stmt ::= atr | imp
      if (lookahead == VAR)
        Atr();
      else if (lookahead == PRINT)
        Imp();
      else 
        throw new System.Exception("\n*** esperava VAR ou PRINT *** \n");
    }
    public void Lines() 
    { //lines::= prog | ε
      if (lookahead != EOF)
        Prog();
    }
    public void Prog() 
    {  //prog ::= stmt EOL lines
        Stmt();
        Match(EOL);
        Lines();
    }
  }
  public enum ETokenType
  {
    NUMBER, VAR, SUM, SUB, MULT, DIV, OPEN, CLOSE, PRINT, EQ, EOF, INVALID, EOL
  }
}