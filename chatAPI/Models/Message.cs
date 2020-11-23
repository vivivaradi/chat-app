﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatAPI.Models
{
    public class Message
    {
        public int MessageId { get; set; }
        public User Sender { get; set; }
        public Chat Chat { get; set; }
        public string Content { get; set; }
        public DateTime SentAt { get; set; }
    }
}
