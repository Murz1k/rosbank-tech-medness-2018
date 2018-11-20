using System.Collections.Generic;

namespace Rosbank.Models
{
    public class OperationsHistorySummary
    {
        public List<Money> Income { get; set; }
        public List<Money> Outcome { get; set; }
    }
}