using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace ChatAPI.Models
{
    public class Chat
    {
        public int ChatId { get; set; }
        public string Name { get; set; }
        public List<User> Participants { get; set; }
        public List<Message> Messages { get; set;  }
    }
}
