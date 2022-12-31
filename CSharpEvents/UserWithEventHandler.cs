using System;

public class UserWithEventHandler
{
    private string Name { get; set; }
    private string Email { get; set; }
    public UserWithEventHandler(string name, string email)
    {
        Name = name;
        Email = email;
    }

    //declare EventHandler of T (don't even need to declare the type)
    public event EventHandler<UserStatusEventArgs> ListOfMethodsToCall;

    //Adds user to DB and then calls the methods that registered to be invoked once user has been added.
    public void AddUserToDb(UserWithEventHandler user)
    {
        if (ListOfMethodsToCall != null)
            ListOfMethodsToCall(this, new UserStatusEventArgs(
                $"User has just been added to DB {user.Name} | {user.Email}")
            );
    }

    //Removes user from DB and then calls the methods that registered to be invoked once user has been removed.
    public void RemoveUserFromDb(UserWithEventHandler user)
    {
        ListOfMethodsToCall?.Invoke(this, new UserStatusEventArgs(
            $"User has just been removed from DB {user.Name} | {user.Email}")
        );
    }
}

