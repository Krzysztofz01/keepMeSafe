using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace keepMeSafe
{
    public partial class Form1 : Form
    { 
        private char[] def = {'L', 'M', 'H'};

        public Form1()
        {
            InitializeComponent();

            for (int i = 0; i < 3; i++)
            {
                pwdLevel.Items.Add(def[i]);
            }
        }

        public void setUp()
        {
            for (int i = 0; i < 3; i++)
            {
                pwdLevel.Items.Add(def[i]);
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            switch(pwdLevel.Text)
            {
                case "L": txtOutput.Text = Gen.writePwd('L'); break;
                case "M": txtOutput.Text = Gen.writePwd('M'); break;
                case "H": txtOutput.Text = Gen.writePwd('H'); break;
            }
            
        }
    }
}
