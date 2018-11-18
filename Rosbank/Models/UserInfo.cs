using System.Collections.Generic;

namespace Rosbank.Models
{
    public class UserInfo
    {
        public List<Money> AllMoney { get; set; }
        public List<Money> Income { get; set; }
        public List<Money> Outcome { get; set; }
    }
}