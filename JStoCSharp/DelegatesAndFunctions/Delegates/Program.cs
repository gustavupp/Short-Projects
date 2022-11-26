using System;
using System.Collections.Generic;

namespace Delegates
{
    internal class Program
    {
        // declare the function/delegate
        public delegate void MyCustomDelegateType(string msg);
        public delegate bool testDelegate<in T>(T i);
        
        static void Main(string[] args)
        {
            int[] arr = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            Predicate<int> predicate = x => x >= 5;
            //testDelegate<int> predicate1 = delegate (int x) { return x >= 5; };
            //var allMatches = Array.FindAll(arr, predicate1);

            var list = new List<int>{ 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            list.FindAll(predicate);

            // can use custom declaration
            MyCustomDelegateType myFunction = delegate (string msg)
            {
                Console.WriteLine(msg);
            };

            MyCustomDelegateType myFunction1 = msg => Console.WriteLine(msg);


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

            TestClass.LetMeKnowWhenDone("I'm done.", myFunction3);

            //regular function
            TestClass.LetMeKnowWhenDone("I'm done.", delegate (string msg)
            {
                Console.WriteLine(msg);
            });

            //in-line lambda
            TestClass.LetMeKnowWhenDone("I'm done.", msg => Console.WriteLine(msg));

            TestClass.MyLoggerFunction myLoggerFunction = AnotherTest.FuncTest;
            testClass.LetMeKnowWhenDone2("hiiii", myLoggerFunction);
            TestClass.LetMeKnowWhenDone1(delegate ()
            {
                Console.WriteLine("Done.");
            });

            var testClass1 = new TestClass();
            testClass1.customDelegateObj = () => Console.WriteLine("done");
            testClass1.Test();
            TestClass.Test(delegate () { Console.WriteLine("Done."); });

        }

        public class TestClass
        {
            public delegate void MyLoggerFunction(string msg);
            public delegate void MyCustomDelegateType ();
            public MyCustomDelegateType customDelegateObj;

            public Action<string> MyGenericLogger { get; set; }

            public static void LetMeKnowWhenDone(string msg, Action<string> callbackFunction)
            {
                callbackFunction(msg);
            }

            public static void LetMeKnowWhenDone1(Action callback)
            {
                callback();
            }
            public void LetMeKnowWhenDone2(string msg, MyLoggerFunction myLoggerFunction)
            {
                myLoggerFunction(msg);
            }

            public void Test()
            {
                customDelegateObj.Invoke();
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
