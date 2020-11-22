using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatAPI.Models
{
    public class Message
    {
        public long Id;
        public User Sender;
        public string Content;
        public DateTime SentAt;
    }
}
