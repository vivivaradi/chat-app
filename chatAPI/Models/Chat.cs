using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatAPI.Models
{
    public class Chat
    {
        public long Id;
        public List<User> Participants;
        public List<Message> Messages;
    }
}
