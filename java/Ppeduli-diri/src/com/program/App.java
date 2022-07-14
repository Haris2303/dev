package com.program;

import javax.swing.JFrame;
import javax.swing.JPanel;
import com.partials.cColor;

public class App {

    public static void main(String[] args) {
        
        JFrame myFrame = new JFrame("Tes Warna");
        myFrame.setSize(600, 400);
        myFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JPanel panel1 = new JPanel();
        panel1.setBounds(0, 0, 600, 400);
        panel1.setBackground(cColor.BLUE);

        myFrame.add(panel1);
        myFrame.setVisible(true);

    }
    
}