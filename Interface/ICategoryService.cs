using ECommerceAPI.Dto;
using ECommerceAPI.Models;

namespace ECommerceAPI.Interface
{
    public interface ICategoryService
    {
        Task<List<Category>> GetCategoriesAsync();
        Task<Category?> GetCategoryByIdAsync(int id);
        Task<Category> AddCategoryAsync(AddUpdateCategoryDto dto);
        Task<Category?> UpdateCategoryAsync(AddUpdateCategoryDto dto);
        Task<bool> DeleteCategoryAsync(int id);
    }
}
