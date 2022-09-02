package analizadores;
import java_cup.runtime.*;


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


num = [0-9]+


%%

<YYINITIAL>{

    "-"           { return new Symbol(Simbolos.trest, yycolumn, yyline, yytext());    }
    "¿"           { return new Symbol(Simbolos.tinterrogacioninicio, yycolumn, yyline, yytext());    }
    "?"           { return new Symbol(Simbolos.tinterrogacionfin, yycolumn, yyline, yytext());    }
    ">"           { return new Symbol(Simbolos.tmayor, yycolumn, yyline, yytext());    }
    ","          { return new Symbol(Simbolos.tcoma, yycolumn, yyline, yytext());    }
    "_"           { return new Symbol(Simbolos.tguionbalo, yycolumn, yyline, yytext());    }
    "//"          { return new Symbol(Simbolos.tcomentario, yycolumn, yyline, yytext());}
    "/*"          { return new Symbol(Simbolos.tcomentarioinicio, yycolumn, yyline, yytext());}
    "*/"          { return new Symbol(Simbolos.tcomentariofin, yycolumn, yyline, yytext());}
    "+"           { return new Symbol(Simbolos.tsum, yycolumn, yyline, yytext());     }
    "/"           { return new Symbol(Simbolos.tdiv, yycolumn, yyline, yytext());     }
    "*"           { return new Symbol(Simbolos.tmul, yycolumn, yyline, yytext());     }
    "potencia"    { return new Symbol(Simbolos.tpot, yycolumn, yyline, yytext());     }
    "mod"         { return new Symbol(Simbolos.tmod, yycolumn, yyline, yytext());     }
    "("           { return new Symbol(Simbolos.pare1, yycolumn, yyline, yytext());    }
    ")"           { return new Symbol(Simbolos.pare2, yycolumn, yyline, yytext());    }
    "sen"         { return new Symbol(Simbolos.tsen, yycolumn, yyline, yytext());     }
    "cos"         { return new Symbol(Simbolos.tcos, yycolumn, yyline, yytext());     }
    "tan"         { return new Symbol(Simbolos.ttan, yycolumn, yyline, yytext());     }
    ";"           { return new Symbol(Simbolos.tpuntoycoma, yycolumn, yyline, yytext());     }

    {num}         { return new Symbol(Simbolos.tnum, yycolumn, yyline, yytext());     }

}

<YYINITIAL>"inicio"   {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prInicio, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"fin"   {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prFin, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"ingresar" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prIngresar, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"como"   {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prComo, yycolumn, yyline, yytext());
                  } 
<YYINITIAL>"con_valor"  {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prConValor, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"si" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prSi, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"entonces" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prEntonces, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"fin_si" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prFinSi, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"o_si" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prO_Si, yycolumn, yyline, yytext());
                  }                  
<YYINITIAL>"de_lo_contrario" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prDeLoContrario, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"segun" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prSegun, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"hacer" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prHacer, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"para" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prPara, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"hasta" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prHasta, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"fin_para" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prFinPara, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"con" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prCon, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"incremental" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prIncremental, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"mientras" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prMientras, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"fin_mientras" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prFinMientras, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"repetir" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prRepetir, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"hasta_que" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prHastaQue, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"retornar" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prRetornar, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"metodo" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prMetodo, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"fin_metodo" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prFinMetodo, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"con_parametros" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prConParametros, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"funcion" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prFuncion, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"fin_funcion" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prFinFuncion, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"ejecutar" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prEjecutar, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"imprimir" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prImprimir, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"imprimir_nl" {
                    //codigo en java
                    System.out.println("Reconocio palabra_reservada, lexema:"+yytext());
                    return new Symbol(Simbolos.prImprimirNl, yycolumn, yyline, yytext());
                  }                  


[ \t\r\n\f]             { /* Espacios en blanco, se ignoran */	}

.                     	{
                            System.out.println("Error Lexico : "+yytext()+ "Linea"+yyline+" Columna "+yycolumn);
                        }
