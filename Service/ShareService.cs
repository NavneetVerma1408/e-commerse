using ECommerceAPI.Interface;

namespace ECommerceAPI.Service
{
    public class ShareService: IShareService
    {
        private readonly IWebHostEnvironment _env;

        public ShareService(IWebHostEnvironment env)
        {
            _env = env;
        }

        public string SaveImage(IFormFile image, string directoryPath)
        {
            if (image == null || image.Length == 0)
                return string.Empty;

            var uploadsFolder = Path.Combine(_env.WebRootPath, directoryPath);
            if (!Directory.Exists(uploadsFolder))
                Directory.CreateDirectory(uploadsFolder);

            string fileExtension = Path.GetExtension(image.FileName);
            string fileName = Path.GetFileNameWithoutExtension(image.FileName);
            string uniqueFileName = $"{fileName}_{DateTime.Now:yyyyMMddHHmmss}{fileExtension}";

            var filePath = Path.Combine(uploadsFolder, uniqueFileName);

            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                image.CopyTo(fileStream);
            }

            return $"/{directoryPath.TrimEnd('/')}/{uniqueFileName}";
        }

        public void DeleteImage(string relativePath)
        {
            if (string.IsNullOrEmpty(relativePath)) return;

            var filePath = Path.Combine(_env.WebRootPath, relativePath.TrimStart('/').Replace('/', Path.DirectorySeparatorChar));
            if (File.Exists(filePath))
            {
                File.Delete(filePath);
            }
        }
    }
}
