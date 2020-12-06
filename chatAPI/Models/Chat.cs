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
        public ICollection<ChatUser> Participants { get; set; }
        public ICollection<Message> Messages { get; set; }
    }
}
