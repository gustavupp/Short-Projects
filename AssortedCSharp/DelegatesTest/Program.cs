using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Collections.ObjectModel;

namespace DelegatesTest
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var myList = new List<char>() { 'a', 'b', 'c', 'd' };
            myList.MyForEach((x,index) => Console.WriteLine(x));

            var myCustomList = myList.MySelect((x, index) => {
                x = 'G';           
                Console.WriteLine(x);
                return x;
            });
        }
    }

    public static class IterableExtension
    {
        public static void MyForEach<T>(this IEnumerable<T> collection, Action<T, int?> callback)
        {
            foreach (var item in collection.Select((value, i) => new { value, i }))
            {
                callback(item.value, item.i);
            }

            /*for (var i = 0; i < collection.Count(); i++)
            {
                callback(collection[i], i);
            }*/
        }

        public static IEnumerable<TResult> MySelect<TSource, TResult>(this IEnumerable<TSource> collection, Func<TSource, int?, TResult> callback)
        {
            
            var returnCollection = new Collection<TResult>();

            foreach (var item in collection.Select((value, i) => new { value, i }))
            {
                returnCollection.Add(callback(item.value, item.i));
            }

            return returnCollection;
        }
    }
}
