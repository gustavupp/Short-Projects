
using System;

public class UserStatusEventArgs : EventArgs
{
    public readonly string _msg;

    public UserStatusEventArgs(string msg)
    {
        _msg = msg;
    }
}
