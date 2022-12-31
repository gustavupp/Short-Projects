public class UserWithEvents
{
    private string Name { get; set; }
    private string Email { get; set; }
    public UserWithEvents(string name, string email)
    {
        Name = name;
        Email = email;
    }

    //declare delegate type
    public delegate void UserStatusHandler(string msg);

    //declare event (which creates a private delegate object + un/registration methods)
    public event UserStatusHandler ListOfMethodsToCall;

    public void AddUserToDb(UserWithEvents user)
    {
        //Adds user to DB and then calls the methods that registered to be invoked once user has been added.
        if (ListOfMethodsToCall != null)
            ListOfMethodsToCall($"User has just been added to DB {user.Name} | {user.Email}");
    }

    public void RemoveUserFromDb(UserWithEvents user)
    {
        //Removes user from DB and then calls the methods that registered to be invoked once user has been removed.
        ListOfMethodsToCall?.Invoke($"User has just been removed from DB {user.Name} | {user.Email}");
    }
}

