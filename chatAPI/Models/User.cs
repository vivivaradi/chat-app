using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ChatAPI.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        [Required]
        [MaxLength(100)]
        public string Name { get; set; }
        public List<ChatUser> Chats { get; set; }
    }
}
