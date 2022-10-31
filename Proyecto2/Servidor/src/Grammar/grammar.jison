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
%}

%lex
%options case-insensitive

decimal  [0-9]+.[0-9]+
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
"print"   return 'Systemoutprintln'
"new"   return 'pr_new'


";"  return ';'
")"  return ')'
"("  return '('
"}"  return '}'
"{"  return '{'
"="  return '='
","  return ','
"++"  return '++'
"--"  return '--'
"+"  return '+'
"-"  return '-'
"<"  return '<'
">"  return '>'
"=="  return '=='
"!="  return '!='
"&&"  return '&&'
"||"  return '||'
"!"  return '!'
"["  return '['
"]"  return ']'
"*"  return '*'
"/"  return '/'
"%"  return '%'
'^'  return '^'

([a-zA-Z_])[a-zA-Z0-9_ñÑ]*	return 'expreID';

<<EOF>>		            return 'EOF'


.   { 
        console.log("error lexico")
    }


/lex

%left '+' '-'
%left '*' '/'
%left '**' '%' '^'

%start INIT

%%


INIT :  LISTAINSTRUCCIONES  EOF  {return $1;}
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
    |error {console.log("error sintactico")}
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
    |'pr_bool' {$$=$1;}
    |'pr_double' {$$=$1;}
;

LISTA_EXPREID: LISTA_EXPREID ',' 'expreID' {$$=$1; $1.push($3);}
    | 'expreID' {$$=[$1];}
;

VALORES: 
    'expreCADENA' {$$=$1;}
    |'expreBOOL' {$$=$1;}
    |EXPRESION {$$=$1;}
    |CASTEO {$$='(' + $1.casteo + ') ' + $1.expresion;}
    |Acceso_Vector_1D {$$=$1.variable + $1.expresion;}
    |Acceso_Vector_2D {$$=$1.variable + $1.expresion;}
;

VALORES2: 
    'expreCADENA' {$$=$1;}
    |'expreBOOL' {$$=$1;}
    |EXPRESION {$$=$1;}
;

EXPRESION: EXPRESION OPERACION { $$=$1; $1.push($2);}
    |OPERACIONES {$$=$1;}
;

OPERACIONES: OPERACION {$$=$1;};

OPERACION: 'expreNUMBER' {$$=$1;}
    |'expreDECIMAL' {$$=$1;}
    |'expreID' {$$=$1;}
    |OPERACION '+' OPERACION {$$=$1 + '+' + $3;}
    |OPERACION '-' OPERACION {$$=$1 - $3;}
    |OPERACION '*' OPERACION {$$=$1 * $3;}
    |OPERACION '/' OPERACION {$$=$1 / $3;}
    |OPERACION '%' OPERACION {$$=$1 % $3;}
    |OPERACION '^' OPERACION {$$=$1 ^ $3;}
    |'(' OPERACION ')' {$$=$2;}
    |OPERACION '++' {$$=$1 + '++';}
    |OPERACION '--' {$$=$1 + '--';}

;

INCREMENTO: 'expreID' '++' ';' {$$= new Incremento($1,'++',@1.first_line,@1.first_column);}
    |'expreID' '--' ';' {$$= new Incremento($1,'--',@1.first_line,@1.first_column);}
;


CASTEO: '(' TIPOS ')' VALORES2 {
    $$= new Casteo(null,null,$2,$4,@1.first_line,@1.first_column);
    console.log($$);
    }
    ; 

ASIGNACION: TIPOS 'expreID' '=' VALORES ';' {
    $$= new Asignacion($1,$2,$4,@1.first_line,@1.first_column);
    }
    |'expreID' '=' VALORES ';' {
        $$= new Asignacion(null,$1,$3,@1.first_line,@1.first_column);
    }
    |TIPOS LISTA_EXPREID ';' {
        
        $$= new Declaracion($2,$1,@1.first_line,@1.first_column);
    }
    |TIPOS LISTA_EXPREID '=' VALORES ';' {
        
        $$= new Asignacion($1,$2,$4,@1.first_line,@1.first_column);

    }
;

VECTOR_1D_T1: TIPOS '[' ']' 'expreID' '=' 'pr_new' TIPOS '[' VALORES ']' ';' {
    $$= new Vector_1D_T1($1,$4,$7,$9,@1.first_line,@1.first_column);
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

ACCESO_VECTOR_1D: 'expreID' '[' 'expreNUMBER' ']' {$$= new Acceso_Vector_1D($1,$3,@1.first_line,@1.first_column);}
;

ACCESO_VECTOR_2D: 'expreID' '[' 'expreNUMBER' ']' '[' 'expreNUMBER' ']' {$$= new Acceso_Vector_2D($1,$3,$5,@1.first_line,@1.first_column);}
;