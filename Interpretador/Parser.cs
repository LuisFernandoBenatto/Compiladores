using System;

namespace Interpretador
{
  public class Parser
  {
    public string Output { get; private set; }
    private Lexer _lexer;
    private SymbolTable symbol_table;
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
        this.Match(Lexer.Token(ETokenType.OPEN));
        var _expr = this.Expr();
        this.Match(Lexer.Token(ETokenType.CLOSE));
        return _expr;
      }
      else if (this.lookahead.Type == ETokenType.NUM)
      {
        var _value = this.lookahead.Attribute;
        this.Match(Lexer.Token(ETokenType.NUM, _value));
        return _value;
      }
      else if (this.lookahead.Type == ETokenType.VAR)
      {
        var _key = lookahead.Attribute;
        this.Match(Lexer.Token(ETokenType.VAR, _key));
        return symbol_table.get(_key);
      }
      else 
      {
        throw new System.Exception("\n*** Syntax Error! '" + this.lookahead.Attribute + "' it's not a number. ***\n");
      }
    }
    public double Fact() 
    {// fact ::= term MULT fact | term DIV fact | term
      double _term = this.Term();    
      if (this.lookahead.Type == ETokenType.MULT) {
        this.Match(this.lookahead.Token(ETokenType.MULT));
        double _fact1 = Fact();
        return _term * _fact1;
      } else if (this.lookahead.Type == ETokenType.DIV) {
        this.Match(this.lookahead.Token(ETokenType.DIV));
        double _fact1 = Fact();
        return _term / _fact1;
      } else {
        return _term;
      }
    } 
    public double Expr() 
    {//expr ::= fact SUM expr | fact SUB expr | fact 
      double _fact = this.Fact();    
      if (this.lookahead.Type == ETokenType.SUM) {
        this.Match(this.lookahead.Token(ETokenType.SUM));
        double _expr1 = this.Expr();
        return _fact + _expr1;
      } else if (this.lookahead.Type == ETokenType.SUB) {
          this.Match(this.lookahead.Token(ETokenType.SUB));
          double _expr1 = this.Expr();
          return _fact - _expr1;
      } else {
        return _fact;
      }
    }
    public void Print() 
    {// imp  ::= PRINT OPEN VAR CLOSE
      this.Match(this.lookahead.Token(ETokenType.PRINT, 'print'));
      this.Match(this.lookahead.Token(ETokenType.OPEN));
      var _key = this.lookahead.Attribute;
      this.Match(this.lookahead.Token(ETokenType.VAR));
      this.Match(this.lookahead.Token(ETokenType.CLOSE));
      double _value = getValue(symbol_table, _key);
      Console.WriteLine(_value);
    }
    public void Attr() 
    { // atr  ::= VAR EQ expr
      var _value = this.lookahead.Attribute;
      this.Match(this.lookahead.Token(ETokenType.VAR));
      this.Match(this.lookahead.Token(ETokenType.EQ));
      double _expr = this.Expr();
      setValue(symbol_table, value, _expr);
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
        this.Match(lookahead.Token(ETokenType.EOL));
        this.Lines();
    }
  }
}