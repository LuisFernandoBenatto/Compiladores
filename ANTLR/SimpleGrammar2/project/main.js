import antlr4 from 'antlr4';
import SimpleGrammarLexer from './Grammar/SimpleGrammarLexer';
import SimpleGrammarParser from './Grammar/SimpleGrammarParser.js';
import SimpleGrammarListener from './Grammar/SimpleGrammarListener.js';

// const input = fetch('input.txt').then(response => response.text());

class MyErrorListener{
    constructor(ErrorListener){
        this.ErrorListener = ErrorListener;
    }
    syntaxError(offendingSymbol, line, column, e){
        console.log(`ERRO!!! O erro está na linha ${line}:${column}. Simbolo não apropriado: ${offendingSymbol.text}`);
    }
}

class MyGrammarListener {
    constructor (SimpleGrammarListener) {
        this.SimpleGrammarListener = SimpleGrammarListener;
    }
    enterFact(ctx = SimpleGrammarParser.FactContext){
        console.log('In fact');

    }
    exitFact(ctx = SimpleGrammarParser.FactContext){
        console.log('Out fact')
    }
}

const input = "22+27;";
const chars = new antlr4.InputStream(input);
const lexer = new SimpleGrammarLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new SimpleGrammarParser(tokens);
parser.buildParseTrees = true;
const tree = parser.MyStartRule();