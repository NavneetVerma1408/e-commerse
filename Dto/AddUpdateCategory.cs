namespace ECommerceAPI.Dto
{
    public class AddUpdateCategory
    {
        public int CategoryId { get; set; }
        public string Name { get; set; } = null!;
        public string? Description { get; set; }
        public IFormFile? Image { get; set; }

    }
}
