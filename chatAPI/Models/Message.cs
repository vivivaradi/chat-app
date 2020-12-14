using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ChatAPI.Models
{
    public class Message
    {
        [Key]
        public int MessageId { get; set; }
        [ForeignKey("User")]
        public int SenderId { get; set; }
        public User Sender { get; set; }
        [Required]
        public int ChatId { get; set; }
        public Chat Chat { get; set; }
        [Required]
        [MinLength(1)]
        [MaxLength(1000)]
        public string Content { get; set; }
        [Required]
        public DateTime SentAt { get; set; }
    }
}
