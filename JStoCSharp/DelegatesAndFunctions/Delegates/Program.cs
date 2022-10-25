using System;
using System.Collections.Generic;

namespace Delegates
{
    internal class Program
    {
        // declare the function/delegate
        public delegate void MyLog(string msg);
        
        static void Main(string[] args)
        {
            int[] arr = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            Predicate<int> predicate = x => x >= 5;
            var allMatches = Array.FindAll(arr, delegate (int x)
            {
                return x >= 5;
            });

            var list = new List<int>{ 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            list.FindAll(predicate);

            // can use custom declaration
            MyLog myFunction = delegate (string msg)
            {
                Console.WriteLine(msg);
            };

            MyLog myFunction1 = msg => Console.WriteLine(msg);


            // or generic
            Action<string> log11 = delegate (string msg)
            {
                Console.WriteLine(msg);
            };

            Action<string> logg = msg => Console.WriteLine(msg);


            //delegates as method parameters
            //regular
            Action<string> myFunction2 = delegate (string msg) 
            {
                Console.WriteLine(msg); 
            };

            //lambda
            Action<string> myFunction3 = msg => Console.WriteLine(msg);

            var testClass = new TestClass();

            testClass.LetMeKnowWhenDone("I'm done.", myFunction3);
            testClass.LetMeKnowWhenDone("I'm done.", myFunction2);

            //regular function
            testClass.LetMeKnowWhenDone("I'm done.", delegate (string msg)
            {
                Console.WriteLine(msg);
            });

            //in-line lambda
            testClass.LetMeKnowWhenDone("I'm done.", msg => Console.WriteLine(msg));

            TestClass.MyLoggerFunction myLoggerFunction = AnotherTest.FuncTest;
            testClass.LetMeKnowWhenDone2("hiiii", myLoggerFunction);
        }

        public class TestClass
        {
            public delegate void MyLoggerFunction(string msg);

            public Action<string> MyGenericLogger { get; set; }

            public void LetMeKnowWhenDone(string msg, Action<string> callbackFunction)
            {
                callbackFunction(msg);
            }

            public void LetMeKnowWhenDone1(string msg)
            {
                MyGenericLogger(msg);
            }
            public void LetMeKnowWhenDone2(string msg, MyLoggerFunction myLoggerFunction)
            {
                myLoggerFunction(msg);
            }
        }

        public class AnotherTest
        {
            public static void FuncTest(string msg)
            {
                Console.WriteLine(msg);
            }
        }
    }
}
