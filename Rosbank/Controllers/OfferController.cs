using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Rosbank.Models;
using Rosbank.Services;

namespace Rosbank.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class OfferController : ControllerBase
    {
        private OfferService context;
        public OfferController(OfferService context)
        {
            this.context = context;
        }

        [HttpGet]
        public IEnumerable<Offer> Get() => this.context.GetAll();

        [HttpGet("{id}")]
        public Offer Get(string id) => this.context.GetOne(id);

        [HttpPost]
        public Offer Post([FromBody] Offer offer)
        {
            return this.context.Add(offer);
        }

        [HttpPut("{id}")]
        public Offer Put([FromBody] Offer offer)
        {
            this.context.Update(offer.Id, offer);
            return this.context.GetOne(offer.Id);
        }

        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            this.context.Remove(id);
        }
    }
}
