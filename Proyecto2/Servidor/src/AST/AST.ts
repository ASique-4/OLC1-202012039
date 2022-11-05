export class AST {

    constructor(
        public instrucciones: [],
    ) {
    }

    public graphAST() {
        
        //Create the graphviz code
        
        let ast = "digraph AST {\n";
        ast += "node [shape=ellipse fillcolor=\"#6B728E\" style=filled];\n";
        ast += "rankdir=TB;\n";
        ast += "bgcolor=\"#474E68\";\n";
        ast += "node0[label=\"Instrucciones\"];\n";
        ast += this.getNodos(this.instrucciones);
        ast += "}";
        //Create the file
        let fs = require('fs');
        fs.writeFile("./src/AST.dot", ast, (err: any) => {
            if (err) {
                console.error(err);
                return;
            };
            console.log("File has been created dot");
            const exec = require('child_process').exec;
            exec('dot -Tsvg ./src/AST.dot -o ./src/AST.svg', (err: any, stdout: any, _stderr: any) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log(stdout);
                console.log("File has been created svg 1");
                try{
                    //make a regex to remove the comments
                    let regex = /<!--[\s\S]*?-->/g;
                    let file = fs.readFileSync('./src/AST.svg', 'utf8');
                    let result = file.replace(regex, '');
                    fs.writeFileSync('./src/AST.svg', result, 'utf8');
                }catch{
                    console.log("Error");
                }
            });
        }
        );
        //Convert the file to svg 
        
        

        
        
        
    }

    public getNodos(instrucciones: any) {
        let resultado = "";
        instrucciones.forEach((element: any) => {
            resultado += "node0->" + element.getNodo();
            
        });
        return resultado;
    }

    public createFile(nameFile: string, content: string) {
        let fs = require('fs');
        fs.writeFile(nameFile, content, (err: any) => {
            if (err) {
                console.error(err);
                return;
            };
            console.log("File has been created");
        }
        );
    }



}