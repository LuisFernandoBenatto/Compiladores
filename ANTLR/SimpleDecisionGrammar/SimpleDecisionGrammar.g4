grammar SimpleDecisionGrammar;

expr_if             : IF OPEN_P NUM IS_GREATER_THAN NUM CLOSE_P OPEN_B VAR CLOSE_B expr_if 
                    | IF OPEN_P NUM IS_LESS_THAN NUM CLOSE_P OPEN_B VAR CLOSE_B expr_if
                    | expr_elseif;
expr_elseif         : ELSEIF OPEN_P NUM IS_GREATER_THAN NUM CLOSE_P OPEN_B VAR CLOSE_B expr_elseif 
                    | ELSEIF OPEN_P NUM IS_LESS_THAN NUM CLOSE_P OPEN_B VAR CLOSE_B expr_elseif
                    | expr_else;
expr_else           : ELSE OPEN_B VAR CLOSE_B
                    | ELSE OPEN_B NUM CLOSE_B;

IF              : 'if';
ELSEIF          : 'elseif';
ELSE            : 'else';
IS_GREATER_THAN : '>';
IS_LESS_THAN    : '<';
OPEN_B          : '{';
CLOSE_B         : '}'; 
OPEN_P          : '(';
CLOSE_P         : ')';
DIV             : '/';
MUL             : '*';
SUB             : '-';
ADD             : '+';
MOD             : '%';
EOL             : ';';
NUM             : [0-9]+;
VAR             : [a-zA-Z_]+;
COMMENTS        : '#'[~\r\n]+ -> skip;
WS              : [ \t\r\n]+ -> skip; 