export class Singleton {
    private static instance: Singleton
    private error: string = ""
    private symbol: string = ""

    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    /**
   * Agrega un error a la lista.
   *
   * @remarks
   * Recibe un objeto {tipo,descripcion, linea, columna} el cual es almacenado con un formato <tr> para presentar como una table en html
   *
   */
    public add_error(data: any) {
        this.error +=
            '<tr class="bg-gray-800 border-gray-700 hover:bg-gray-600">' +
            '<th scope="row" class="py-4 px-6 font-medium whitespace-nowrap text-white">' + data.titulo + "</th>" +
            '<td class="py-4 px-6">' + data.descripcion + "</td>" +
            '<td class="py-4 px-6">' + data.linea + "</td>" +
            '<td class="py-4 px-6">' + data.columna + "</td>" +
            '<td class="py-4 px-6">' + data.error + "</td>" +
            "</tr>\n"
    }

    /**
     * 
     * @returns un string con el codigo con el formato html para reportar
     */
    public get_error() {
        return `
        <table class="w-full text-sm text-left text-gray-400">
            <thead class="text-xs uppercase bg-gray-700 text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        Tipo de error
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Descripcion
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Linea
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Columna
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Error
                    </th>
                </tr>
            </thead>
            <tbody>
            ${this.error}
            </tbody>
        </table>`
    }

    public clear_error() {
        this.error = "";
    }

    public add_symbol(id: any, tipo: any, tipo2: any, entorno: any, linea: any, columna: any) {
        this.symbol +=
            '<tr class="bg-gray-800 border-gray-700 hover:bg-gray-600">' +
            '<th scope="row" class="py-4 px-6 font-medium whitespace-nowrap text-white">' + id + "</th>" +
            '<td class="py-4 px-6">' + tipo + "</td>" +
            '<td class="py-4 px-6">' + tipo2 + "</td>" +
            '<td class="py-4 px-6">' + entorno + "</td>" +
            '<td class="py-4 px-6">' + linea + "</td>" +
            '<td class="py-4 px-6">' + columna + "</td>" +
            "</tr>\n"
            console.log("agregado");
    }

    public get_symbol() {
        return `
        <table class="w-full text-sm text-left text-gray-400">
            <thead class="text-xs uppercase bg-gray-700 text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        ID
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Tipo
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Tipo
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Entorno
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Linea
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Columna
                    </th>
                </tr>
            </thead>
            <tbody>
            ${this.symbol}
            </tbody>
        </table>`
    }

    public clear_symbol() {
        this.symbol = "";
    }

}