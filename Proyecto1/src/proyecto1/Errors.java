/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package proyecto1;

/**
 *
 * @author angel
 */
public class Errors {
    //Atributos
    private String error;
    private int line;
    private int column;
    private String description;

    //Constructor
    public Errors(String error, int line, int column, String description) {
        this.error = error;
        this.line = line;
        this.column = column;
        this.description = description;
    }

    //Getters y Setters
    public String getError() {
        return error;
    }
    public void setError(String error) {
        this.error = error;
    }
    public int getLine() {
        return line;
    }
    public void setLine(int line) {
        this.line = line;
    }
    public int getColumn() {
        return column;
    }
    public void setColumn(int column) {
        this.column = column;
    }
    public String getDescription() {
        return description;
    }
    public void setDesciption(String description) {
        this.description = description;
    }
}
