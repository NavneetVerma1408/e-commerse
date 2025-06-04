namespace ECommerceAPI.Service
{
    using ECommerceAPI.Dto;
    using ECommerceAPI.Interface;
    using ECommerceAPI.Models;
    using Microsoft.EntityFrameworkCore;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public class CategoryService : ICategoryService
    {
        private readonly ECommerceContext _context;
        private readonly IShareService _shareService;

        public CategoryService(ECommerceContext context, IShareService shareService)
        {
            _context = context;
            _shareService = shareService;
        }

        public async Task<List<Category>> GetCategoriesAsync()
        {
            return await _context.Categories.ToListAsync();
        }

        public async Task<Category?> GetCategoryByIdAsync(int id)
        {
            return await _context.Categories.FindAsync(id);
        }

        public async Task<Category> AddCategoryAsync(AddUpdateCategoryDto dto)
        {
            var imagePath = _shareService.SaveImage(dto.Image!, "uploads/categories/");

            var category = new Category
            {
                Name = dto.Name,
                Description = dto.Description,
                Image = imagePath
            };

            _context.Categories.Add(category);
            await _context.SaveChangesAsync();

            return category;
        }

        public async Task<Category?> UpdateCategoryAsync(AddUpdateCategoryDto dto)
        {
            var category = await _context.Categories.FindAsync(dto.CategoryId);
            if (category == null) return null;

            category.Name = dto.Name;
            category.Description = dto.Description;

            if (dto.Image != null && dto.Image.Length > 0)
            {
                // Delete old image if exists
                if (!string.IsNullOrEmpty(category.Image))
                {
                    _shareService.DeleteImage(category.Image);
                }

                category.Image = _shareService.SaveImage(dto.Image, "uploads/categories/");
            }

            _context.Entry(category).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return category;
        }

        public async Task<bool> DeleteCategoryAsync(int id)
        {
            var category = await _context.Categories.FindAsync(id);
            if (category == null) return false;

            if (!string.IsNullOrEmpty(category.Image))
            {
                _shareService.DeleteImage(category.Image);
            }

            _context.Categories.Remove(category);
            await _context.SaveChangesAsync();

            return true;
        }
    }
}
