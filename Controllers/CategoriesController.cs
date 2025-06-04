using Microsoft.AspNetCore.Mvc;
using ECommerceAPI.Dto;
using ECommerceAPI.Models;
using ECommerceAPI.Interface;

namespace ECommerceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService _categoryService;

        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet("List")]
        public async Task<IActionResult> GetCategories()
        {
            var categories = await _categoryService.GetCategoriesAsync();
            var response = new ApiResponse<List<Category>>(1, "Categories retrieved successfully.", categories);
            return Ok(response);
        }

        [HttpGet("Detail/{id}")]
        public async Task<IActionResult> GetCategoryDetail(int id)
        {
            var category = await _categoryService.GetCategoryByIdAsync(id);
            if (category == null)
                return NotFound(new ApiResponse<object>(0, "Category not found.", null));

            return Ok(new ApiResponse<Category>(1, "Category retrieved successfully.", category));
        }

        [HttpPost("Add")]
        public async Task<IActionResult> AddCategory([FromForm] AddUpdateCategoryDto addCategory)
        {
            if (addCategory.Image == null || addCategory.Image.Length == 0)
                return BadRequest(new ApiResponse<object>(0, "Image is required.", null));

            var category = await _categoryService.AddCategoryAsync(addCategory);

            return CreatedAtAction(nameof(GetCategoryDetail), new { id = category.CategoryId }, new ApiResponse<Category>(1, "Category created successfully.", category));
        }

        [HttpPut("Update")]
        public async Task<IActionResult> UpdateCategory([FromForm] AddUpdateCategoryDto updateCategory)
        {
            var category = await _categoryService.UpdateCategoryAsync(updateCategory);

            if (category == null)
                return NotFound(new ApiResponse<object>(0, "Category not found.", null));

            return Ok(new ApiResponse<Category>(1, "Category updated successfully.", category));
        }

        [HttpDelete("Delete/{id}")]
        public async Task<IActionResult> DeleteCategory(int id)
        {
            var deleted = await _categoryService.DeleteCategoryAsync(id);

            if (!deleted)
                return NotFound(new ApiResponse<object>(0, "Category not found.", null));

            return Ok(new ApiResponse<object>(1, "Category deleted successfully.", null));
        }
    }
}
