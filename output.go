package main

import (
	"fmt"
	"math"
)

func main() {

	var _variable1_ int = 5
	_v1_ = "esta es una cadena"
	_v2_ = "esta es una cadena"
	_v3_ = "esta es una cadena"

	var _curso1_ string = "olc"
	var _curso2_ string = "olc"
	var _curso3_ string = "olc"
	var _pi1_ int = 3
	var _pi2_ int = 3.1
	var _pi3_ int = 3.14
	var _pi4_ int = 3.141
	var _anio1_ int = 1
	var _anio2_ int = 9
	var _anio3_ int = 4
	var _anio4_ int = 5
	var _encabezado1_ string = "Universidad San Carlos de Guatemala...;"
	var _flag1_ bool = true
	var _flag2_ bool = false
	var _name1_ string = 'f'
	var _name2_ string = 'e'
	var _name3_ string = 'r'
	_name4_ = "n"
	_name6_ = "n"

	var _name5_ string = 'a'
	var _name7_ string = "d"
	var _name8_ string = "o"
	var _operaciones1Basica_ int = 1 + (1)

	var _operaciones1Basica2_ int = _operaciones1Basica_ + _operaciones1Basica_

	var _operaciones1Intermedia_ int = 15 + (9 * 8) + 200/8*3 + 9

	var _operaciones1Avanzadas1_ int = ((15+9)*8 + 200/8*3 + 9)

	var _operaciones1Avanzadas2_ int = math.Pow(30, 22.2-2.2) + (2)
	var _operaciones1Avanzadas3_ int = (math.Pow(30, 2)) + (2)
	var _operaciones1Avanzadas4_ int = (math.Pow(30, 10-8+9-4*2-1)) + (2)
	var _operaciones1Avanzadas5_ int = math.Pow(30, 10-8+9-4*2-1) + (2)
	var _operaciones1Avanzadas6_ int = (5 * 8) % (1 + 5 + 6)

	var _operacionRela1_ bool = 5+5 > 5
	var _operacionRela3_ bool = _operaciones1Basica_ > 8
	var _operacionRela3_ bool = (_operaciones1Basica_ + 6) >= 8
	var _operacionRela3_ bool = (_operaciones1Basica_ + 6) <= 8
	var _operacionRela4_ bool = _operaciones1Basica_ == 8
	var _operacionRela5_ bool = _operaciones1Basica_ == _operaciones1Basica_
	var _operacionRela6_ bool = _operaciones1Basica_ == _operaciones1Basica_+1
	var _operacionRela7_ bool = _operaciones1Basica_ == (_operaciones1Basica_)*(8+5)
	var _operacionRela5_ bool = _operaciones1Basica_ != _operaciones1Basica_

	_v1_ = "esta es la cadena numero 1"
	_v2_ = "estas cadenas deben ser diferentes"
	_v3_ = "estas cadenas deben ser diferentes"

	_curso1_ = "Organizacion de lenguajes y compiladores 1"
	_curso2_ = "Organizacion de lenguajes y compiladores 1"
	_curso3_ = "Organizacion de lenguajes y compiladores 1"

	fmt.Println(_encabezado1_)
	fmt.Println(_encabezado2_)
	fmt.Print("...")
	fmt.Print(_anio1_)
	fmt.Print(_anio2_)
	fmt.Print(_anio3_)
	fmt.Print(_anio4_)
	fmt.Println(".")
	fmt.Println((_v3_))
	if _v1_ == _v2_ {
		fmt.Println("Al parecer no funciona la asignacion")
		for true {
			if !(!(_variable1_ >= 5*5+8/2)) {
				break
			}
			fmt.Print(_variable1_)
			_variable1_ = _variable1_ + 1
		}

	}
	if _v1_ == _v2_ {
		fmt.Println("no tiene que imprimir este mensaje")

	} else {
		fmt.Print("este print es un ejemplo")
	}
	if _v1_ == _v2_ {
		fmt.Println("no tiene que imprimir este mensaje")
	} else if _v1_ == 13 {
		fmt.Println("mensaje de prueba")
	} else if _v1_ == 14 {
		fmt.Println("mensaje de prueba")
	} else {
		fmt.Println("este print es un ejemplo")
	}
	var _varB_ bool = false
	if _varB_ == 1 {
		fmt.Println("Estas definiendo bien los valores")
		var _varaux_ int = _variable1_ % 2
		switch _varaux_ {
		case 0:
			fmt.Println("el valor es mayor a 0 y menos a 2")

		case 2:
			fmt.Println("el valor es mayor a 2")

		}
	}

	_metodo1_()
}
