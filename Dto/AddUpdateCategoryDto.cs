namespace ECommerceAPI.Dto
{
    public class AddUpdateCategoryDto
    {
        public int CategoryId { get; set; }
        public string Name { get; set; } = null!;
        public string? Description { get; set; }
        public IFormFile? Image { get; set; }

    }
}
