/// <summary>
/// Notify the progress of an action.
/// </summary>
public class ProgressMessage : Message
{
    /// <summary>
    /// Absolute value of the development process
    /// </summary>
    public double AbsoluteValue { get; set; }

    /// <summary>
    /// Absolute value of the development process
    /// </summary>
    public double AbsoluteTotalValue { get; set; }

    /// <summary>
    /// Relative value of the development process
    /// </summary>
    public double RelativeValue { get; set; }
}
