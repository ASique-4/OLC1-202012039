package analizadores;
import java_cup.runtime.*;
import proyecto1.Errors;
import java.util.ArrayList;


%%

%public 
%class Analizador_Lexico
%cupsym Simbolos
%cup
%char
%column
%full
%ignorecase
%line
%unicode

%{
  public ArrayList<Errors> errorsLex = new ArrayList<Errors>();
%}

num = [0-9]+
variable = _[a-zA-Z0-9]+_
cadena = [\'][^\'\n]*[\']|[\"][^\"\n]*[\"]
comentario = ([\/][\/])+(\s|\S)[^\n]*
comentarioVariasLineas = [\/][\*]+(((\s|\S)[^\*]*)|([\n]*)|([\*]*[^\/]))([\*]+[\/])
palabra = [a-zA-Z]+
caracter = [\'][\s|\S][\']|[\"][\s|\S][\"]
float = \d+[\.]\d+
ascii = [\']\$\{[\d]+}[\']|[\"]\$\{[\d]+}[\"]

%%


<YYINITIAL>{
    
  
    ";"           { System.out.println("Reconocio tpuntoycoma, lexema:"+yytext());
                    return new Symbol(Simbolos.tpuntoycoma, yycolumn, yyline, yytext());     }

    
    "-"           { System.out.println("Reconocio trest, lexema:"+yytext());
                    return new Symbol(Simbolos.trest, yycolumn, yyline, yytext());    }
    "¿"           { System.out.println("Reconocio tinterrogacioninicio, lexema:"+yytext());
                    return new Symbol(Simbolos.tinterrogacioninicio, yycolumn, yyline, yytext());    }
    "?"           { System.out.println("Reconocio tinterrogacionfin, lexema:"+yytext());
                    return new Symbol(Simbolos.tinterrogacionfin, yycolumn, yyline, yytext());    }
    ">"           { System.out.println("Reconocio tmayor, lexema:"+yytext());
                    return new Symbol(Simbolos.tmayor, yycolumn, yyline, yytext());    }
    ","          { System.out.println("Reconocio tcoma, lexema:"+yytext());
                    return new Symbol(Simbolos.tcoma, yycolumn, yyline, yytext());    }
    
    "+"           { System.out.println("Reconocio tsum, lexema:"+yytext());
                    return new Symbol(Simbolos.tsum, yycolumn, yyline, yytext());     }
    "/"           { System.out.println("Reconocio tdiv, lexema:"+yytext());
                    return new Symbol(Simbolos.tdiv, yycolumn, yyline, yytext());     }
    "*"           { System.out.println("Reconocio tmul, lexema:"+yytext());
                    return new Symbol(Simbolos.tmul, yycolumn, yyline, yytext());     }
    "potencia"    { System.out.println("Reconocio tpot, lexema:"+yytext());
                    return new Symbol(Simbolos.tpot, yycolumn, yyline, yytext());     }
    "mod"         { System.out.println("Reconocio tmod, lexema:"+yytext());
                    return new Symbol(Simbolos.tmod, yycolumn, yyline, yytext());     }
    "("           { System.out.println("Reconocio pare1, lexema:"+yytext());
                    return new Symbol(Simbolos.pare1, yycolumn, yyline, yytext());    }
    ")"           { System.out.println("Reconocio pare2, lexema:"+yytext());
                    return new Symbol(Simbolos.pare2, yycolumn, yyline, yytext());    }
   "["            { System.out.println("Reconocio Token, lexema:"+yytext());
                    return new Symbol(Simbolos.cor1, yycolumn, yyline, yytext());    }
    "]"           { System.out.println("Reconocio Token, lexema:"+yytext());
                    return new Symbol(Simbolos.cor2, yycolumn, yyline, yytext());    }
    "="           { System.out.println("Reconocio Token, lexema:"+yytext());
                    return new Symbol(Simbolos.tigual, yycolumn, yyline, yytext());     }



}

<YYINITIAL>"inicio"   {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada inicio, lexema:"+yytext());
                    return new Symbol(Simbolos.prInicio, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"fin"   {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada fin, lexema:"+yytext());
                    return new Symbol(Simbolos.prFin, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"ingresar" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada ingresar, lexema:"+yytext());
                    return new Symbol(Simbolos.prIngresar, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"como"   {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada como, lexema:"+yytext());
                    return new Symbol(Simbolos.prComo, yycolumn, yyline, yytext());
                  } 
<YYINITIAL>"con_valor"  {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada con_valor, lexema:"+yytext());
                    return new Symbol(Simbolos.prConValor, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"si" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada si, lexema:"+yytext());
                    return new Symbol(Simbolos.prSi, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"entonces" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada entonces, lexema:"+yytext());
                    return new Symbol(Simbolos.prEntonces, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"fin_si" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada fin_si, lexema:"+yytext());
                    return new Symbol(Simbolos.prFinSi, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"o_si" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada o_si, lexema:"+yytext());
                    return new Symbol(Simbolos.prO_Si, yycolumn, yyline, yytext());
                  }                  
<YYINITIAL>"de_lo_contrario" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada del_lo_contrario, lexema:"+yytext());
                    return new Symbol(Simbolos.prDeLoContrario, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"segun" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada segun, lexema:"+yytext());
                    return new Symbol(Simbolos.prSegun, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"fin_segun" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada fin_segun, lexema:"+yytext());
                    return new Symbol(Simbolos.prFinSegun, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"hacer" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada hacer, lexema:"+yytext());
                    return new Symbol(Simbolos.prHacer, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"para" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada para, lexema:"+yytext());
                    return new Symbol(Simbolos.prPara, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"hasta" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada hasta, lexema:"+yytext());
                    return new Symbol(Simbolos.prHasta, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"fin_para" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada fin_para, lexema:"+yytext());
                    return new Symbol(Simbolos.prFinPara, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"con" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada con, lexema:"+yytext());
                    return new Symbol(Simbolos.prCon, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"incremental" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada incremental, lexema:"+yytext());
                    return new Symbol(Simbolos.prIncremental, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"mientras" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada mientras, lexema:"+yytext());
                    return new Symbol(Simbolos.prMientras, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"fin_mientras" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada fin_mientras, lexema:"+yytext());
                    return new Symbol(Simbolos.prFinMientras, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"repetir" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada repetir, lexema:"+yytext());
                    return new Symbol(Simbolos.prRepetir, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"hasta_que" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada hasta_que, lexema:"+yytext());
                    return new Symbol(Simbolos.prRetornar, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"metodo" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada metodo, lexema:"+yytext());
                    return new Symbol(Simbolos.prMetodo, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"fin_metodo" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada fin_metodo, lexema:"+yytext());
                    return new Symbol(Simbolos.prFinMetodo, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"con_parametros" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada con_parametros, lexema:"+yytext());
                    return new Symbol(Simbolos.prConParametros, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"funcion" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada funcion, lexema:"+yytext());
                    return new Symbol(Simbolos.prFuncion, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"fin_funcion" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada fin_funcion, lexema:"+yytext());
                    return new Symbol(Simbolos.prFinFuncion, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"ejecutar" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada ejecutar, lexema:"+yytext());
                    return new Symbol(Simbolos.prEjecutar, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"imprimir_nl" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada imprimir_nl, lexema:"+yytext());
                    return new Symbol(Simbolos.prImprimirNl, yycolumn, yyline, yytext());
                  }                    
<YYINITIAL>"imprimir" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada imprimir, lexema:"+yytext());
                    return new Symbol(Simbolos.prImprimir, yycolumn, yyline, yytext());
                  }
                
<YYINITIAL>"boolean" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada boolean, lexema:"+yytext());
                    return new Symbol(Simbolos.prBoolean, yycolumn, yyline, yytext());
                  }                  
<YYINITIAL>"caracter" { 
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada caracter, lexema:"+yytext());
                    return new Symbol(Simbolos.prCaracter, yycolumn, yyline, yytext());
                  } 
<YYINITIAL>"numero" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada numero, lexema:"+yytext());
                    return new Symbol(Simbolos.prNumero, yycolumn, yyline, yytext());
                  }    
<YYINITIAL>"cadena" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada cadena, lexema:"+yytext());
                    return new Symbol(Simbolos.prCadena, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"verdadero" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada verdadero, lexema:"+yytext());
                    return new Symbol(Simbolos.prVerdadero, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"falso" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada falso, lexema:"+yytext());
                    return new Symbol(Simbolos.prFalso, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"es_igual" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada es_igual, lexema:"+yytext());
                    return new Symbol(Simbolos.prEsIgual, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"es_diferente" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada es_diferente, lexema:"+yytext());
                    return new Symbol(Simbolos.prEsDiferente, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"mayor" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada mayor, lexema:"+yytext());
                    return new Symbol(Simbolos.prMayor, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"menor" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada menor, lexema:"+yytext());
                    return new Symbol(Simbolos.prMenor, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"mayor_o_igual" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada mayor_o_igual, lexema:"+yytext());
                    return new Symbol(Simbolos.prMayorOIgual, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"menor_o_igual" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada menor_o_igual, lexema:"+yytext());
                    return new Symbol(Simbolos.prMenorOIgual, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"not"  {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada not, lexema:"+yytext());
                    return new Symbol(Simbolos.prNot, yycolumn, yyline, yytext());
                  }                  

{ascii}           {
                    //codigo en java
                    System.out.println("Reconocio ascii, lexema:"+yytext());
                    return new Symbol(Simbolos.ascii, yycolumn, yyline, yytext());
                  }                                          

{float}           {
                    //Codigo en java
                    System.out.println("Reconocio float, lexema:"+yytext());
                    return new Symbol(Simbolos.prFloat, yycolumn, yyline, yytext());
                  }

{caracter}        {
                    //codigo en java
                    System.out.println("Reconocio caracter, lexema:"+yytext());
                    return new Symbol(Simbolos.caracter, yycolumn, yyline, yytext());
                  }                  
{cadena}          {
                    //codigo en java
                    System.out.println("Reconocio cadena, lexema:"+yytext());
                    return new Symbol(Simbolos.tcadena, yycolumn, yyline, yytext());
                  }                                 
{variable}             {
                    //codigo en java
                    System.out.println("Reconocio variable, lexema:"+yytext());
                    return new Symbol(Simbolos.tvariable, yycolumn, yyline, yytext());
                  }
      
{comentario}  { System.out.println("Reconocio comentario, lexema:"+yytext());
                    return new Symbol(Simbolos.tcomentario, yycolumn, yyline, yytext());    }
{comentarioVariasLineas}  { System.out.println("Reconocio comentario de varias lineas, lexema:"+yytext());
                return new Symbol(Simbolos.tcomentariovariaslineas, yycolumn, yyline, yytext());    }   
                
{palabra}     { System.out.println("Reconocio palabra, lexema:"+yytext());
                    return new Symbol(Simbolos.palabra, yycolumn, yyline, yytext());     }                
{num}         { System.out.println("Reconocio tnum, lexema:"+yytext());
                return new Symbol(Simbolos.tnum, yycolumn, yyline, yytext());     }                                             
[ \t\r\n\f]             { /* Espacios en blanco, se ignoran */	}

.                     	{
                            System.out.println("Error Lexico : "+yytext()+ " Linea: "+yyline+" Columna: "+yycolumn);
                            Errors tmp = new Errors("Lexico", yyline , yycolumn,"Componente " + yytext() + " no reconocido.");
        
                            errorsLex.add(tmp);
                        }


