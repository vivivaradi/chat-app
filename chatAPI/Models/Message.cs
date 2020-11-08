using System;

public class Message {
    public long Id { get; set; }
    public User Sender { get; set; }
    public string Content { get; set; }
    public DateTime TimeOfSend { get; set; }
}