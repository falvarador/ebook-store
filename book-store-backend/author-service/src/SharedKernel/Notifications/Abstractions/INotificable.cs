public interface INotificable
{
    string Status { get; set; }
    Message Message { get; set; }
    ProgressMessage Progress { get; set; }
}
