namespace Rosbank.Models
{
    public class Account : Document
    {
        public Money Balance { get; set; }
        public User Owner { get; set; }

    }
}



