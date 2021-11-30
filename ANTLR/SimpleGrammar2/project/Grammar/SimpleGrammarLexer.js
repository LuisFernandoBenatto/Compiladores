// Generated from SimpleGrammar.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u000eD\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0006\n-",
    "\n\n\r\n\u000e\n.\u0003\u000b\u0006\u000b2\n\u000b\r\u000b\u000e\u000b",
    "3\u0003\f\u0003\f\u0006\f8\n\f\r\f\u000e\f9\u0003\f\u0003\f\u0003\r",
    "\u0006\r?\n\r\r\r\u000e\r@\u0003\r\u0003\r\u0002\u0002\u000e\u0003\u0003",
    "\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013",
    "\u000b\u0015\f\u0017\r\u0019\u000e\u0003\u0002\u0006\u0003\u00022;\u0004",
    "\u0002C\\c|\u0005\u0002\f\f\u000f\u000f\u0080\u0080\u0005\u0002\u000b",
    "\f\u000f\u000f\"\"\u0002G\u0002\u0003\u0003\u0002\u0002\u0002\u0002",
    "\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002",
    "\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002",
    "\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002",
    "\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002",
    "\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002",
    "\u0019\u0003\u0002\u0002\u0002\u0003\u001b\u0003\u0002\u0002\u0002\u0005",
    "\u001d\u0003\u0002\u0002\u0002\u0007\u001f\u0003\u0002\u0002\u0002\t",
    "!\u0003\u0002\u0002\u0002\u000b#\u0003\u0002\u0002\u0002\r%\u0003\u0002",
    "\u0002\u0002\u000f\'\u0003\u0002\u0002\u0002\u0011)\u0003\u0002\u0002",
    "\u0002\u0013,\u0003\u0002\u0002\u0002\u00151\u0003\u0002\u0002\u0002",
    "\u00175\u0003\u0002\u0002\u0002\u0019>\u0003\u0002\u0002\u0002\u001b",
    "\u001c\u0007=\u0002\u0002\u001c\u0004\u0003\u0002\u0002\u0002\u001d",
    "\u001e\u0007*\u0002\u0002\u001e\u0006\u0003\u0002\u0002\u0002\u001f",
    " \u0007+\u0002\u0002 \b\u0003\u0002\u0002\u0002!\"\u0007\'\u0002\u0002",
    "\"\n\u0003\u0002\u0002\u0002#$\u00071\u0002\u0002$\f\u0003\u0002\u0002",
    "\u0002%&\u0007,\u0002\u0002&\u000e\u0003\u0002\u0002\u0002\'(\u0007",
    "/\u0002\u0002(\u0010\u0003\u0002\u0002\u0002)*\u0007-\u0002\u0002*\u0012",
    "\u0003\u0002\u0002\u0002+-\t\u0002\u0002\u0002,+\u0003\u0002\u0002\u0002",
    "-.\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002./\u0003\u0002\u0002",
    "\u0002/\u0014\u0003\u0002\u0002\u000202\t\u0003\u0002\u000210\u0003",
    "\u0002\u0002\u000223\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u0002",
    "34\u0003\u0002\u0002\u00024\u0016\u0003\u0002\u0002\u000257\u0007%\u0002",
    "\u000268\t\u0004\u0002\u000276\u0003\u0002\u0002\u000289\u0003\u0002",
    "\u0002\u000297\u0003\u0002\u0002\u00029:\u0003\u0002\u0002\u0002:;\u0003",
    "\u0002\u0002\u0002;<\b\f\u0002\u0002<\u0018\u0003\u0002\u0002\u0002",
    "=?\t\u0005\u0002\u0002>=\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002",
    "\u0002@>\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002\u0002AB\u0003\u0002",
    "\u0002\u0002BC\b\r\u0002\u0002C\u001a\u0003\u0002\u0002\u0002\u0007",
    "\u0002.39@\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class SimpleGrammarLexer extends antlr4.Lexer {

    static grammarFileName = "SimpleGrammar.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "';'", "'('", "')'", "'%'", "'/'", "'*'", 
                         "'-'", "'+'" ];
	static symbolicNames = [ null, "EOL", "OPEN", "CLOSE", "MOD", "DIV", "MUL", 
                          "SUB", "ADD", "NUM", "VAR", "COMMENTS", "WS" ];
	static ruleNames = [ "EOL", "OPEN", "CLOSE", "MOD", "DIV", "MUL", "SUB", 
                      "ADD", "NUM", "VAR", "COMMENTS", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

SimpleGrammarLexer.EOF = antlr4.Token.EOF;
SimpleGrammarLexer.EOL = 1;
SimpleGrammarLexer.OPEN = 2;
SimpleGrammarLexer.CLOSE = 3;
SimpleGrammarLexer.MOD = 4;
SimpleGrammarLexer.DIV = 5;
SimpleGrammarLexer.MUL = 6;
SimpleGrammarLexer.SUB = 7;
SimpleGrammarLexer.ADD = 8;
SimpleGrammarLexer.NUM = 9;
SimpleGrammarLexer.VAR = 10;
SimpleGrammarLexer.COMMENTS = 11;
SimpleGrammarLexer.WS = 12;



