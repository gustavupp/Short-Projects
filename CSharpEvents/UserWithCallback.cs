public class UserWithDelegates
{
    private string Name { get; set; }
    private string Email { get; set; }
    public UserWithDelegates(string name, string email)
    {
        Name = name;
        Email = email;
    }


    public delegate void UserStatusHandler(string msg);
    private UserStatusHandler listOfMethodsToCall;

    public void AddMethodToCall(UserStatusHandler method) => listOfMethodsToCall += method;
    public void RemoveMethodToCall(UserStatusHandler method) => listOfMethodsToCall -= method;
    public void AddUserToDb(UserWithDelegates user)
    {
        //Adds user to DB and then calls the methods that registered to be invoked.
        if (listOfMethodsToCall != null)
            listOfMethodsToCall($"User has just been added to DB {user.Name} | {user.Email}");
    }
     
    public void RemoveUserFromDb(UserWithDelegates user)
    {
        //Removes user from DB and then calls the methods that registered to be invoked.
        listOfMethodsToCall?.Invoke($"User has just been removed from DB {user.Name} | {user.Email}");
    }
}

