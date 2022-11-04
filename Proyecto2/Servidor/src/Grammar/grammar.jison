%{
  //Declarciones y tambien las importaciones
    const {Declaracion} = require('../Instrucciones/Declaracion.ts');
    const {Impresion} = require('../Instrucciones/Imprimir.ts');
    const {Bloque} = require('../Instrucciones/bloque.ts');
    const {Comentario} = require('../Instrucciones/Comentario.ts');
    const {Casteo} = require('../Instrucciones/Casteo.ts');
    const {Asignacion} = require('../Instrucciones/Asignacion.ts');
    const {Incremento} = require('../Instrucciones/Incremento.ts');
    const {Vector_1D_T1} = require('../Instrucciones/Vector_1D_T1.ts');
    const {Vector_1D_T2} = require('../Instrucciones/Vector_1D_T2.ts');
    const {Vector_2D_T1} = require('../Instrucciones/Vector_2D_T1.ts');
    const {Vector_2D_T2} = require('../Instrucciones/Vector_2D_T2.ts');
    const {Acceso_Vector_1D} = require('../Instrucciones/Acceso_Vector_1D.ts');
    const {Acceso_Vector_2D} = require('../Instrucciones/Acceso_Vector_2D.ts');
    const {IF} = require('../Instrucciones/IF.ts');
    const {IF_ELIF} = require('../Instrucciones/IF_ELIF.ts');
    const {IF_ELSE} = require('../Instrucciones/IF_ELSE.ts');
    const {CONDICION} = require('../Instrucciones/CONDICION.ts');
    const {Switch} = require('../Instrucciones/Switch.ts');
    const {Case} = require('../Instrucciones/Case.ts');
    const {Default} = require('../Instrucciones/Default.ts');
    const {While} = require('../Instrucciones/While.ts');
    const {For} = require('../Instrucciones/For.ts');
    const {Do_While} = require('../Instrucciones/Do_While.ts');
    const {Do_Until} = require('../Instrucciones/Do_Until.ts');
    const {Break} = require('../Instrucciones/Break.ts');
    const {Continue} = require('../Instrucciones/Continue.ts');
    const {Return} = require('../Instrucciones/Return.ts');
    const {Funcion} = require('../Instrucciones/Funcion.ts');
    const {Parametro} = require('../Instrucciones/Parametro.ts');
    const {Metodo} = require('../Instrucciones/Metodo.ts');
    const {Llamada} = require('../Instrucciones/Llamada.ts');
    const {ToLower} = require('../Instrucciones/ToLower.ts');
    const {ToUpper} = require('../Instrucciones/ToUpper.ts');
    const {Length} = require('../Instrucciones/Length.ts');
    const {TypeOf} = require('../Instrucciones/TypeOf.ts');
    const {ToString} = require('../Instrucciones/ToString.ts');
    const {ToCharArray} = require('../Instrucciones/ToCharArray.ts');
    const {Round} = require('../Instrucciones/Round.ts');
    const {Push} = require('../Instrucciones/Push.ts');
    const {Pop} = require('../Instrucciones/Pop.ts');
    const {Run} = require('../Instrucciones/Run.ts');
    const {Ternario} = require('../Instrucciones/Ternario.ts');
    const {AST} = require('../AST/AST.ts');
    const {Potencia} = require('../Instrucciones/Expresion/Potencia.ts');
    const {Multiplicacion} = require('../Instrucciones/Expresion/Multiplicacion.ts');
    const {Division} = require('../Instrucciones/Expresion/Division.ts');
    const {Modulo} = require('../Instrucciones/Expresion/Modulo.ts');
    const {Resta} = require('../Instrucciones/Expresion/Resta.ts');
    const {Suma} = require('../Instrucciones/Expresion/Suma.ts');
    const {Variable} = require('../Instrucciones/Variable.ts');
    const {Singleton} = require('../Singleton/Singleton.ts');
    const {error} = require("../tool/error.ts");
%}

%lex
%options case-insensitive

decimal  [0-9]+[.][0-9]+
number  [0-9]+  
id  [a-z]+      
cadena   [\"][^\"]*[\"]|[\'][^\']*[\']
bool    "true"|"false"    


%%

\s+                   /* skip whitespace */
"//".*                              // comentario simple línea
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/] // comentario multiple líneas


{decimal}              return 'expreDECIMAL'
{number}               return 'expreNUMBER' 
{cadena}               return 'expreCADENA' 
{bool}                 return 'expreBOOL'





"String"   return 'pr_string'
"Int"   return 'pr_int'
"Char"   return 'pr_char'
"Double"   return 'pr_double'
"Boolean"   return 'pr_bool'
"print"   return 'pr_print'
"println"   return 'pr_println'
"new"   return 'pr_new'
"if"   return 'pr_if'
"else"   return 'pr_else'
"elif"   return 'pr_elif'
'Case'   return 'pr_case'
'break'   return 'pr_break'
'default'   return 'pr_default'
'switch'   return 'pr_switch'
'break'   return 'pr_break'
'while'   return 'pr_while'
'for'   return 'pr_for'
'do'   return 'pr_do'
'until'   return 'pr_until'
'continue'   return 'pr_continue'
'return'   return 'pr_return'
'void'   return 'pr_void'
'ToLower'   return 'pr_tolower'
'ToUpper'   return 'pr_toupper'
'Length'   return 'pr_length'
'TypeOf'   return 'pr_typeof'
'ToString'   return 'pr_tostring'
'ToCharArray'   return 'pr_tochararray'
'Round'   return 'pr_round'
'Push'   return 'pr_push'
'Pop'   return 'pr_pop'
'Run'   return 'pr_run'



";"  return ';'
":"  return ':'
")"  return ')'
"("  return '('
"}"  return '}'
"{"  return '{'
","  return ','
"++"  return '++'
"--"  return '--'
"+"  return '+'
"<=" return '<='
">=" return '>='
"<"  return '<'
">"  return '>'
"=="  return '=='
"!="  return '!='
"&&"  return '&&'
"||"  return '||'
"="  return '='
"-"  return '-'


"!"  return '!'
"["  return '['
"]"  return ']'
"*"  return '*'
"/"  return '/'
"%"  return '%'
'^'  return '^'
'.'  return '.'
'?'  return '?'

([a-zA-Z_])[a-zA-Z0-9_ñÑ]*	return 'expreID';

<<EOF>>		            return 'EOF'


.   {   
        console.log("error lexico")
        let s = Singleton.getInstance();
        s.add_error(new error('Lexico', 'Caracter no reconocido', yylineno + 1, yylloc.first_column + 1, yytext));
        
    }


/lex

%left '+' '-'
%left '*' '/'
%left '**' '%' '^'

%start INIT

%%


INIT :  LISTAINSTRUCCIONES  EOF  {
    $$ = new AST($1);
    console.log($$);
    $$.graphAST();
}
;


LISTAINSTRUCCIONES: LISTAINSTRUCCIONES INSTRUCCION { $1.push($2);  $$= $1;  }
                  |  INSTRUCCION {$$=[$1]}  
;


INSTRUCCION :
    IMPRESION {$$=$1;}
    |CASTEO{$$=$1;}
    |ASIGNACION{$$=$1;}
    |INCREMENTO{$$=$1;}
    |VECTOR_1D_T1{$$=$1;}
    |VECTOR_1D_T2{$$=$1;}
    |VECTOR_2D_T1{$$=$1;}
    |VECTOR_2D_T2{$$=$1;}
    |IF{$$=$1;}
    |SWITCH{$$=$1;}
    |WHILE{$$=$1;}
    |FOR{$$=$1;}
    |DO_WHILE{$$=$1;}
    |DO_UNTIL{$$=$1;}
    |BREAK{$$=$1;}
    |FUNCION{$$=$1;}
    |CONTINUE{$$=$1;}
    |RETURN{$$=$1;}
    |METODO{$$=$1;}
    |LLAMADA ';'{$$=$1;}
    |RUN {$$=$1;}
    |PUSH {$$=$1;}
    |POP {$$=$1;}
    |TERNARIO ';' {$$=$1;}
    |DECLARACION {$$=$1;}
    |error {console.log($1); 
        let s = Singleton.getInstance();
        if($1 != null){
            s.add_error(new error('Sintactico', 'Error de sintaxis, se esperaba una instruccion', yylineno + 1, @1.first_column, $1));
        }else{
            s.add_error(new error('Sintactico', 'Error de sintaxis, se esperaba una instruccion', yylineno + 1, @1.first_column, 'EOF'));
        }
        console.log("error sintactico")
    }
;

BLOQUE: '{' LISTAINSTRUCCIONES '}' { $$= new Bloque($2,@1.first_line,@1.first_column);}
;        

DECLARACION: TIPOS  'expreID' ';' {
    
    $$= new Declaracion($2,$1,@1.first_line,@1.first_column);
}
;

IMPRESION: 'pr_print' '(' VALORES ')' ';' {
    console.log("impresion")
    $$= new Impresion("print",$3,@1.first_line,@1.first_column);
}
| 'pr_println' '(' VALORES ')' ';' {
    $$= new Impresion("println",$3,@1.first_line,@1.first_column);
}
;

E: 'expreCADENA' {$$=$1;}
    |'expreID' '(' ')' {$$=$1;}
;

TIPOS: 
    'pr_int' {$$=$1;}
    |'pr_char' {$$=$1;}
    |'pr_string' {$$=$1;}
    |'pr_bool' {$$=$1;}
    |'pr_double' {$$=$1;}
;

LISTA_EXPREID: LISTA_EXPREID ',' 'expreID' {$$=$1; $1.push(new Variable($3,@3.first_line,@3.first_column));}
    | 'expreID' {$$= [new Variable($1,@1.first_line,@1.first_column)];}
;

VALORES: 
    'expreBOOL' {$$=$1;}
    |EXPRESION {$$=$1;}
    |CASTEO {$$=$1;}
    |CONDICION {$$=$1;}
    |TERNARIO {$$=$1;}
    
;

VALORES2: 
    'expreBOOL' {$$=$1;}
    |EXPRESION {$$=$1;}
;

EXPRESION: EXPRESION OPERACION { $$=$1; $1.push($2);}
    |OPERACIONES {$$=$1;}
;

OPERACIONES: OPERACION {$$=$1;};


OPERACION: 'expreDECIMAL' {$$=$1;}
    |'expreNUMBER' {$$=$1;}
    |'expreID' {$$=$1;}
    |'expreCADENA' {$$=$1;}
    |TO_LOWER {$$=$1; }
    |TO_UPPER {$$=$1;}
    |LENGTH {$$=$1;}
    |TYPE_OF {$$=$1;}
    |ROUND {$$=$1;}
    |TO_STRING {$$=$1;}
    |TO_CHAR_ARRAY {$$=$1;}
    |LLAMADA {$$=$1;}
    |ACCESO_VECTOR_1D {$$=$1;}
    |ACCESO_VECTOR_2D {$$=$1;}
    |OPERACION '+' OPERACION {$$= new Suma($1,$3,@2.first_line,@2.first_column);}
    |OPERACION '-' OPERACION {$$= new Resta($1,$3,@2.first_line,@2.first_column);}
    |OPERACION '*' OPERACION {$$= new Multiplicacion($1,$3,@2.first_line,@2.first_column);}
    |OPERACION '/' OPERACION {$$= new Division($1,$3,@2.first_line,@2.first_column);}
    |OPERACION '%' OPERACION {$$= new Modulo($1,$3,@2.first_line,@2.first_column);}
    |OPERACION '^' OPERACION {$$= new Potencia($1,$3,@2.first_line,@2.first_column);}
    |'(' OPERACION ')' {$$= $2;}
    |OPERACION '++' {$$=$1 + '++';}
    |OPERACION '--' {$$=$1 + '--';}
    //Negativos
    |'-' OPERACION {$$='-' + $2;}

;

INCREMENTO: 'expreID' '++' ';' {$$= new Incremento($1,'++',@1.first_line,@1.first_column);}
    |'expreID' '--' ';' {$$= new Incremento($1,'--',@1.first_line,@1.first_column);}
    |'++' 'expreID' ';' {$$= new Incremento($2,'++',@1.first_line,@1.first_column);}
    |'--' 'expreID' ';' {$$= new Incremento($2,'--',@1.first_line,@1.first_column);}
;


CASTEO: '(' TIPOS ')' VALORES2 {
    $$= new Casteo(null,null,$2,$4,@1.first_line,@1.first_column);
    }
    ; 

ASIGNACION: TIPOS 'expreID' '=' VALORES ';' {
    $$= new Asignacion($1,$2,$4,@2.first_line,@2.first_column);
    }
    |'expreID' '=' VALORES ';' {
        $$= new Asignacion(null,$1,$3,@2.first_line,@2.first_column);
    }
    |ACCESO_VECTOR_1D '=' VALORES ';' {
        $$= new Asignacion(null,$1,$3,@2.first_line,@2.first_column);
    }
    |ACCESO_VECTOR_2D '=' VALORES ';' {
        $$= new Asignacion(null,$1,$3,@2.first_line,@2.first_column);
    }
    |TIPOS LISTA_EXPREID ';' {
        
        $$= new Declaracion($2,$1,@3.first_line,@3.first_column);
    }
    |TIPOS LISTA_EXPREID '=' VALORES ';' {
        $$= new Asignacion($1,$2,$4,@3.first_line,@3.first_column);
    }
    |LISTA_EXPREID '=' VALORES ';' {
        $$= new Asignacion(null,$1,$3,@2.first_line,@2.first_column);
    }
;

VECTOR_1D_T1: TIPOS '[' ']' 'expreID' '=' 'pr_new' TIPOS '[' VALORES ']' ';' {
    $$= new Vector_1D_T1($1,$4,$7,$9,@1.first_line,@1.first_column);
}
| TIPOS '[' ']' 'expreID' '=' TO_CHAR_ARRAY ';' {
    console.log($6);
    $$= new Vector_1D_T1($1,$4,null,$6.cadena,@1.first_line,@1.first_column);
}
;

VECTOR_1D_T2: TIPOS '[' ']' 'expreID' '=' '{' LISTA_VALORES_VECTORES '}' ';' {
    $$= new Vector_1D_T2($1,$4,$7,@1.first_line,@1.first_column);
}
;

LISTA_VALORES_VECTORES: LISTA_VALORES_VECTORES ',' VALORES {$$=$1; $1.push($3);}
    | VALORES {$$=[$1];}
;   

VECTOR_2D_T1: TIPOS '[' ']' '[' ']' 'expreID' '=' 'pr_new' TIPOS '[' VALORES ']' '[' VALORES ']' ';' {

    $$= new Vector_2D_T1($1,$6,$9,$11,$14,@1.first_line,@1.first_column);
}
;

VECTOR_2D_T2: TIPOS '[' ']' '[' ']' 'expreID' '=' '{' LISTA_VALORES_VECTORES_2D '}' ';' {
    $$= new Vector_2D_T2($1,$6,$9,@1.first_line,@1.first_column);
}
;

LISTA_VALORES_VECTORES_2D: LISTA_VALORES_VECTORES_2D ',' '{' LISTA_VALORES_VECTORES '}' {$$=$1; $1.push('{'+$4+'}');}
    | '{' LISTA_VALORES_VECTORES '}' {$$=['{'+$2+'}'];}
;

ACCESO_VECTOR_1D: 'expreID' '[' 'expreNUMBER' ']' {$$= new Acceso_Vector_1D($1,$3,@1.first_line,@1.first_column);
    }
;

ACCESO_VECTOR_2D: 'expreID' '[' 'expreNUMBER' ']' '[' 'expreNUMBER' ']' {$$= new Acceso_Vector_2D($1,$3,$6,@1.first_line,@1.first_column);}
;

IF: 'pr_if' '(' CONDICION ')' '{' LISTAINSTRUCCIONES '}' {
    $$= new IF($3,$6,null,@1.first_line,@1.first_column);
    }
    |'pr_if' '(' CONDICION ')' '{' LISTAINSTRUCCIONES '}' 'pr_else' '{' LISTAINSTRUCCIONES '}' {
        $$= new IF_ELSE($3,$6,null,$10,@1.first_line,@1.first_column);
    }
    |'pr_if' '(' CONDICION ')' '{' LISTAINSTRUCCIONES '}' LISTA_ELIF {
        $$= new IF($3,$6,$8,@1.first_line,@1.first_column);
    }
    |'pr_if' '(' CONDICION ')' '{' LISTAINSTRUCCIONES '}' LISTA_ELIF 'pr_else' '{' LISTAINSTRUCCIONES '}' {
        $$= new IF_ELSE($3,$6,$8,$11,@1.first_line,@1.first_column);
    }
;

LISTA_ELIF: LISTA_ELIF ELIF {$$=$1; $1.push($2); console.log($1);}
    | ELIF {$$=[$1]; ;}
;

ELIF: 'pr_elif' '(' CONDICION ')' '{' LISTAINSTRUCCIONES '}' {
    $$= new IF_ELIF($3,$6,null,@1.first_line,@1.first_column);
    }
    ;



CONDICION: VALORES CONDICIONAL VALORES  {
    $$= new CONDICION($1,$2,$3,@2.first_line,@2.first_column);
    }
    |CONDICION CONDICIONAL2 CONDICION {
        $$= new CONDICION($1,$2,$3,@2.first_line,@2.first_column);
    }
;

CONDICIONAL: '==' {$$=$1;}
    |'!=' {$$=$1;}
    |'>=' {$$=$1;}
    |'<=' {$$=$1;}
    |'>' {$$=$1;}
    |'<' {$$=$1;}
    
;

CONDICIONAL2: '&&' {$$=$1;}
    |'||' {$$=$1;}
;

SWITCH: 'pr_switch' '(' 'expreID' ')' '{' LISTA_CASES DEFAULT '}' {
    $$= new Switch($3,$6,$7,@1.first_line,@1.first_column);
    }
;

LISTA_CASES: LISTA_CASES CASE {
    $$=$1;
    $1.push($2);
    }
    | CASE {
        $$=[$1];
    }
;

CASE: 'pr_case' VALORES ':' LISTAINSTRUCCIONES 'pr_break' ';' {
    $$= new Case($2,$4,@1.first_line,@1.first_column);
    }
;

DEFAULT: 'pr_default' ':' LISTAINSTRUCCIONES 'pr_break' ';' {
    $$= new Default($3,@1.first_line,@1.first_column);
    }
;

WHILE: 'pr_while' '(' CONDICION ')' '{' LISTAINSTRUCCIONES '}' {
    $$= new While($3,$6,@1.first_line,@1.first_column);
    }
;

FOR: 'pr_for' '(' ASIGNACION CONDICION ';' ASIGNACION_FOR ')' '{' LISTAINSTRUCCIONES '}' {
    $$= new For($3,$4,$6,$9,@1.first_line,@1.first_column);
    console.log($$);
    }
;

ASIGNACION_FOR: 'expreID' '=' VALORES {
    $$= new Asignacion(null,$1,$3,@2.first_line,@2.first_column);
    }
    |INCREMENTO_FOR {
        $$=$1;
    }
    |LISTA_EXPREID '=' VALORES {
        $$= new Asignacion(null,$1,$3,@1.first_line,@1.first_column);
    }
;

INCREMENTO_FOR: 'expreID' '++' {
    $$= new Incremento($1,$2,@1.first_line,@1.first_column);
    }
    |'expreID' '--' {
        $$= new Incremento($1,$2,@1.first_line,@1.first_column);
    }
    |'++' 'expreID' {
        $$= new Incremento($2,$1,@1.first_line,@1.first_column);
    }
    |'--' 'expreID' {
        $$= new Incremento($2,$1,@1.first_line,@1.first_column);
    }
;

DO_WHILE: 'pr_do' '{' LISTAINSTRUCCIONES '}' 'pr_while' '(' CONDICION ')' ';' {
    $$= new Do_While($3,$7,@1.first_line,@1.first_column);
    console.log($$);
    }
;

DO_UNTIL: 'pr_do' '{' LISTAINSTRUCCIONES '}' 'pr_until' '(' CONDICION ')' ';' {
    $$= new Do_Until($3,$7,@1.first_line,@1.first_column);
    }
;

BREAK: 'pr_break' ';' {
    $$= new Break(@1.first_line,@1.first_column);
    }
;

CONTINUE: 'pr_continue' ';' {
    $$= new Continue(@1.first_line,@1.first_column);
    }
;

RETURN: 'pr_return' VALORES ';' {
    $$= new Return($2,@1.first_line,@1.first_column);
    }
    |'pr_return' ';' {
        $$= new Return(null,@1.first_line,@1.first_column);
    }
;

FUNCION: 'expreID' '(' LISTA_PARAMETROS ')' ':' TIPOS '{' LISTAINSTRUCCIONES '}' {
    $$= new Funcion($1,$3,$6,$8,@1.first_line,@1.first_column);
    
    }
    |'expreID' '(' ')' ':' TIPOS '{' LISTAINSTRUCCIONES '}' {
        $$= new Funcion($1,null,$5,$7,@1.first_line,@1.first_column);
        
    }
;

LISTA_PARAMETROS: LISTA_PARAMETROS ',' PARAMETRO {
    $$=$1;
    $1.push($3);
    }
    | PARAMETRO {
        $$=[$1];
    }
;

PARAMETRO: TIPOS 'expreID' {
    $$= new Parametro($1,$2,@1.first_line,@1.first_column);
    }
;

LISTA_INSTRUCCIONES_METODO: LISTA_INSTRUCCIONES_METODO INSTRUCCION_METODO {
    $$=$1;
    $1.push($2);
    }
    | INSTRUCCION_METODO {
        $$=[$1];
    }
;

INSTRUCCION_METODO :
    IMPRESION {$$=$1;}
    |CASTEO{$$=$1;}
    |ASIGNACION{$$=$1;}
    |INCREMENTO{$$=$1;}
    |VECTOR_1D_T1{$$=$1;}
    |VECTOR_1D_T2{$$=$1;}
    |VECTOR_2D_T1{$$=$1;}
    |VECTOR_2D_T2{$$=$1;}
    |IF{$$=$1; }
    |SWITCH{$$=$1;}
    |WHILE{$$=$1;}
    |FOR{$$=$1;}
    |DO_WHILE{$$=$1;}
    |DO_UNTIL{$$=$1;}
    |BREAK{$$=$1;}
    |FUNCION{$$=$1;}
    |CONTINUE{$$=$1;}
    |METODO{$$=$1;}
    |LLAMADA ';'{$$=$1;}
    |RUN{$$=$1;}
    |PUSH{$$=$1;}
    |POP{$$=$1;}
    |TERNARIO ';'{$$=$1;}
    |error {console.log($1); console.log("error sintactico");}
;

METODO: 'expreID' '(' LISTA_PARAMETROS ')' ':' 'pr_void' '{' LISTA_INSTRUCCIONES_METODO '}' {
    $$= new Metodo($1,$3,$8,"void",@1.first_line,@1.first_column);
    }
    |'expreID' '(' ')' ':' 'pr_void' '{' LISTA_INSTRUCCIONES_METODO '}' {
        $$= new Metodo($1,null,$7,"void",@1.first_line,@1.first_column);
    }
    |'expreID' '(' LISTA_PARAMETROS ')' '{' LISTA_INSTRUCCIONES_METODO '}' {
        $$= new Metodo($1,$3,$6,null,@1.first_line,@1.first_column);
    }
    |'expreID' '(' ')' '{' LISTA_INSTRUCCIONES_METODO '}' {
        $$= new Metodo($1,null,$5,null,@1.first_line,@1.first_column);
    }
;

LLAMADA: 'expreID' '(' LISTA_PARAMETROS_LLAMADA ')'  {
    $$= new Llamada($1,$3,@1.first_line,@1.first_column);
    }
    |'expreID' '(' ')'  {
        $$= new Llamada($1,null,@1.first_line,@1.first_column);
    }
;

LISTA_PARAMETROS_LLAMADA: LISTA_PARAMETROS_LLAMADA ',' VALORES {
    $$=$1;
    $1.push($3);
    }
    | VALORES {
        $$=[$1];
    }
;

TO_LOWER: 'pr_tolower' '(' VALORES ')' {
    $$= new ToLower($3,@1.first_line,@1.first_column);
    console.log($$);
    }
;

TO_UPPER: 'pr_toupper' '(' VALORES ')' {
    $$= new ToUpper($3,@1.first_line,@1.first_column);
    }
;

TO_STRING: 'pr_tostring' '(' VALORES ')' {
    $$= new ToString($3,@1.first_line,@1.first_column);
    }
;

LENGTH: 'pr_length' '(' EXPRESION ')' {
    $$= new Length($3,@1.first_line,@1.first_column);
    }
;

TYPE_OF: 'pr_typeof' '(' VALORES ')' {
    $$= new TypeOf($3,@1.first_line,@1.first_column);
    }
;

TO_CHAR_ARRAY: 'pr_tochararray' '(' 'expreCADENA' ')' {
    $$= new ToCharArray($3,@1.first_line,@1.first_column);
    
    }
;

PUSH: 'expreID' '.' 'pr_push' '(' VALORES ')' ';' {
    $$= new Push($1,$5,@1.first_line,@1.first_column);
    }
;

POP: 'expreID' '.' 'pr_pop' '(' ')' ';' {
    $$= new Pop($1,@1.first_line,@1.first_column);
    }
;

RUN: 'pr_run' 'expreID' '(' ')' ';' {
    $$= new Run($2,null,@1.first_line,@1.first_column);
    }
    |'pr_run' 'expreID' '(' LISTA_PARAMETROS_LLAMADA ')' ';' {
        $$= new Run($2,$4,@1.first_line,@1.first_column);
        
    }
;

ROUND: 'pr_round' '(' VALORES ')' {
    $$= new Round($3,@1.first_line,@1.first_column);
    }
;

TERNARIO:  CONDICION '?' VALORES ':' VALORES {
    $$= new Ternario( $1,$3,$5,@1.first_line,@1.first_column);
    }
    | '(' CONDICION ')' '?' VALORES ':' VALORES{
        $$= new Ternario($2,$5,$7,@1.first_line,@1.first_column);
    }
;