package proyecto1;

import java.util.ArrayList;

public class Nodo {
    public String Etiqueta;
    public ArrayList<Nodo> Hijos = new ArrayList<>();
    public String Valor;
    public int idNodo;

    //Add hijo
    public void AddHijo(Nodo hijo) {
        this.Hijos.add(hijo);
    }

    //Getters and Setters
    public String getEtiqueta() {
        return Etiqueta;
    }
    public void setEtiqueta(String etiqueta) {
        Etiqueta = etiqueta;
    }
    public ArrayList<Nodo> getHijos() {
        return Hijos;
    }
    public void setValor(String valor) {
        Valor = valor;
    }
    public int getIdNodo() {
        return idNodo;
    }
    public void setIdNodo(int idNodo) {
        this.idNodo = idNodo;
    }
}
