using ECommerceAPI.CustomValidator;
using System.ComponentModel.DataAnnotations;

namespace ECommerceAPI.Dto
{
    public class AddUpdateProductDto
    {
       
        public int? ProductId { get; set; }


        [Required(ErrorMessage = "Name is required.")]
        [MinLength(3, ErrorMessage = "Name must be at least 3 characters.")]
        [NoScriptTag(ErrorMessage = "Name cannot contain script tags.")]
        public string Name { get; set; } = null!;


        [MaxLength(1000, ErrorMessage = "Description cannot exceed 1000 characters.")]
        [NoScriptTag(ErrorMessage = "Description cannot contain script tags.")]
        public string Description { get; set; } = null!;


        [Required(ErrorMessage = "Price is required.")]
        public decimal Price { get; set; }


        [Required(ErrorMessage = "CategoryId is required.")]
        public int CategoryId { get; set; }

        
        public List<IFormFile> ProductImages { get; set; } = new List<IFormFile>();
    }
}
