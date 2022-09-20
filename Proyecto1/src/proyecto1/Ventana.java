/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/GUIForms/JFrame.java to edit this template
 */
package proyecto1;

import proyecto1.*;

import analizadores.Analizador_Lexico;
import analizadores.Analizador_sintactico;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringReader;
import java.util.ArrayList;

import javax.swing.JFileChooser;
import javax.swing.JOptionPane;
import javax.swing.filechooser.FileNameExtensionFilter;

/**
 *
 * @author angel
 * inicio
ingresar _operaciones1Basica_      como numero con_valor 1+((8-7)/(2-9)); 
fin


inicio

ingresar _operaciones1Basica2_      como numero con_valor _operaciones1Basica_+_operaciones1Basica_; 
ingresar _operaciones1Intermedia_  Como nUmero con_valor 15+(9*8)+200/8*3+9;
ingresar _operaciones1Avanzadas2_  coMo numero con_valor 30 potencia [22.2-2.2] + (2);   
fin

inicio
metodo _potenciaManual_ con_parametros (_base_ Numero, _exponenete_ Numero)
	ingresar _i_ como Numero con_valor 0;

fin_metodo
fin

inicio
para _i_->0 hasta _exponente_1 hacer
		_acumulado_ -> _acumulado_ + _acumulado_;
	fin_para
fin

inicio
si _v1_ es_igual _v2_ entonces
	imprimir_nl "no tiene que imprimir este mensaje";
de_lo_contrario
	imprimir "de lo contrario";
fin_si
fin

inicio
si _v1_ es_igual _v2_ entonces
	imprimir_nl "no tiene que imprimir este mensaje";
o_si _v1_ mayor _v2_ entonces
	imprimir_nl "mayor";
de_lo_contrario
	si _v1_ es_igual _v2_ entonces
		imprimir_nl "no tiene que imprimir este mensaje";
	de_lo_contrario
		imprimir "de lo contrario";
	fin_si
fin_si
si _v1_ es_igual _v2_ entonces
	imprimir_nl "no tiene que imprimir este mensaje";
de_lo_contrario
	mientras not (_variable1_ mayor_o_igual 5*5+8/2) hacer
		imprimir _variable1_;
	fin_mientras
fin_si
fin

inicio
si _v1_ es_igual _v2_ entonces
	imprimir_nl "no tiene que imprimir este mensaje";
de_lo_contrario
	mientras not (_variable1_ mayor_o_igual 5*5+8/2) hacer
		imprimir _variable1_;
	fin_mientras
fin_si
fin

inicio
mientras not (_variable1_ mayor_o_igual 5*5+8/2) hacer
		imprimir _variable1_;
	fin_mientras
fin

inicio
si _v1_ es_igual _v2_ entonces
	imprimir_nl "no tiene que imprimir este mensaje";
o_si _v1_ mayor _v2_ entonces
	imprimir_nl "mayor";
de_lo_contrario
	imprimir "de lo contrario";
fin_si
fin

inicio
si _v1_ es_igual _v2_ entonces
	imprimir_nl "no tiene que imprimir este mensaje1";
		o_si _v1_ es_igual 13 entonces
		    imprimir_nl "mensaje de prueba2";
		o_si _v1_ es_igual 14 entonces
		    ingresar _operaciones1Basica2_      como numero con_valor _operaciones1Basica_+_operaciones1Basica_; 
ingresar _operaciones1Intermedia_  Como nUmero con_valor 15+(9*8)+200/8*3+9;
ingresar _operaciones1Avanzadas2_  coMo numero con_valor 30 potencia [22.2-2.2] + (2); 
	de_lo_contrario
	    imprimir_nl "este print es un ejemplo4";
fin_si
fin

inicio
si _v1_ es_igual _v2_ entonces
	imprimir_nl "no tiene que imprimir este mensaje";
    imprimir_nl "no tiene que imprimir este mensaje2";
fin_si
fin

inicio
segun _varaux_ hacer
		¿0? entonces
			imprimir_nl "el valor es mayor a 0 y menos a 2";
		¿2? entonces
			imprimir_nl "el valor es mayor a 2";
	fin_segun
fin

inicio
si _v1_ es_igual _v2_ entonces
	imprimir_nl "no tiene que imprimir este mensaje";
	de_lo_contrario
	    imprimir "este print es un ejemplo";
        imprimir_nl "no tiene que imprimir este mensaje";
    imprimir_nl "no tiene que imprimir este mensaje2";
fin_si
fin

inicio
ingresar _operaciones1Basica_      como numero con_valor ((8-7)/(2-9))+2; 
fin

inicio
ingresar _operaciones1Basica_      como numero con_valor (5*4)+(((2-9)-(2*7))/(2-9))-8; 
fin

inicio
si _v1_ es_igual _v2_ entonces
	imprimir_nl "no tiene que imprimir este mensaje";
    imprimir_nl "no tiene que imprimir este mensaje2";
    imprimir_nl "no tiene que imprimir este mensaje3";
fin_si
fin

inicio
ingresar _operaciones1Basica_      como numero con_valor (5*4)+(((2-9)-(2*7))/(2-9)); 
fin
 */


public class Ventana extends javax.swing.JFrame {
    public int ErroresCount = 0;
    /**
     * Creates new form Ventana
     */
    public Ventana() {
        initComponents();
        this.getContentPane().setBackground(new java.awt.Color(34, 40, 49));
        //Centrar
        this.setLocationRelativeTo(null);
    }
    //Obtener rank
    public String getRank(Nodo raiz){
        String tmpRank = "";
        if(raiz != null){
            if(raiz.Hijos != null){
                if(raiz.Hijos.size() > 1){
                    tmpRank += "\"<" + raiz.Hijos.get(1).idNodo + "." + raiz.Hijos.get(1).Etiqueta + ">  " + raiz.Hijos.get(1).Valor + "\"";
                    if(raiz.Hijos.get(1).Hijos != null){
                        tmpRank += getRank(raiz.Hijos.get(1));
                    }
                }else{
                    tmpRank += "\"<" + raiz.idNodo + "." + raiz.Etiqueta + ">  " + raiz.Valor + "\"";
                }
            }
        }
        
        return tmpRank;
    }




    //Create AST
    public String recorrido(Nodo raiz){
        String ast = "";
        for(Nodo hijos : raiz.Hijos){
            //If hijos is null then eliminate
                if(!(hijos.Etiqueta.equals(""))){
                    ast += "\"<" + raiz.idNodo + "." + raiz.Etiqueta + ">  " + raiz.Valor + "\"->\"<" + hijos.idNodo + "." + hijos.Etiqueta + ">  " + hijos.Valor + "\"\n";
                    ast += recorrido(hijos);
                } else {
                    System.out.println(raiz.Etiqueta);
                }

            
        }
        return ast;
    }

    public void crearAST(String cadena){
        FileWriter fichero = null;
        PrintWriter pw = null;
        try
        {
            fichero = new FileWriter("AST.dot");
            pw = new PrintWriter(fichero);
            pw.println("digraph G {");
            pw.println("node [shape=box, style=filled, color=seashell2];");
            pw.println(cadena);
            pw.println("\n}");
            fichero.close();
        }catch (Exception e) {
            e.printStackTrace();
        }
        try {
            Runtime rt = Runtime.getRuntime();
            rt.exec("dot -Tpng AST.dot -o AST.png");
        } catch (IOException ex) {
            System.out.println(ex);
        }
    }
    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jScrollPane1 = new javax.swing.JScrollPane();
        TextArea = new javax.swing.JTextArea();
        errorNumber = new javax.swing.JLabel();
        jLabel2 = new javax.swing.JLabel();
        Run = new javax.swing.JButton();
        Clean = new javax.swing.JButton();
        PythonView = new javax.swing.JButton();
        GolangView = new javax.swing.JButton();
        jLabel3 = new javax.swing.JLabel();
        jMenuBar1 = new javax.swing.JMenuBar();
        jMenu1 = new javax.swing.JMenu();
        OpenFile = new javax.swing.JMenuItem();
        SaveFile = new javax.swing.JMenuItem();
        jMenu2 = new javax.swing.JMenu();
        jMenuItem5 = new javax.swing.JMenuItem();
        ErrorsOption = new javax.swing.JMenuItem();
        jMenu3 = new javax.swing.JMenu();
        jMenuItem3 = new javax.swing.JMenuItem();
        jMenuItem4 = new javax.swing.JMenuItem();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setBackground(new java.awt.Color(34, 40, 49));
        setFont(new java.awt.Font("Fira Code Medium", 1, 18)); // NOI18N

        TextArea.setBackground(new java.awt.Color(238, 238, 238));
        TextArea.setColumns(20);
        TextArea.setFont(new java.awt.Font("Fira Code SemiBold", 0, 18)); // NOI18N
        TextArea.setForeground(new java.awt.Color(57, 62, 70));
        TextArea.setRows(5);
        jScrollPane1.setViewportView(TextArea);

        errorNumber.setFont(new java.awt.Font("Fira Code Medium", 0, 18)); // NOI18N
        errorNumber.setForeground(new java.awt.Color(165, 201, 202));
        errorNumber.setText("0");

        jLabel2.setFont(new java.awt.Font("Fira Code Medium", 0, 18)); // NOI18N
        jLabel2.setForeground(new java.awt.Color(165, 201, 202));
        jLabel2.setText("Errors");

        Run.setBackground(new java.awt.Color(0, 204, 51));
        Run.setFont(new java.awt.Font("Fira Code Medium", 0, 18)); // NOI18N
        Run.setForeground(new java.awt.Color(44, 51, 51));
        Run.setText("Run");
        Run.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                RunActionPerformed(evt);
            }
        });

        Clean.setBackground(new java.awt.Color(57, 62, 70));
        Clean.setFont(new java.awt.Font("Fira Code Medium", 0, 18)); // NOI18N
        Clean.setForeground(new java.awt.Color(0, 173, 181));
        Clean.setText("Clean");
        Clean.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                CleanActionPerformed(evt);
            }
        });

        PythonView.setBackground(new java.awt.Color(57, 62, 70));
        PythonView.setFont(new java.awt.Font("Fira Code Medium", 0, 18)); // NOI18N
        PythonView.setForeground(new java.awt.Color(0, 173, 181));
        PythonView.setText("View code Python");
        PythonView.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                PythonViewActionPerformed(evt);
            }
        });

        GolangView.setBackground(new java.awt.Color(57, 62, 70));
        GolangView.setFont(new java.awt.Font("Fira Code Medium", 0, 18)); // NOI18N
        GolangView.setForeground(new java.awt.Color(0, 173, 181));
        GolangView.setText("View code Golang");
        GolangView.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                GolangViewActionPerformed(evt);
            }
        });

        jLabel3.setFont(new java.awt.Font("Fira Code Medium", 0, 18)); // NOI18N
        jLabel3.setForeground(new java.awt.Color(165, 201, 202));
        jLabel3.setText("OLC1_2S_2022_202012039");

        jMenuBar1.setForeground(new java.awt.Color(231, 246, 242));

        jMenu1.setText("File");
        jMenu1.setFont(new java.awt.Font("Fira Code Medium", 0, 16)); // NOI18N

        OpenFile.setFont(new java.awt.Font("Fira Code Medium", 0, 16)); // NOI18N
        OpenFile.setText("Open File");
        OpenFile.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                OpenFileActionPerformed(evt);
            }
        });
        jMenu1.add(OpenFile);

        SaveFile.setFont(new java.awt.Font("Fira Code Medium", 0, 16)); // NOI18N
        SaveFile.setText("Save as...");
        SaveFile.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                SaveFileActionPerformed(evt);
            }
        });
        jMenu1.add(SaveFile);

        jMenuBar1.add(jMenu1);

        jMenu2.setText("Report");
        jMenu2.setFont(new java.awt.Font("Fira Code Medium", 0, 16)); // NOI18N

        jMenuItem5.setFont(new java.awt.Font("Fira Code Medium", 0, 16)); // NOI18N
        jMenuItem5.setText("Flowchart");
        jMenu2.add(jMenuItem5);

        ErrorsOption.setFont(new java.awt.Font("Fira Code Medium", 0, 16)); // NOI18N
        ErrorsOption.setText("Errors");
        ErrorsOption.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                ErrorsOptionActionPerformed(evt);
            }
        });
        jMenu2.add(ErrorsOption);

        jMenuBar1.add(jMenu2);

        jMenu3.setText("View");
        jMenu3.setFont(new java.awt.Font("Fira Code Medium", 0, 16)); // NOI18N

        jMenuItem3.setFont(new java.awt.Font("Fira Code Medium", 0, 16)); // NOI18N
        jMenuItem3.setText("User Manual");
        jMenu3.add(jMenuItem3);

        jMenuItem4.setFont(new java.awt.Font("Fira Code Medium", 0, 16)); // NOI18N
        jMenuItem4.setText("Technical Manual");
        jMenu3.add(jMenuItem4);

        jMenuBar1.add(jMenu3);

        setJMenuBar(jMenuBar1);

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(24, 24, 24)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(Clean, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(Run, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                        .addGroup(layout.createSequentialGroup()
                            .addComponent(errorNumber)
                            .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                            .addComponent(jLabel2)
                            .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                            .addComponent(GolangView)
                            .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                            .addComponent(PythonView))
                        .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 1209, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addComponent(jLabel3))
                .addContainerGap(24, Short.MAX_VALUE))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(12, 12, 12)
                .addComponent(jLabel3, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                    .addComponent(Run, javax.swing.GroupLayout.PREFERRED_SIZE, 40, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(Clean, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 442, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(errorNumber)
                    .addComponent(jLabel2)
                    .addComponent(PythonView, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(GolangView, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addContainerGap(27, Short.MAX_VALUE))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void RunActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_RunActionPerformed
        // TODO add your handling code here:
        try {
            String dato= TextArea.getText();
            System.out.println(dato);
            Analizador_Lexico lexico = new Analizador_Lexico(new BufferedReader(new StringReader(dato)));
            Analizador_sintactico sintactico = new Analizador_sintactico(lexico);
            sintactico.parse();
            errorNumber.setText(Integer.toString(sintactico.erroresSintacticos));

            Nodo raiz = sintactico.padre;
            //Recorreo raiz
            crearAST(recorrido(raiz));
            //Crar HTML de errores
            String htmlstyle = "<!DOCTYPE html>"+
            "<html>"+
            
                "<head>" +
                "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=iso-8859-1\">" +
                "<title>Errores</title>"+
                "</head>"+
                "<style>"+
                "table, th{background-color: #D7C0AE;} td { border: 1px solid rgb(31, 31, 31);"+
                "border-collapse: collapse;"+
                "background-color: #D7C0AE;"+
                "}"+
                "th:nth-child(even),td:nth-child(even) {"+
                "background-color: #EEE3CB;"+
                "}"+
                "</style>"+
                "<body bgcolor=\"B7C4CF\">"+
                    "<center>";
                        
            String html =  htmlstyle + "<table border=1><tr><th>Linea</th><th>Columna</th><th>Descripcion</th><th>Tipo</th></tr>";
            for (int i = 0; i < sintactico.errorsSint.size(); i++) {
                html += "<tr><td><center>" + sintactico.errorsSint.get(i).getLine() + "</center></td><td><center>" + 
                sintactico.errorsSint.get(i).getColumn() + "</center></td><td><center>" + sintactico.errorsSint.get(i).getDescription() + 
                "</center></td><td><center>" + sintactico.errorsSint.get(i).getError()  + "</center></td></tr>";
            }
            //Generate HTML table of errorsLex
            for (int i = 0; i < lexico.errorsLex.size(); i++) {
                html += "<tr><td><center>" + lexico.errorsLex.get(i).getLine() + "</center></td><td><center>" + 
                lexico.errorsLex.get(i).getColumn() + "</center></td><td><center>" + lexico.errorsLex.get(i).getDescription() + 
                "</center></td><td><center>" + lexico.errorsLex.get(i).getError()  + "</center></td></tr>";
            }
            html += "</table></center></body></html>";
            //Save on a file named "errores.html"
            File file = new File("errores.html");
            BufferedWriter bw = new BufferedWriter(new FileWriter(file));
            bw.write(html);
            bw.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }//GEN-LAST:event_RunActionPerformed

    private void CleanActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_CleanActionPerformed
        // TODO add your handling code here:
        TextArea.setText("");
        
    }//GEN-LAST:event_CleanActionPerformed

    private void MenuFileActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_MenuFileActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_MenuFileActionPerformed

    private void OpenFileActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_OpenFileActionPerformed
        // TODO add your handling code here:
        //Open only .olc files
        FileNameExtensionFilter filter = new FileNameExtensionFilter("OLC Files", "olc");

        //Clean TextArea
        TextArea.setText("");

        //Open File
        JFileChooser fileChooser = new JFileChooser();
        fileChooser.setFileFilter(filter);
        fileChooser.showOpenDialog(this);
        File file = fileChooser.getSelectedFile();
        if (file != null) {
            try {
                BufferedReader br = new BufferedReader(new FileReader(file));
                String linea;
                while ((linea = br.readLine()) != null) {
                    TextArea.append(linea + "\n");
                }
                br.close();
            } catch (Exception e) {
                System.out.println(e);
            }
        }
        
    }//GEN-LAST:event_OpenFileActionPerformed

    private void SaveFileActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_SaveFileActionPerformed
        // TODO add your handling code here:
        JFileChooser fileChooser = new JFileChooser();
        fileChooser.showSaveDialog(this);
        File file = fileChooser.getSelectedFile();
        if (file != null) {
            try {
                BufferedWriter bw = new BufferedWriter(new FileWriter(file));
                bw.write(TextArea.getText());
                bw.close();
            } catch (Exception e) {
                System.out.println(e);
            }
        }
    }//GEN-LAST:event_SaveFileActionPerformed

    private void PythonViewActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_PythonViewActionPerformed
        // TODO add your handling code here:
        try {
            String dato= TextArea.getText();
            System.out.println(dato);
            Analizador_Lexico lexico = new Analizador_Lexico(new BufferedReader(new StringReader(dato)));
            Analizador_sintactico sintactico = new Analizador_sintactico(lexico);
            sintactico.parse();
            errorNumber.setText(Integer.toString(sintactico.erroresSintacticos));
            TextArea.setText(sintactico.python);
            //Create a py file containing sintactico.python
            try{
            File file = new File("output.py");
            BufferedWriter bw = new BufferedWriter(new FileWriter(file));
            bw.write(sintactico.python);
            bw.close();
            } catch (Exception e) {
                System.out.println(e);
            }
            //Generate HTML table of errorsSint
            String htmlstyle = "<!DOCTYPE html>"+
            "<html>"+
            
                "<head>" +
                "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=iso-8859-1\">" +
                "<title>Errores</title>"+
                "</head>"+
                "<style>"+
                "table, th{background-color: #D7C0AE;} td { border: 1px solid rgb(31, 31, 31);"+
                "border-collapse: collapse;"+
                "background-color: #D7C0AE;"+
                "}"+
                "th:nth-child(even),td:nth-child(even) {"+
                "background-color: #EEE3CB;"+
                "}"+
                "</style>"+
                "<body bgcolor=\"B7C4CF\">"+
                    "<center>";
                        
            String html =  htmlstyle + "<table border=1><tr><th>Linea</th><th>Columna</th><th>Descripcion</th><th>Tipo</th></tr>";
            for (int i = 0; i < sintactico.errorsSint.size(); i++) {
                html += "<tr><td><center>" + sintactico.errorsSint.get(i).getLine() + "</center></td><td><center>" + 
                sintactico.errorsSint.get(i).getColumn() + "</center></td><td><center>" + sintactico.errorsSint.get(i).getDescription() + 
                "</center></td><td><center>" + sintactico.errorsSint.get(i).getError()  + "</center></td></tr>";
            }
            //Generate HTML table of errorsLex
            for (int i = 0; i < lexico.errorsLex.size(); i++) {
                html += "<tr><td><center>" + lexico.errorsLex.get(i).getLine() + "</center></td><td><center>" + 
                lexico.errorsLex.get(i).getColumn() + "</center></td><td><center>" + lexico.errorsLex.get(i).getDescription() + 
                "</center></td><td><center>" + lexico.errorsLex.get(i).getError()  + "</center></td></tr>";
            }
            html += "</table></center></body></html>";
            //Save on a file named "errores.html"
            File file = new File("errores.html");
            BufferedWriter bw = new BufferedWriter(new FileWriter(file));
            bw.write(html);
            bw.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }//GEN-LAST:event_PythonViewActionPerformed

    private void ErrorsOptionActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_ErrorsOptionActionPerformed
        // TODO add your handling code here:
        //Open HTML file
        try {
            File path = new File("errores.html");
            Runtime.getRuntime().exec("rundll32 url.dll,FileProtocolHandler " + path);
        } catch (Exception ex) {
            ex.printStackTrace();
        }

    }//GEN-LAST:event_ErrorsOptionActionPerformed

    private void GolangViewActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_GolangViewActionPerformed
        // TODO add your handling code here:
        try {
            String dato= TextArea.getText();
            System.out.println(dato);
            Analizador_Lexico lexico = new Analizador_Lexico(new BufferedReader(new StringReader(dato)));
            Analizador_sintactico sintactico = new Analizador_sintactico(lexico);
            sintactico.parse();
            errorNumber.setText(Integer.toString(sintactico.erroresSintacticos));
            TextArea.setText(sintactico.golang);
            //Create a go file with sintactico.golang
            try{
            File file = new File("output.go");
            BufferedWriter bw = new BufferedWriter(new FileWriter(file));
            bw.write(sintactico.golang);
            bw.close();
            } catch (Exception e) {
                System.out.println(e);
            }
            //Generate HTML table of errorsSint
            String htmlstyle = "<!DOCTYPE html>"+
            "<html>"+
            
                "<head>" +
                "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=iso-8859-1\">" +
                "<title>Errores</title>"+
                "</head>"+
                "<style>"+
                "table, th{background-color: #D7C0AE;} td { border: 1px solid rgb(31, 31, 31);"+
                "border-collapse: collapse;"+
                "background-color: #D7C0AE;"+
                "}"+
                "th:nth-child(even),td:nth-child(even) {"+
                "background-color: #EEE3CB;"+
                "}"+
                "</style>"+
                "<body bgcolor=\"B7C4CF\">"+
                    "<center>";
                        
            String html =  htmlstyle + "<table border=1><tr><th>Linea</th><th>Columna</th><th>Descripcion</th><th>Tipo</th></tr>";
            for (int i = 0; i < sintactico.errorsSint.size(); i++) {
                html += "<tr><td><center>" + sintactico.errorsSint.get(i).getLine() + "</center></td><td><center>" + 
                sintactico.errorsSint.get(i).getColumn() + "</center></td><td><center>" + sintactico.errorsSint.get(i).getDescription() + 
                "</center></td><td><center>" + sintactico.errorsSint.get(i).getError()  + "</center></td></tr>";
            }
            //Generate HTML table of errorsLex
            for (int i = 0; i < lexico.errorsLex.size(); i++) {
                html += "<tr><td><center>" + lexico.errorsLex.get(i).getLine() + "</center></td><td><center>" + 
                lexico.errorsLex.get(i).getColumn() + "</center></td><td><center>" + lexico.errorsLex.get(i).getDescription() + 
                "</center></td><td><center>" + lexico.errorsLex.get(i).getError()  + "</center></td></tr>";
            }
            html += "</table></center></body></html>";
            //Save on a file named "errores.html"
            File file = new File("errores.html");
            BufferedWriter bw = new BufferedWriter(new FileWriter(file));
            bw.write(html);
            bw.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }//GEN-LAST:event_GolangViewActionPerformed


    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(Ventana.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(Ventana.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(Ventana.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(Ventana.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new Ventana().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton Clean;
    private javax.swing.JMenuItem ErrorsOption;
    private javax.swing.JButton GolangView;
    private javax.swing.JMenuItem OpenFile;
    private javax.swing.JButton PythonView;
    private javax.swing.JButton Run;
    private javax.swing.JMenuItem SaveFile;
    private javax.swing.JTextArea TextArea;
    private javax.swing.JLabel errorNumber;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JMenu jMenu1;
    private javax.swing.JMenu jMenu2;
    private javax.swing.JMenu jMenu3;
    private javax.swing.JMenuBar jMenuBar1;
    private javax.swing.JMenuItem jMenuItem3;
    private javax.swing.JMenuItem jMenuItem4;
    private javax.swing.JMenuItem jMenuItem5;
    private javax.swing.JScrollPane jScrollPane1;
    // End of variables declaration//GEN-END:variables
}
