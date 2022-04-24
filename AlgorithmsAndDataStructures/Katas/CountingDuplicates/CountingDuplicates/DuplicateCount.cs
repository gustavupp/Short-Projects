using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharpKatas
{
    internal static class DuplicateCount
    {
        public static int DuplicateCountMethod(string str)
        {
            str = str.ToLower();
            var dict = new Dictionary<char, int>();

            for (int i = 0; i < str.Length; i++)
            {
                if (dict.ContainsKey(str[i]))
                {
                    dict[str[i]] = 1;
                }
                else
                {
                    dict[str[i]] = 0;
                }
            }

            var result = dict.Values.Sum();
            return result;
        }
    }
}
