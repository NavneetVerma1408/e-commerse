using System;
using System.Collections.Generic;

namespace ECommerceAPI.Models
{
    public partial class CustomerAddress
    {
        public int AddressId { get; set; }
        public int? CustomerId { get; set; }
        public string AddressLine1 { get; set; } = null!;
        public string? AddressLine2 { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }
        public string? PostalCode { get; set; }
        public string? Country { get; set; }

        public virtual Customer? Customer { get; set; }
    }
}
