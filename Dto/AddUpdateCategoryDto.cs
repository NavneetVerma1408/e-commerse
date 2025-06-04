using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;
using ECommerceAPI.CustomValidator;

namespace ECommerceAPI.Dto
{
    public class AddUpdateCategoryDto
    {
        public int? CategoryId { get; set; }


        [Required(ErrorMessage = "Name is required.")]
        [MinLength(3, ErrorMessage = "Name must be at least 3 characters.")]
        [NoScriptTag(ErrorMessage = "Name cannot contain script tags.")]
        public string Name { get; set; } = null!;


        [MaxLength(1000, ErrorMessage = "Description cannot exceed 1000 characters.")]
        [NoScriptTag(ErrorMessage = "Description cannot contain script tags.")]
        public string? Description { get; set; }

        public IFormFile? Image { get; set; }

    }
}
