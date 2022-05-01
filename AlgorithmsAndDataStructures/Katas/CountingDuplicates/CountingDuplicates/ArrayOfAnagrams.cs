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

            var reversedWord = ReverseWord(word);
            var result = words.Where(w => ReverseWord(w) == reversedWord).ToList();

            foreach(var r in result)
            {
                Console.WriteLine(r);
            }

            return result;
        }

        public static string ReverseWord(string word)
        {
            var reversedArray = word.ToCharArray().Reverse();
            var reversedWord = new String(reversedArray.ToArray());
            return reversedWord;
        }
    }
}
