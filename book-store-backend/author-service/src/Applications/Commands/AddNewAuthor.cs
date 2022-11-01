using MediatR;

public class AddNewAuthor
{
    public class Request : IRequest
    {
        public string? Name { get; set; }
        public string? Surname { get; set; }
        public DateTime? Birthday { get; set; }
    }

    public class RequestHandler : IRequestHandler<Request>
    {
        public readonly ApplicationDbContext _context;

        public RequestHandler(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(Request request, CancellationToken cancellationToken)
        {
            var bookAuthor = new BookAuthor
            {
                CorrelationId = Guid.NewGuid().ToString(),
                Name = request.Name,
                Surname = request.Surname,
                Birthday = request.Birthday.SetKindUtc()
            };

            _context.BookAuthors.Add(bookAuthor);
            var sc = await _context.SaveChangesAsync();

            return (sc > 0)
                ? Unit.Value
                : throw new Exception("Error saving data");
        }
    }
}
