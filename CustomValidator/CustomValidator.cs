using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace ECommerceAPI.CustomValidator
{
    public class NoScriptTagAttribute : ValidationAttribute
    {
        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {
            if (value is string s && ContainsScriptTag(s))
            {
                return new ValidationResult(ErrorMessage ?? "Input contains invalid script tags.");
            }
            return ValidationResult.Success;
        }

        private bool ContainsScriptTag(string input)
        {
            return Regex.IsMatch(input, @"<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>", RegexOptions.IgnoreCase);
        }
    }

}
