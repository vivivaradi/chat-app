using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatAPI.Models
{
    public class ApiContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=.\sqlexpress;Initial Catalog=ChatDB;Integrated Security=True");
        }
        public ApiContext(DbContextOptions<ApiContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }

        public DbSet<Chat> Chats { get; set; }

        public DbSet<Message> Messages { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<ChatUser>().HasKey(cu => new { cu.ChatId, cu.UserId });
            builder.Entity<ChatUser>().HasOne(cu => cu.Chat).WithMany(cu => cu.Participants).HasForeignKey(cu => cu.ChatId);
            builder.Entity<ChatUser>().HasOne(cu => cu.User).WithMany(cu => cu.Chats).HasForeignKey(cu => cu.UserId);
        }
    }
}