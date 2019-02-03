using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace keepMeSafe
{
    class Gen
    {
        private const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        private static int RandomInt(int min, int max)
        {
            var seed = Convert.ToInt32(Regex.Match(Guid.NewGuid().ToString(), @"\d+").Value);
            return new Random(seed).Next(min, max);
        }

        private static string passGen(int length)
        {
            string result = "";
            for (int i = 0; i < length; i++)
            {
                result = result + chars[RandomInt(0, chars.Length)];
            }
            return result;   
        }

        public static string writePwd(char lvl)
        {
            switch (lvl)
            {
                case 'L': return passGen(8);
                case 'M': return passGen(15);
                case 'H': return passGen(25);
                default: return null;
            }
        }
    }
}
