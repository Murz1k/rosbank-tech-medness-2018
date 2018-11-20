using System;

namespace Rosbank.Models
{
    public class OperationRequest
    {
        public string Type { get; set; }
        public DateTime After { get; set; }
        public DateTime Before { get; set; }
        public string User { get; set; }
        public int Offset { get; set; }
        public int Size { get; set; }
    }
}