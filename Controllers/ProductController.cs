using ECommerceAPI.CustomValidator;
using ECommerceAPI.Dto;
using ECommerceAPI.Interface;
using ECommerceAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ECommerceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet("List")]
        public async Task<IActionResult> GetProducts()
        {
            var products = await _productService.GetProductsAsync();
            var response = new ApiResponse<List<Product>>(1, "Products retrieved successfully.", products);
            return Ok(response);
        }

        [HttpGet("Detail/{id}")]
        public async Task<IActionResult> GetProductDetail(int id)
        {
            var product = await _productService.GetProductByIdAsync(id);
            if (product == null)
            {
                return NotFound(new ApiResponse<object>(0, "Product not found.", null));
            }
            return Ok(new ApiResponse<Product>(1, "Product retrieved successfully.", product));
        }

        [HttpPost("Add")]
        public async Task<IActionResult> AddProduct(AddUpdateProductDto addProduct)
        {
            var (IsSuccess, ErrorMessage, Product) = await _productService.AddProductAsync(addProduct);
            if (!IsSuccess)
            {
                return BadRequest(new ApiResponse<object>(0, ErrorMessage, null));
            }

            return Ok(new ApiResponse<Product>(1, "Product added successfully.", Product));
        }
    }
}
