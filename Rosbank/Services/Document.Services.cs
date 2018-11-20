using System;
using System.Collections.Generic;
using System.Linq;
using Rosbank.Models;

namespace Rosbank.Services
{
    public class UsersService : DBService<User>
    {
        public UsersService() : base("users") { }
    }

    public class AccountsService : DBService<Account>
    {
        public AccountsService() : base("accounts") { }
    }

    public class OfferService : DBService<Offer>
    {
        public OfferService() : base("offers") { }
    }

    public class OperationsService : DBService<Operation>
    {
        public OperationsService() : base("operations") { }


        public List<Operation> GetOperations(OperationRequest request)
        {
            var response = Client.Search<Operation>(s => s
                .Size(request.Size)
                .From(request.Offset)
                .Query(q => q
                    .Bool(b => b
                    .Filter(filter => filter
                        .DateRange(m => m
                            .Field(f => f.Time)
                            .GreaterThanOrEquals(request.After)
                            .Field(f => f.Time)
                            .LessThanOrEquals(request.Before)))
                    .Must(m =>
                        m.Match(c => c
                            .Field(f => f.Type)
                            .Query(request.Type)))
                    .Must(m =>
                        m.Match(c => c
                            .Field(f => f.User)
                            .Query(request.User))))
            ));

            return response.Documents.ToList();
        }

        public OperationsHistorySummary GetOperationsHistorySummary()
        {
            var currencies = new List<string>{
                "rub", "usd", "eur"
            };

            return new OperationsHistorySummary
            {
                Income = new List<Money>{
                    new Money{Currency="RUB", Amount=123123}
                },
                Outcome = new List<Money>{
                    new Money{Currency="RUB", Amount=123123123}
                }
            };
        }
    }
}