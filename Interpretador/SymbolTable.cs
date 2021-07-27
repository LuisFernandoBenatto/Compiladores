using System.Collections.Generic;
namespace Interpretador
{
  public class SymbolTable
  {
    Dictionary<int, double> symbolTable = new Dictionary<int, double>(){};
    public double get(int key) {
      return symbolTable[key];
    }
    public void set(int key, double value) {
      symbolTable[key] = value;
    }
  }
}