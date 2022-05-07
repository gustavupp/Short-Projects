using CSharpKatas;
using System;

namespace CountingDuplicates
{ 
    internal class Program
    {
        static void Main()
        {
            //DuplicateCount.DuplicateCountMethod("Indivisibilities");
            ArrayOfAnagrams.Anagrams("racer", new List<string> { "carer", "arcre", "carre", "racrs", "racers", "arceer", "raccer", "carrer", "cerarr" });
        }
    }

}