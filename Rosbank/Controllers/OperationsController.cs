using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Rosbank.Models;
using Rosbank.Services;

namespace Rosbank.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OperationsController : ControllerBase
    {
        private OperationsService context;
        public OperationsController(OperationsService context)
        {
            this.context = context;
        }

        [HttpGet]
        public IEnumerable<Operation> Get() => this.context.GetAll();

        [HttpGet("{id}")]
        public Operation Get(string id) => this.context.GetOne(id);

        [HttpGet("type")]
        public List<Operation> GetOperations([FromQuery] OperationRequest request)
             => this.context.GetOperations(request);

        [HttpPost]
        public Operation Post([FromBody] Operation user)
        {
            this.context.Add(user);
            return this.context.GetOne(user.Id);
        }

        [HttpPut("{id}")]
        public Operation Put([FromBody] Operation user)
        {
            this.context.Update(user.Id, user);
            return this.context.GetOne(user.Id);
        }

        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            this.context.Remove(id);
        }

        [HttpGet("info")]
        public UserInfo GetUserInformation(string id)
        {
            return new UserInfo
            {
                AllMoney = null,
                Income = null,
                Outcome = null,
            };
        }
    }
}
