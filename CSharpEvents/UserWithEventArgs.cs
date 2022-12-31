public class UserWithEventArgs
{
    private string Name { get; set; }
    private string Email { get; set; }
    public UserWithEventArgs(string name, string email)
    {
        Name = name;
        Email = email;
    }

    //declare delegate type
    public delegate void UserStatusHandler(object sender, UserStatusEventArgs e);

    //declare event (which creates a private delegate object + un/registration methods)
    public event UserStatusHandler ListOfMethodsToCall;

    //Adds user to DB and then calls the methods that registered to be invoked once user has been added.
    public void AddUserToDb(UserWithEventArgs user)
    {
        if (ListOfMethodsToCall != null)
            ListOfMethodsToCall(this,new UserStatusEventArgs(
                $"User has just been added to DB {user.Name} | {user.Email}")
            );
    }

    //Removes user from DB and then calls the methods that registered to be invoked once user has been removed.
    public void RemoveUserFromDb(UserWithEventArgs user)
    {
        ListOfMethodsToCall?.Invoke(this, new UserStatusEventArgs(
            $"User has just been removed from DB {user.Name} | {user.Email}")
        );
    }
}

