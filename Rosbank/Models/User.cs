using System.Collections.Generic;

namespace Rosbank.Models
{
    public class User : Document
    {
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public UserTemplate Template { get; set; }
        public UserInfo AccountsSummary { get; set; }
    }
}