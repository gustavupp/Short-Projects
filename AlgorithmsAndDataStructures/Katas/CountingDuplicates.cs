using System;

public class Kata
{
  public static int DuplicateCount(string str)
  {
    str.ToLower();

    foreach (var c in str)
    {
        System.Console.WriteLine(c);
    }

    return -1;
  }
}