using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ChatAPI.Models;

namespace ChatAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        private readonly ApiContext _context;

        public MessagesController(ApiContext context)
        {
            _context = context;
        }

        [HttpGet("/message/{id}")]
        public async Task<ActionResult<Message>> GetMessage(int id)
        {
            return await _context.Messages.Where(m => m.MessageId == id).FirstOrDefaultAsync();
        }

        // GET: api/Messages/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Message>>> GetMessagesByChat(int id)
        {
            return await _context.Messages.Include(m => m.Sender).Where(m => m.ChatId == id).OrderBy(m => m.SentAt).ToListAsync();
        }

        // PUT: api/Messages/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMessage(int id, Message message)
        {
            if (id != message.MessageId)
            {
                return BadRequest();
            }

            _context.Entry(message).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MessageExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Messages
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Message>> PostMessage(Message message)
        {
            message.SentAt = DateTime.Now;
            _context.Messages.Add(message);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMessage", new { id = message.MessageId }, message);
        }

        // DELETE: api/Messages/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Message>> DeleteMessage(int id)
        {
            var message = await _context.Messages.FindAsync(id);
            if (message == null)
            {
                return NotFound();
            }

            _context.Messages.Remove(message);
            await _context.SaveChangesAsync();

            return message;
        }

        private bool MessageExists(int id)
        {
            return _context.Messages.Any(e => e.MessageId == id);
        }
    }
}
