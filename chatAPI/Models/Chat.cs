using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;



namespace ChatAPI.Models
{
    public class Chat
    {
        [Key]
        public int ChatId { get; set; }
        [Required]
        public DateTime TimeOfCreation { get; set; }
        public List<ChatUser> Participants { get; set; }
        public List<Message> Messages { get; set; }
    }
}
