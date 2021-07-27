using System;
using System.Linq;
using System.Drawing;
using static System.Console;
using System.Collections.Generic;
namespace Interpretador
{
  public class Parser
  {
    public string Output { get; private set; }
    private Lexer _lexer;
    Dictionary<string, double> symbolTable = new Dictionary<string, double>();
    public Token lookahead;
    public Parser(Lexer lexer)
    {
      this._lexer = lexer;
      lookahead = this._lexer.NextToken();
    }
    public void Match(Token token)
    {
      if (this.lookahead.Type == token.Type && this.lookahead.Attribute == token.Attribute)
      {
        this.lookahead = this._lexer.NextToken();
      } 
      else 
      {
         throw new System.Exception("\n*** Syntax Error! Values do not match. *** \n");
      }
    }
    public double Term()
    { //term ::= OPEN expr CLOSE | NUM | VAR
      if (this.lookahead.Type == ETokenType.OPEN) 
      {
        this.Match(new Token(ETokenType.OPEN));
        var _expr = this.Expr();
        this.Match(new Token(ETokenType.CLOSE));
        return _expr;
      }
      else if (this.lookahead.Type == ETokenType.NUM)
      {
        var _value = this.lookahead.Attribute;
        this.Match(new Token(ETokenType.NUM, _value));
        return (double)_value;
      }
      else if (this.lookahead.Type == ETokenType.VAR)
      {
        var _key = this.lookahead.Name;
        Console.WriteLine("Console: " + _key);
        this.Match(new Token(ETokenType.VAR, _key));
        return symbolTable.Add(_key);
      }
      else 
      {
        throw new System.Exception("\n*** Syntax Error! '" + this.lookahead.Attribute + "' it's not a number. ***\n");
      }
    }
    public double Fact() 
    {// fact ::= term MULT fact | term DIV fact | term
      double _term = this.Term();
      Console.WriteLine("Console: " + _term);    
      if (this.lookahead.Type == ETokenType.MULT) {
        this.Match(new Token(ETokenType.MULT));
        double _fact1 = Fact();
        return _term * _fact1;
      } else if (this.lookahead.Type == ETokenType.DIV) {
        this.Match(new Token(ETokenType.DIV));
        double _fact1 = Fact();
        return _term / _fact1;
      } else {
        return _term;
      }
    } 
    public double Expr() 
    {//expr ::= fact SUM expr | fact SUB expr | fact 
      double _fact = this.Fact();  
      Console.WriteLine("Console: " + _fact);  
      if (this.lookahead.Type == ETokenType.SUM) {
        this.Match(new Token(ETokenType.SUM));
        double _expr1 = this.Expr();
        return _fact + _expr1;
      } else if (this.lookahead.Type == ETokenType.SUB) {
          this.Match(new Token(ETokenType.SUB));
          double _expr1 = this.Expr();
          return _fact - _expr1;
      } else {
        return _fact;
      }
    }
    public void Print() 
    {// imp  ::= PRINT OPEN VAR CLOSE
      this.Match(new Token(ETokenType.PRINT, 'p'));
      this.Match(new Token(ETokenType.OPEN));
      var _key = this.lookahead.Name;
      this.Match(new Token(ETokenType.VAR));
      this.Match(new Token(ETokenType.CLOSE));
      double _value = symbolTable.Add(_key);
      Console.WriteLine("Saída: " + _value);
    }
    public void Attr() 
    { // atr  ::= VAR EQ expr
      string _value = this.lookahead.Name;
      this.Match(new Token(ETokenType.VAR));
      this.Match(new Token(ETokenType.EQ));
      double _expr = this.Expr();
      symbolTable.Add(_value, _expr);
    }
    public void Stmt()
    { //  stmt ::= atr | imp
      if (this.lookahead.Type == ETokenType.VAR)
        this.Attr();
      else if (this.lookahead.Type == ETokenType.PRINT)
        this.Print();
      else 
        throw new System.Exception("\n*** esperava VAR ou PRINT *** \n");
    }
    public void Lines() 
    { //lines::= prog | ε
      if (this.lookahead.Type != ETokenType.EOF)
        this.Prog();
    }
    public void Prog() 
    {  //prog ::= stmt EOL lines
        this.Stmt();
        this.Match(new Token(ETokenType.EOL));
        this.Lines();
    }
  }
}