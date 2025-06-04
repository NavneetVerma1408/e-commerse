using ECommerceAPI.Dto;
using ECommerceAPI.Models;

namespace ECommerceAPI.Interface
{
    public interface IProductService
    {
        Task<List<Product>> GetProductsAsync();
        Task<Product?> GetProductByIdAsync(int id);
        Task<(bool IsSuccess, string ErrorMessage, Product? Product)> AddProductAsync(AddUpdateProductDto dto);
    }
}
