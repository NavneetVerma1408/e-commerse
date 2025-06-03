using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ECommerceAPI.Models;
using ECommerceAPI.Dto;

namespace ECommerceAPI.Controllers
{
    [Route("api/[controller]")]
   // [ApiController]
    public class CategoryController : Controller
    {
        private readonly ECommerceContext _context;

        public CategoryController(ECommerceContext context)
        {
            _context = context;
        }

        [HttpGet("List")]
        public async Task<IActionResult> GetCategories()
        {
            var categories = await _context.Categories.ToListAsync();
            return Ok(categories);
        }

        [HttpGet("Detail/{id}")]
        public async Task<IActionResult> GetCategory(int id)
        {
            var category = await _context.Categories.FindAsync(id);
            if (category == null)
                return NotFound();

            return Ok(category);
        }

        [HttpPost("Add")]
        public async Task<IActionResult> CreateCategory([FromForm] AddUpdateCategory addCategory)
        {
            if (addCategory.Image == null || addCategory.Image.Length == 0)
                return BadRequest("Image is required.");

            string fileNameWithExtention = addCategory.Image.FileName.ToString();
            int index = fileNameWithExtention.LastIndexOf(".");
            string fileNameWithoutExtention = fileNameWithExtention.Substring(0, index);
            string fileExtention = fileNameWithExtention.Substring(index);

            var filePath = Path.Combine("wwwroot/uploads/categories", fileNameWithoutExtention + DateTime.Now.ToString("ddMMyyHHmmss") + fileExtention); ;
            Directory.CreateDirectory(Path.GetDirectoryName(filePath));
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await addCategory.Image.CopyToAsync(stream);
            }

            var category = new Category
            {
                Name = addCategory.Name,
                Description = addCategory.Description,
                Image = $"/uploads/categories/{addCategory.Image.FileName}"
            };

            _context.Categories.Add(category);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCategory), new { id = category.CategoryId }, category);
        }

        
        [HttpPut("Update/{id}")]
        public async Task<IActionResult> UpdateCategory(int id, [FromForm] string name, [FromForm] string description, [FromForm] IFormFile image)
        {
            var category = await _context.Categories.FindAsync(id);
            if (category == null)
                return NotFound();

            category.Name = name;
            category.Description = description;

            // Update image if provided
            if (image != null && image.Length > 0)
            {
                var filePath = Path.Combine("wwwroot/uploads/categories", image.FileName);
                Directory.CreateDirectory(Path.GetDirectoryName(filePath)); // Ensure the directory exists
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await image.CopyToAsync(stream);
                }
                category.Image = $"/uploads/categories/{image.FileName}";
            }

            _context.Entry(category).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("Delete/{id}")]
        public async Task<IActionResult> DeleteCategory(int id)
        {
            var category = await _context.Categories.FindAsync(id);
            if (category == null)
                return NotFound();

            // Remove associated image if exists
            if (!string.IsNullOrEmpty(category.Image))
            {
                var filePath = Path.Combine("wwwroot", category.Image.TrimStart('/'));
                if (System.IO.File.Exists(filePath))
                    System.IO.File.Delete(filePath);
            }

            _context.Categories.Remove(category);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        [HttpDelete("RTest")]
        public async Task<IActionResult> Test([FromForm] IFormFile file)
        {
            

            return NoContent();
        }
    }
}
