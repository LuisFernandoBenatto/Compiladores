// Generated from SimpleGrammar.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SimpleGrammarListener from './SimpleGrammarListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u000e(\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0003\u0002\u0006",
    "\u0002\u000e\n\u0002\r\u0002\u000e\u0002\u000f\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0017\n\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u001e",
    "\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u0005&\n\u0005\u0003\u0005\u0002\u0002\u0006\u0002",
    "\u0004\u0006\b\u0002\u0004\u0003\u0002\t\n\u0003\u0002\u0006\b\u0002",
    "(\u0002\r\u0003\u0002\u0002\u0002\u0004\u0016\u0003\u0002\u0002\u0002",
    "\u0006\u001d\u0003\u0002\u0002\u0002\b%\u0003\u0002\u0002\u0002\n\u000b",
    "\u0005\u0004\u0003\u0002\u000b\f\u0007\u0003\u0002\u0002\f\u000e\u0003",
    "\u0002\u0002\u0002\r\n\u0003\u0002\u0002\u0002\u000e\u000f\u0003\u0002",
    "\u0002\u0002\u000f\r\u0003\u0002\u0002\u0002\u000f\u0010\u0003\u0002",
    "\u0002\u0002\u0010\u0003\u0003\u0002\u0002\u0002\u0011\u0012\u0005\u0006",
    "\u0004\u0002\u0012\u0013\t\u0002\u0002\u0002\u0013\u0014\u0005\u0004",
    "\u0003\u0002\u0014\u0017\u0003\u0002\u0002\u0002\u0015\u0017\u0005\u0006",
    "\u0004\u0002\u0016\u0011\u0003\u0002\u0002\u0002\u0016\u0015\u0003\u0002",
    "\u0002\u0002\u0017\u0005\u0003\u0002\u0002\u0002\u0018\u0019\u0005\b",
    "\u0005\u0002\u0019\u001a\t\u0003\u0002\u0002\u001a\u001b\u0005\u0006",
    "\u0004\u0002\u001b\u001e\u0003\u0002\u0002\u0002\u001c\u001e\u0005\b",
    "\u0005\u0002\u001d\u0018\u0003\u0002\u0002\u0002\u001d\u001c\u0003\u0002",
    "\u0002\u0002\u001e\u0007\u0003\u0002\u0002\u0002\u001f&\u0007\f\u0002",
    "\u0002 &\u0007\u000b\u0002\u0002!\"\u0007\u0004\u0002\u0002\"#\u0005",
    "\u0004\u0003\u0002#$\u0007\u0005\u0002\u0002$&\u0003\u0002\u0002\u0002",
    "%\u001f\u0003\u0002\u0002\u0002% \u0003\u0002\u0002\u0002%!\u0003\u0002",
    "\u0002\u0002&\t\u0003\u0002\u0002\u0002\u0006\u000f\u0016\u001d%"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class SimpleGrammarParser extends antlr4.Parser {

    static grammarFileName = "SimpleGrammar.g4";
    static literalNames = [ null, "';'", "'('", "')'", "'%'", "'/'", "'*'", 
                            "'-'", "'+'" ];
    static symbolicNames = [ null, "EOL", "OPEN", "CLOSE", "MOD", "DIV", 
                             "MUL", "SUB", "ADD", "NUM", "VAR", "COMMENTS", 
                             "WS" ];
    static ruleNames = [ "prog", "expr", "term", "fact" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SimpleGrammarParser.ruleNames;
        this.literalNames = SimpleGrammarParser.literalNames;
        this.symbolicNames = SimpleGrammarParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SimpleGrammarParser.RULE_prog);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 8;
	            this.expr();
	            this.state = 9;
	            this.match(SimpleGrammarParser.EOL);
	            this.state = 13; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SimpleGrammarParser.OPEN) | (1 << SimpleGrammarParser.NUM) | (1 << SimpleGrammarParser.VAR))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SimpleGrammarParser.RULE_expr);
	    var _la = 0; // Token type
	    try {
	        this.state = 20;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 15;
	            this.term();
	            this.state = 16;
	            _la = this._input.LA(1);
	            if(!(_la===SimpleGrammarParser.SUB || _la===SimpleGrammarParser.ADD)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 17;
	            this.expr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 19;
	            this.term();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SimpleGrammarParser.RULE_term);
	    var _la = 0; // Token type
	    try {
	        this.state = 27;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 22;
	            this.fact();
	            this.state = 23;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SimpleGrammarParser.MOD) | (1 << SimpleGrammarParser.DIV) | (1 << SimpleGrammarParser.MUL))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 24;
	            this.term();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 26;
	            this.fact();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fact() {
	    let localctx = new FactContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SimpleGrammarParser.RULE_fact);
	    try {
	        this.state = 35;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SimpleGrammarParser.VAR:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 29;
	            this.match(SimpleGrammarParser.VAR);
	            break;
	        case SimpleGrammarParser.NUM:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 30;
	            this.match(SimpleGrammarParser.NUM);
	            break;
	        case SimpleGrammarParser.OPEN:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 31;
	            this.match(SimpleGrammarParser.OPEN);
	            this.state = 32;
	            this.expr();
	            this.state = 33;
	            this.match(SimpleGrammarParser.CLOSE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SimpleGrammarParser.EOF = antlr4.Token.EOF;
SimpleGrammarParser.EOL = 1;
SimpleGrammarParser.OPEN = 2;
SimpleGrammarParser.CLOSE = 3;
SimpleGrammarParser.MOD = 4;
SimpleGrammarParser.DIV = 5;
SimpleGrammarParser.MUL = 6;
SimpleGrammarParser.SUB = 7;
SimpleGrammarParser.ADD = 8;
SimpleGrammarParser.NUM = 9;
SimpleGrammarParser.VAR = 10;
SimpleGrammarParser.COMMENTS = 11;
SimpleGrammarParser.WS = 12;

SimpleGrammarParser.RULE_prog = 0;
SimpleGrammarParser.RULE_expr = 1;
SimpleGrammarParser.RULE_term = 2;
SimpleGrammarParser.RULE_fact = 3;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleGrammarParser.RULE_prog;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	EOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SimpleGrammarParser.EOL);
	    } else {
	        return this.getToken(SimpleGrammarParser.EOL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SimpleGrammarListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleGrammarListener ) {
	        listener.exitProg(this);
		}
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleGrammarParser.RULE_expr;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	ADD() {
	    return this.getToken(SimpleGrammarParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(SimpleGrammarParser.SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleGrammarListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleGrammarListener ) {
	        listener.exitExpr(this);
		}
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleGrammarParser.RULE_term;
    }

	fact() {
	    return this.getTypedRuleContext(FactContext,0);
	};

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	MUL() {
	    return this.getToken(SimpleGrammarParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(SimpleGrammarParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(SimpleGrammarParser.MOD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleGrammarListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleGrammarListener ) {
	        listener.exitTerm(this);
		}
	}


}



class FactContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleGrammarParser.RULE_fact;
    }

	VAR() {
	    return this.getToken(SimpleGrammarParser.VAR, 0);
	};

	NUM() {
	    return this.getToken(SimpleGrammarParser.NUM, 0);
	};

	OPEN() {
	    return this.getToken(SimpleGrammarParser.OPEN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	CLOSE() {
	    return this.getToken(SimpleGrammarParser.CLOSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleGrammarListener ) {
	        listener.enterFact(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleGrammarListener ) {
	        listener.exitFact(this);
		}
	}


}




SimpleGrammarParser.ProgContext = ProgContext; 
SimpleGrammarParser.ExprContext = ExprContext; 
SimpleGrammarParser.TermContext = TermContext; 
SimpleGrammarParser.FactContext = FactContext; 
