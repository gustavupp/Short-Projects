using System;

namespace FunctionsAnsdActions
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Action<string> callback1 = delegate (string msg) {
                Console.WriteLine(msg);
            };

            Action<string> callback = (msg) => Console.WriteLine(msg);

            Helper.LetMeKnowWHenDonw("I am done.", callback);
        }
    }

    public static class Helper
    {
        public static void LetMeKnowWHenDonw(string msg, Action<string> callback)
        {
            for (int i = 0; i < 1000; i++)
            {
                Console.WriteLine(i);
            }

            callback(msg);
        }
    }
}
