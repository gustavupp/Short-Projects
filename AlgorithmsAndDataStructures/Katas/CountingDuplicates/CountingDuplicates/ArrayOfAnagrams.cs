using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharpKatas
{
    internal static class ArrayOfAnagrams
    {
        public static List<string> Anagrams(string word, List<string> words)
        {

            var reversedWord = new String(Array.Sort(word.ToCharArray()));

            var result = words.Where(w => new String(w.ToCharArray().Reverse().ToArray()) == reversedWord).ToList();


            foreach (var r in result)
            {
                Console.WriteLine(r);
            }

            return result;
        }

    }
}
