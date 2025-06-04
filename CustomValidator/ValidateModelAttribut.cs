using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc;

namespace ECommerceAPI.CustomValidator
{
    public class ValidateModelAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            if (!context.ModelState.IsValid)
            {
                var firstError = context.ModelState.Values
                                                .SelectMany(v => v.Errors)
                                                .Select(e => e.ErrorMessage)
                                                .FirstOrDefault() ?? "Validation failed.";

                var errorResponse = new ApiResponse<object>(0, firstError, null);
                context.Result = new ObjectResult(errorResponse)
                {
                    StatusCode = 400
                };
            }
        }

    }
}
