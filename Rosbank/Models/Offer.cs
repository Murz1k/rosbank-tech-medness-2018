namespace Rosbank.Models
{
    public class Offer : Document
    {
        public UserTemplate UserTemplate { get; set; }
        public string Text { get; set; }
        public ServicesEnum Service { get; set; }
    }
}