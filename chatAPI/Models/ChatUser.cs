﻿namespace ChatAPI.Models
{
    public class ChatUser
    {
        public int Id { get; set; }
        public int ChatId { get; set; }
        public Chat Chat { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
