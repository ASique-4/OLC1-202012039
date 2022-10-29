%{
  //Declarciones y tambien las importaciones
  const {Declaracion} = require('../Instrucciones/Declaracion.ts');
  const {Impresion} = require('../Instrucciones/Imprimir.ts');
  const {Bloque} = require('../Instrucciones/bloque.ts');
%}

%lex
%options case-insensitive


number  [0-9]+  
id  [a-z]+      
cadena   "\""  [^\"]* "\""   
bool    "true"|"false"    

%%

\s+                   /* skip whitespace */
"//".*                              // comentario simple línea
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/] // comentario multiple líneas


{number}               return 'expreNUMBER' 
{cadena}               return 'expreCADENA' 
{bool}                 return 'expreBOOL'




"String"   return 'pr_string'
"Int"   return 'pr_int'
"Char"   return 'pr_char'
"print"   return 'Systemoutprintln'


";"  return ';'
")"  return ')'
"("  return '('
"}"  return '}'
"{"  return '{'

([a-zA-Z_])[a-zA-Z0-9_ñÑ]*	return 'expreID';

<<EOF>>		            return 'EOF'


.   { 
        console.log("error lexico")
    }


/lex


%start INIT

%%


INIT :  LISTAINSTRUCCIONES  EOF  {return $1;}
;


LISTAINSTRUCCIONES: LISTAINSTRUCCIONES INSTRUCCION { $1.push($2);  $$= $1;  }
                  |  INSTRUCCION {$$=[$1]}  
;


INSTRUCCION :
    DECLARACION {$$=$1;}
    |IMPRESION {$$=$1;}
    |BLOQUE{$$=$1;}
;

BLOQUE: '{' LISTAINSTRUCCIONES '}' { $$= new Bloque($2,@1.first_line,@1.first_column);}
;

DECLARACION: TIPOS  'expreID' ';' {
    $$= new Declaracion($2,$1,@1.first_line,@1.first_column);
}
;

IMPRESION: 'Systemoutprintln' '(' E ')' ';' { $$= new Impresion($3,@1.first_line,@1.first_column);}
;

E: 'expreCADENA' {$$=$1;}
    |'expreID' '(' ')' {$$=$1;}
;

TIPOS: 
    'pr_int' {$$=$1;}
    |'pr_char' {$$=$1;}
    |'pr_string' {$$=$1;}
;