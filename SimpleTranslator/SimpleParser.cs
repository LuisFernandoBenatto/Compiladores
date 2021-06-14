namespace SimpleTranslator
{
    public class SimpleParser
    {
        public string Output { get; private set; }
        private SimpleLexer _lexer;
        private Token _lookAhead;
        public SimpleParser(SimpleLexer lexer)
        {
            _lexer = lexer;
            _lookAhead = _lexer.NextToken();
        }

        private void Match(Token token)
        {
            if (_lookAhead.Type == token.Type && _lookAhead.Value == token.Value)
            {
                _lookAhead = _lexer.NextToken();
            }
            else
            {
                throw new System.Exception("\n*** Syntax Error! Values do not match. *** \n");
            }
        }

        public void Expr() //<expr> ::= <term> <rest>
        {
            Term();
            Rest();
        }

        public void Rest()
        {
            if (_lookAhead.Type == ETokenType.Sum) // + <term> <rest>
            {
                Match(_lookAhead);
                Term();
                Output += ("+ ");
                Rest();
            }
            else if (_lookAhead.Type == ETokenType.Sub) // - <term> <rest>
            {
                Match(_lookAhead);
                Term();
                Output += ("+ ");
                Rest();
            }
            else
            {
                if (_lookAhead.Type != ETokenType.EOF)
                    throw new System.Exception("\n*** Syntax Error! Unexpected symbol '" + _lookAhead.Value + "'. ***\n");
            }
        }

        public void Term() //<term> ::= NUMBER
        {
            if (_lookAhead.Type == ETokenType.Number)
            {
                Output += _lookAhead.Value + " ";
                Match(_lookAhead);
            }
            else
            {
                throw new System.Exception("\n*** Syntax Error! '" + _lookAhead.Value + "' it's not a number. ***\n");
            }
        }
    }
}