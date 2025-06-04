namespace ECommerceAPI.Interface
{
    public interface IShareService
    {
        string SaveImage(IFormFile image, string directoryPath);
        void DeleteImage(string relativePath);

    }
}
