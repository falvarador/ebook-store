public static class Messages
{
    public static class General
    {
        // TODO Confirm the use of resources
        public static Message READY = new Message()
        {
            Id = 1,
            Level = Level.Information,
            Title = "Action completed successfully",
        };

        public static Message EXCEPTION = new Message()
        {
            Id = 2,
            Level = Level.Exception,
            Title = "An exception occurred",
        };

        public static ConcurrencyMessage CONCURRENCY_DELETE = new ConcurrencyMessage()
        {
            Id = 3,
            Level = Level.Exception,
            Title = "It was not possible to apply the deletion. The data was deleted by another user.",
            Description = "The action was canceled because the data you are trying to delete no longer exists in the database and were deleted by another user.",
        };

        public static ConcurrencyMessage CONCURRENCY_UPDATE = new ConcurrencyMessage()
        {
            Id = 4,
            Level = Level.Exception,
            Title = "It was not possible to apply the modification. The data were modified by another user.",
            Description = "The action was canceled because the data you are trying to modify were previously modified by another user.",
        };

        public static Message NO_EXISTS = new Message()
        {
            Id = 5,
            Level = Level.Warning,
            Title = "The requested data does not exist.",
            Description = "The action tried to affect data that does not exist."
        };
    }
}
