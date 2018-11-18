using System;

namespace Rosbank.Models
{
    public class Operation : Document
    {
        public User User { get; set; }
        public Organization Organization { get; set; }
        public string Currency { get; set; }
        public long Amount { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
        public DateTime Time { get; set; }
        public int Type { get; set; }
        public bool isIncome { get; set; }
    }
}