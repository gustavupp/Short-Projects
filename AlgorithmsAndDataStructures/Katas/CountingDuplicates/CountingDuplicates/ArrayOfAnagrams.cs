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
            var reversedArray = word.ToCharArray().Reverse();
            var reversedWord = (string)reversedArray.ToArray();
            Console.WriteLine(reversedWord);
            return words;
        }
    }
}
