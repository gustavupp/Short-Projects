using System;

namespace Delegates
{
    internal class Program
    {
        // declare the function/delegate
        public delegate void MyLog(string msg);
        
        static void Main(string[] args)
        {
            // can use custom declaration
            MyLog log1 = delegate (string msg)
            {
                Console.WriteLine(msg);
            };

            MyLog log = msg => Console.WriteLine(msg);


            // or generic
            Action<string> log11 = delegate (string msg)
            {
                Console.WriteLine(msg);
            };

            Action<string> logg = msg => Console.WriteLine(msg);


            //delegates as method parameters
            Action<string> callback1 = delegate (string msg) 
            {
                Console.WriteLine(msg); 
            };

            Action<string> callback = msg => Console.WriteLine(msg);

            test.LetMeKnowWhenDone("I'm done.", callback);
            test.LetMeKnowWhenDone("I'm done.", callback1);
            /*test.LetMeKnowWhenDone("I'm done.", delegate (string msg) 
            {
                Console.WriteLine(msg);
            };*/

            test.LetMeKnowWhenDone("I'm done.", msg => Console.WriteLine(msg));
        }

        public static class test
        {
            public static void LetMeKnowWhenDone(string msg, Action<string> callback)
            {
                Console.WriteLine(msg);
            }
        }
    }
}
