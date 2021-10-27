# Introdução ao ANTLR

**O que é um gerador de analisadores (léxicos|sintáticos)**

fonte -> [Compilador] -> binário

[(lexer) - (parser) - (semantic/translators)] - (IR) - [Optimizers/Generators]

lexer/parser - problemas comuns / complexos
parser (ll(1) / ll(k) / lr / slr)

grammar -> [parser/lexer generator] - code(parser/lexer)

LEX+YACC

ANTLR

**O que é?**

Um gerador de analisadores léxicos e sintáticos de alto nível. Atualmente é uma ferramenta amplamente utilizada para a construção de linguagens, ferramentas ou frameworks. A partir de uma gramática, o ANTLR é capaz de gerar um analisador sintático completo além de fornecer suporte na construção de árvores de derivação e representações intermediárias.

---
## Pré requisitos

* Antlr (https://www.antlr.org/download.html)
 https://www.antlr.org/download/antlr-4.9.2-complete.jar

* Java (https://developers.redhat.com/products/openjdk/download)

(JRE) - https://developers.redhat.com/content-gateway/file/java-11-openjdk-jre-11.0.12.7-1.windows.redhat.x86_64.msi

(JDK) - https://developers.redhat.com/content-gateway/file/java-11-openjdk-11.0.12.7-1.windows.redhat.x86_64.msi

* .Net SDK (https://dotnet.microsoft.com/download)

https://dotnet.microsoft.com/download/dotnet/thank-you/sdk-5.0.402-windows-x64-installer

* Visual Studio Code (https://code.visualstudio.com)

https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user

https://marketplace.visualstudio.com/items?itemName=mike-lischke.vscode-antlr4

## Configuração

https://gist.github.com/wellingtondellamura/518329d56cb46f6ada229ada9ddb9238