public class ConcurrencyMessage : Message
{
    public object? Original { get; set; }
    public object? Current { get; set; }
}
