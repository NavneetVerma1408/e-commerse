using ECommerceAPI.Dto;
using ECommerceAPI.Interface;
using ECommerceAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

public class ProductService : IProductService
{
    private readonly ECommerceContext _context;

    public ProductService(ECommerceContext context)
    {
        _context = context;
    }

    public async Task<List<Product>> GetProductsAsync()
    {
        return await _context.Products.ToListAsync();
    }

    public async Task<Product?> GetProductByIdAsync(int id)
    {
        return await _context.Products.FindAsync(id);
    }

    public async Task<(bool IsSuccess, string ErrorMessage, Product? Product)> AddProductAsync(AddUpdateProductDto dto)
    {
        var category = await _context.Categories.FindAsync(dto.CategoryId);
        if (category == null)
        {
            return (false, "Category Id not exist", null);
        }

        var product = new Product
        {
            Name = dto.Name,
            CategoryId = dto.CategoryId,
            Description = dto.Description,
            Price = dto.Price,
        };

        _context.Products.Add(product);
        await _context.SaveChangesAsync();

        return (true, string.Empty, product);
    }
}
