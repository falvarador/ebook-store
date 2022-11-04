using System.Text.Json.Serialization;

public class Message
{
    public Message()
    {
        Title = string.Empty;
        Friendly = string.Empty;
        Params = new List<string>();
    }

    public Message(int id, Level level, string description) : this()
    {
        this.Id = id;
        this.Level = level;
        this.Description = description;
    }

    public Message(int id, Level level, string message, string friendly) : this(id, level, message)
    {
        this.Friendly = friendly;
    }

    /// <summary>
    /// Message id
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// Level of impact on the application of the situation that gave rise to the message.
    /// </summary>
    public Level Level { get; set; }

    /// <summary>
    /// Message title.
    /// </summary>
    public string Title { get; set; }

    /// <summary>
    /// Message description.
    /// </summary>
    string _description = "";

    /// <summary>
    /// Message description. If there is a parameter collection, it is expected that the value of the _description variable
    /// contains a Format String ({0} {1} {2}).
    /// </summary>        
    public string Description
    {
        get
        {
            if (Params.Any())
                return string.Format(_description, Params.ToArray());

            return _description;
        }
        set
        {
            _description = value;
        }
    }

    /// <summary>
    /// Detail description and modifiable by the developer about the situation found
    /// </summary>
    public string Friendly { get; set; }

    /// <summary>
    /// Optional parameters that may be required by Description
    /// Only if Description includes a Format String {0}
    /// </summary>
    [JsonIgnore]
    public List<string> Params { get; set; }

    /// <summary>
    /// In case there is any code to execute once the message has been processed
    /// </summary>
    [JsonIgnore]
    public Action? Operation { get; set; }
}
