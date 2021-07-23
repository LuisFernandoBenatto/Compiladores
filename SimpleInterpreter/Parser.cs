using System;
namespace SimpleInterpreter
{/*
  enum EOL {};
  enum EOF {};

  public class Parser
  {
    public string output { get; private set; }
    private Lexer lexer;
    private Token lookahead;
    public Parser(Lexer _lexer)
    {
      lexer = _lexer;
      lookahead = lexer.NextToken();
    }
    public void Prog() 
    {  //prog ::= stmt EOL lines
        Stmt();
        Match(EOL);
        Lines();
    }
    void Lines() 
    { //lines::= prog | ε
      if (lookahead != EOF)
        Prog();
    }
    void Stmt()
    { //  stmt ::= atr | imp
      if (lookahead == VAR)
        Atr();
      else if (lookahead == PRINT)
        Imp();
      else 
        throw new System.Exception("\n*** Syntax Error! Values do not match. *** \n");
        // Syntax_error("esperava VAR ou PRINT");
    }
    public void Atr() 
    { // atr  ::= VAR EQ expr
      int ref = lookahead.value;
      Match(VAR);
      Match(EQ);
      double expr = Expr();
      setValue(symbol_table, ref, expr);
    }
    public void Print() 
    {// imp  ::= PRINT OPEN VAR CLOSE
      Match(PRINT);
      Match(OPEN);
      int ref = lookahead.value;
      Match(VAR);
      Match(CLOSE);
      double value = getValue(symbol_table, ref);
      Console.WriteLine("%d\n", value);;
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
    double Term() 
    { //term ::= OPEN expr CLOSE | NUM | VAR
      if (lookahead == OPEN)
        return Expr();
      if (lookahead == NUM){
        double v = lookahead.value;
        Match(NUM);
        return v;
      }
      if (lookahead == VAR){
        int ref = lookahead.value;
        Match(VAR);
        return getValue(symbol_table, ref);
      }
        throw new System.Exception("\n*** Syntax Error! Values do not match. *** \n");
    }
    private void Match(Token token)
    {
      if (lookahead.Type == token.Type && lookahead.Value == token.Value)
      {
        lookahead = lexer.NextToken();
      } else {
         throw new System.Exception("\n*** Syntax Error! Values do not match. *** \n");
      }
    }
  }
*/}