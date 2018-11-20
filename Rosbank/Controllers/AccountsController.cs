using Microsoft.AspNetCore.Mvc;
using Rosbank.Services;
using Rosbank.Models;
using System.Collections.Generic;

namespace Rosbank.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {

        private AccountsService context { get; set; }

        public AccountsController(AccountsService context)
        {
            this.context = context;
        }

        [HttpGet]
        public List<Account> GetAll() => this.context.GetAll();

        [HttpGet("{id}")]
        public Account Get(string id) => this.context.GetOne(id);

        [HttpPost]
        public Account Post([FromBody] Account account)
        {
            this.context.Add(account);
            return this.context.GetOne(account.Id);
        }

        [HttpPut("{id}")]
        public Account Put([FromBody] Account account)
        {
            this.context.Update(account.Id, account);
            return this.context.GetOne(account.Id);
        }

        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            this.context.Remove(id);
        }
    }
}