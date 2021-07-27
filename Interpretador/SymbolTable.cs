namespace Interpretador
{
  public class SymbolTable
  {
    var symbol_table;

    public void set(var key, var value) {
      symbol_table[key] = value;
    }
    public string get(var key) {
      return symbol_table[key];
    }
  }
}