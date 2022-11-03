
export class AST {

    constructor(
        public instrucciones: [],
    ) {
    }

    public graphAST() {
        
        //Create the graphviz code
        let ast = "digraph AST {\n";
        ast += "node [shape=box];\n";
        ast += "rankdir=TB;\n";
        ast += "node0[label=\"Instrucciones\"];\n";
        ast += this.getNodos(this.instrucciones);
        ast += "}";
        //Create the file
        let fs = require('fs');
        fs.writeFile("AST.dot", ast, (err: any) => {
            if (err) {
                console.error(err);
                return;
            };
            console.log("File has been created");
        }
        );
        //Convert the file to png
        const exec = require('child_process').exec;
        exec('dot -Tpng AST.dot -o AST.png', (err: any, _stdout: any, _stderr: any) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log("File has been converted");
        }
        );

        //Open the file
        // exec('xdg-open AST.png', (err: any, _stdout: any, _stderr: any) => {
        //     if (err) {
        //         console.error(err);
        //         return;
        //     }
        //     console.log("File has been opened");
        // }
        // );

        
    }

    public getNodos(instrucciones: any) {
        let resultado = "";
        instrucciones.forEach((element: any) => {
            resultado += "node0->" + element.getNodo();
        });
        return resultado;
    }


}