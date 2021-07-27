using System;

namespace Interpretador
{
  public class Lexer
  {
    private string _spaces = " \n\t";
    public int Position { get; protected set; }
    public string Input { get; protected set; }
    public bool HasInput 
    { get
      {
        return !string.IsNullOrEmpty(Input) && Position < Input.Length;
      }
    }
    public Lexer(string input)
    {
      this.Input = input;
      Position = 0;
    }
    private char NextChar()
    {
      if (this.Position == this.Input.Length) 
      {
        return char.MinValue;
      }
      return this.Input[this.Position++];
    }
    public Token NextToken()
    {
      char peek;
      do
      {
        peek = NextChar();              
      } while (_spaces.Contains(peek));

      if (char.IsDigit(peek))
      {
        var v = "";
        do
        {
          v += peek;
          peek = NextChar();         
        } while (char.IsDigit(peek));
        if (peek != char.MinValue) 
        {
          Position--;
        }
        return new Token(ETokenType.NUM, int.Parse(v));
      }
      if (peek == '+')
      {
        return new Token(ETokenType.SUM);
      }
      else if (peek == '-')
      {
        return new Token(ETokenType.SUB);
      }
      else if (peek == char.MinValue)
      {
        return new Token(ETokenType.EOF);
      }

      return new Token(ETokenType.INVALID);
    }
  }  
  public class Token
  {
    public ETokenType Type {get;set;}
    public int? Attribute {get;set;}
    public bool HasValue 
    { get
      {
        return this.Attribute.HasValue;
      }
    }
    public Token(ETokenType type, int? value = null)
    {
      this.Type = type;
      this.Attribute = value;
    }
  }
  public enum ETokenType
  {
    NUM = 0,
    SUM = 1,
    SUB = 2,
    MULT = 3,
    DIV = 4,
    OPEN = 5,
    CLOSE = 6,
    VAR = 7,
    ATTR = 8,
    PRINT = 9,
    EQ = 10,
    EOL = 98,
    EOF = 99,
    INVALID = -1,
  }
}