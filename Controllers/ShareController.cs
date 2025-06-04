using Microsoft.AspNetCore.Mvc;

namespace ECommerceAPI.Controllers
{
    public class ShareController : Controller
    {
        private string SaveImage(IFormFile image, string directoryPath)
        {
            string fileNameWithExtension = image.FileName;
            int index = fileNameWithExtension.LastIndexOf(".");
            string fileName = fileNameWithExtension.Substring(0, index) + DateTime.Now.ToString("ddMMyyHHmmss") + fileNameWithExtension.Substring(index);

            var filePath = Path.Combine("wwwroot/" + directoryPath, fileName);
            Directory.CreateDirectory(Path.GetDirectoryName(filePath)!);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                image.CopyTo(stream);
            }

            return $"/{directoryPath}{fileName}";
        }

    }
}
