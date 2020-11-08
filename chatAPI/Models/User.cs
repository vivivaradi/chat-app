using System.Collections.Generic;

public class User {
    public long Id { get; set; }
    public string Name { get; set; }
    public List<User> FriendList;
}