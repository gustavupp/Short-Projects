public static class Kata
{
  public static int Solution(int value)
  {
    if(value < 0) return 0;

    int result = 0;

    for (var i = 1; i < value; i++){
      if(i % 3 == 0 || i % 5 == 0)
      {
        result += i;
      }
    }
    return result;
  }

    //shorter version
    public static int Solution1(int value)
    {
    return Enumerable.Range(0, value).Where(e => e % 3 == 0 || e % 5 == 0).Sum();
    }
}

