package proyecto1;

import java.util.ArrayList;

public class Nodo {
    public String Etiqueta = "";
    public ArrayList<Nodo> Hijos = new ArrayList<>();
    public String Valor;
    public int idNodo;
    public String pythonCode = "";
    public String GolangCode = "";
    public String FiguraFlowChart = "";
    public ArrayList<Nodo> Abajo = new ArrayList<>();

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
    public String getPythonCode() {
        return pythonCode;
    }
    public void setPythonCode(String pythonCode) {
        this.pythonCode = pythonCode;
    }

}
