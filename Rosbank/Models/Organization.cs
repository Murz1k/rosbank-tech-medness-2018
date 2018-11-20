using System.Collections.Generic;

namespace Rosbank.Models
{
    public class Organization
    {
        public string INN { get; set; } // ИНН	780531234567
        public string Account { get; set; } //	40802 810 0 0000 0000099
        public string Bank { get; set; } // банк	СЕВЕРО-ЗАПАДНЫЙ БАНК ПАО СБЕРБАНК
        public string BIK { get; set; } //БИК	044030653
        public string CorrespondentAccount { get; set; }
        public string CompanyAccount { get; set; }
        public string Document { get; set; }
    }
}