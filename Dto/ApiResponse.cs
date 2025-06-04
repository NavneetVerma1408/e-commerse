public class ApiResponse<T>
{
    public Meta Meta { get; set; } = new Meta();
    public T Data { get; set; } = default!;

    public ApiResponse() { }

    public ApiResponse(int statusCode, string statusMsg, T data)
    {
        Meta = new Meta
        {
            StatusCode = statusCode,
            StatusMsg = statusMsg
        };
        Data = data;
    }
}

public class Meta
{
    public int StatusCode { get; set; }
    public string StatusMsg { get; set; } = string.Empty;
}
