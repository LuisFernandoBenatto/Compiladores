using System;
namespace Interpretador
{
    class Interpretador
    {
        static void Main(string[] args)
        {
            // Console.WriteLine("Hello World!");
            var strProgram = "$x = 2 + 2;" + '\n' +
                             "$y = 2 / 10;" + '\n' +
                             "$z = $x + $y;" + '\n' +
                             "print($z);";

            var lexer = new Lexer(strProgram);
            var parser = new Parser(lexer);
            try 
            {
                var res = parser.Expr();
                Console.WriteLine(parser.Output);
                Console.WriteLine(res);
            } 
            catch (Exception e) 
            {
                 Console.WriteLine("Error: "+ e.Message);
            }
        }
        private static void TestLexer(Lexer lexer)
        {
            while (lexer.HasInput)
            {
                var token = lexer.NextToken();
                Console.WriteLine("<"+token.Type+ (token.HasValue?","+token.Attribute.Value:"")+">");
            }
        }
    }
}
