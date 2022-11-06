public class AuthorUseCase : IAuthorUseCase
{
    private readonly IUnitOfWork _unitOfWork;

    public AuthorUseCase(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork ?? throw new ArgumentNullException(nameof(unitOfWork));
    }

    public async Task<IEnumerable<AuthorDto>> GetAllAsync()
    {
        var authors = await _unitOfWork.RepositoryType<BookAuthor>()
            .FindAllAsync();

        return authors.Select(e => new AuthorDto
        {
            Name = e.Name,
            Surname = e.Surname,
            Birthday = e.Birthday,
            CorrelationId = e.CorrelationId,
        });
    }

    public async Task<AuthorDto> GetAsync(string correlationId)
    {
        var author = await _unitOfWork.RepositoryType<BookAuthor>()
           .FindAsync(e => e.CorrelationId.Equals(correlationId));

        return new AuthorDto
        {
            Name = author.Name,
            Surname = author.Surname,
            Birthday = author.Birthday,
            CorrelationId = author.CorrelationId,
        };
    }

    public async Task<Message> InsertAsync(AddAuthorDto addAuthorDto)
    {
        var bookAuthor = new BookAuthor
        {
            Name = addAuthorDto.Name,
            Surname = addAuthorDto.Surname,
            Birthday = addAuthorDto.Birthday.SetKindUtc()
        };

        await _unitOfWork.RepositoryType<BookAuthor>().AddAsync(bookAuthor);
        await _unitOfWork.CommitAsync();

        return new Message();
    }
}
