using CSharpKatas;
using System;

namespace CountingDuplicates
{ 
    internal class Program
    {
        static void Main()
        {
            //DuplicateCount.DuplicateCountMethod("Indivisibilities");
            ArrayOfAnagrams.Anagrams("racer", new List<string>()
            {
                "crazer",
                "carer",
                "racar",
                "caers",
                "racer",
            });
        }
    }

}