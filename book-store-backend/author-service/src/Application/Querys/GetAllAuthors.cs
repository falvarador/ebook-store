using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;

public class GetAllAuthors
{
    public class BookAuthors : IRequest<List<AuthorDto>> { }

    public class RequestHandler : IRequestHandler<BookAuthors, List<AuthorDto>>
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public RequestHandler(ApplicationDbContext context, IMapper mapper)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        public async Task<List<AuthorDto>> Handle(BookAuthors request, CancellationToken cancellationToken)
        {
            var authors = await _context.BookAuthors.ToListAsync();
            return _mapper.Map<List<BookAuthor>, List<AuthorDto>>(authors);
        }
    }
}
