using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;

public class GetAuthorById
{
    public class AuthorById : IRequest<AuthorDto>
    {
        public string? CorrelationId { get; set; }
    }

    public class RequestHandler : IRequestHandler<AuthorById, AuthorDto>
    {
        public readonly ApplicationDbContext _context;
        public readonly IMapper _mapper;

        public RequestHandler(ApplicationDbContext context, IMapper mapper)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        public async Task<AuthorDto> Handle(AuthorById request, CancellationToken cancellationToken)
        {
            var autor = await _context.BookAuthors
                .Where(x => x.CorrelationId == request.CorrelationId)
                .FirstOrDefaultAsync();

            return (autor is null)
                ? throw new Exception("Author not found")
                : _mapper.Map<BookAuthor, AuthorDto>(autor);
        }

        Task<AuthorDto> IRequestHandler<AuthorById, AuthorDto>.Handle(AuthorById request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}