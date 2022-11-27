using System;

namespace CSharpEvents
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //create user obj
            var newUser = new User("Gus", "gus@email.com");

            //register methods you want to call once event is fired
            var handler = new User.UserStatusHandler(SendWelcomeEmail);
            newUser.AddMethodToCall(new User.UserStatusHandler(SendWelcomeInAppNotification));
            newUser.AddMethodToCall(handler);

            //the action that will trigger the event(execution of the methods)
            newUser.AddUserToDb(newUser);
            newUser.RemoveUserFromDb(newUser);
        }

        private static void SendWelcomeEmail(string msg)
        {
            Console.WriteLine("\n ********** Email ************");
            Console.WriteLine(msg);
            //SendEmail(msg)    
        }

        private static void SendWelcomeInAppNotification(string msg)
        {
            Console.WriteLine("\n e3 ********** InApp Notification ************");
            Console.WriteLine(msg);
            //SendNotification(msg)    
        }
    }
}

