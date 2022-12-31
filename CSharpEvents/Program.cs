using System;

namespace CSharpEvents
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /*********************** Callbacks ***************************/

            //create user obj
            var newUser = new UserWithCallback("Gus", "gus@email.com");

            //register methods you want to call once event is fired
            var handler = new UserWithCallback.UserStatusHandler(SendWelcomeEmail);
            newUser.AddMethodToCall(new UserWithCallback.UserStatusHandler(SendWelcomeInAppNotification));
            newUser.AddMethodToCall(handler);

            //the action that will trigger the event(execution of the methods)
            newUser.AddUserToDb(newUser);
            newUser.RemoveUserFromDb(newUser);

            /*********************** Callbacks ***************************/





            /*********************** Events ***************************/

            //create user obj
            var newUser1 = new UserWithEvents("Lisa", "lisa@email.com");

            //register methods you want to call once event is fired
            newUser1.ListOfMethodsToCall += new UserWithEvents.UserStatusHandler(SendWelcomeEmail);
            newUser1.ListOfMethodsToCall += SendWelcomeInAppNotification;

            //the action that will trigger the event(execution of the methods)
            newUser1.AddUserToDb(newUser1);
            newUser1.RemoveUserFromDb(newUser1);

            /*********************** Events ***************************/





            /*********************** Events with Args ***************************/

            //create user obj
            var newUser2 = new UserWithEventArgs("Aline", "aline@email.com");

            //register methods you want to call once event is fired
            newUser2.ListOfMethodsToCall += SendWelcomeEmailWithArgs;
            newUser2.ListOfMethodsToCall += SendWelcomeInAppNotificationWithArgs;

            //the action that will trigger the event(execution of the methods)
            newUser2.AddUserToDb(newUser2);
            newUser2.RemoveUserFromDb(newUser2);

            /*********************** Events with Args ***************************/







            /*********************** With EventHandler ***************************/

            //create user obj
            var newUser3 = new UserWithEventHandler("Dirce", "dirce@email.com");

            //register methods you want to call once event is fired
            //could either put it in a variable and pass in the reference(if for e.g. you want to remove or do something else with it later)
            var handler1 = new EventHandler<UserStatusEventArgs>(SendWelcomeEmailWithArgs);
            newUser3.ListOfMethodsToCall += handler1;

            //or add it directly
            newUser3.ListOfMethodsToCall += SendWelcomeInAppNotificationWithArgs;

            //the action that will trigger the event(execution of the methods)
            newUser3.AddUserToDb(newUser3);
            newUser3.RemoveUserFromDb(newUser3);

            /*********************** With EventHandler ***************************/
        }

        private static void SendWelcomeEmail(string msg)
        {
            Console.WriteLine("\n ********** Email ************");
            Console.WriteLine(msg);
            Console.WriteLine("\n ******************************");
            //SendEmail(msg)    
        } 
        
        private static void SendWelcomeInAppNotification(string msg)
        {
            Console.WriteLine("\n ********** InApp Notification ************");
            Console.WriteLine(msg);
            Console.WriteLine("\n ******************************");
            //SendNotification(msg)    
        }

       






        /************** WITH ARGS *******************/

        private static void SendWelcomeEmailWithArgs(object sender, UserStatusEventArgs e)
        {
            Console.WriteLine("\n ********** Email ************");
            Console.WriteLine($"Message {e._msg} from {sender}");
            Console.WriteLine("\n ******************************");
            //SendEmail(e._msg)    
        }

        private static void SendWelcomeInAppNotificationWithArgs(object sender, UserStatusEventArgs e)
        {
            Console.WriteLine("\n ********** InApp Notification ************");
            Console.WriteLine($"Message {e._msg} from {sender}");
            Console.WriteLine("\n ******************************");
            //SendNotification(e._msg)    
        }

        /**********************************************/
    }
}

