grammar SimpleGrammar;

prog    : (line EOL)+;

line    : atrib
        | print
        ;

atrib   : VAR EQ expr
        ;

print   : PRINT expr
        | PRINT VAR
        ;

expr    returns [int value]
        : term ADD e1=expr              {$value = $term.value + $e1.value} 
        | term SUB e2=expr              {$value = $term.value - $e2.value}
        | term                          {$value = $term.value}
        ; 

term    returns [int value]
        : fact MUL t1=term              {$value = $fact.value * $t1.value}
        | fact DIV t2=term              {$value = $fact.value / $t2.value}
        | fact MOD t3=term              {$value = $fact.value % $t3.value}
        | fact                          {$value = $fact.value}
        ;

fact    returns [int value]
        : VAR                           //{$value = $VAR.text;}
        | NUM                           {$value *= Int32.Parse($NUM.text);}
        | OPEN expr CLOSE               {$value = $expr.value}
        ;

EQ              : '=';
EOL             : ';';
OPEN            : '(';
CLOSE           : ')';
MOD             : '%';
DIV             : '/';
MUL             : '*';
SUB             : '-';
ADD             : '+';
NUM             : [0-9]+;
PRINT           : 'print';
VAR             : [a-zA-Z]+;
COMMENTS        : '#'[~\r\n]+ -> skip;
WS              : [ \t\r\n]+ -> skip; 