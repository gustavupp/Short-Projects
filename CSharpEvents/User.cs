public class User
{
    private string Name { get; set; }
    private string Email { get; set; }
    public User(string name, string email)
    {
        Name = name;
        Email = email;
    }

    public delegate void UserStatusHandler(string msg);
    private UserStatusHandler listOfMethodsToCall;

    public void AddMethodToCall(UserStatusHandler method)
    {
        listOfMethodsToCall += method;
    }

    public void RemoveMethodToCall(UserStatusHandler method)
    {
        listOfMethodsToCall -= method;
    }

    public void AddUserToDb(User user)
    {
        //Adds user to DB and then calls the methods that registered to be invoked once user has been added.

        if (listOfMethodsToCall != null)
            listOfMethodsToCall($"\n ************* User has just been added to DB {user.Name} | {user.Email} **************");
    }
     
    public void RemoveUserFromDb(User user)
    {
        //Removes user from DB and then calls the methods that registered to be invoked once user has been removed.

        listOfMethodsToCall?.Invoke($"\n ************* User has just been removed from DB {user.Name} | {user.Email} **************");
    }
}

