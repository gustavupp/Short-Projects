using System;

namespace CountingDuplicates
{ 
    internal class Program
    {
        static void Main()
        {
            Kata.DuplicateCount("Indivisibilities");
        }
    }

    public class Kata
    {
        public static int DuplicateCount(string str)
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