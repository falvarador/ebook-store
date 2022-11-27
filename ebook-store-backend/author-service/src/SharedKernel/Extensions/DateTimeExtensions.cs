public static class DateTimeExtensions
{
    public static DateTime? SetKindUtc(this DateTime? dateTime)
    {
        return (dateTime.HasValue)
            ? dateTime.Value.SetKindUtc()
            : null;
    }
    public static DateTime SetKindUtc(this DateTime dateTime)
    {
        return (dateTime.Kind is DateTimeKind.Utc)
            ? dateTime
            : DateTime.SpecifyKind(dateTime, DateTimeKind.Utc);
    }
}
