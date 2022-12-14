public class AuthorUseCase : IAuthorUseCase
{
    private readonly IUnitOfWork _unitOfWork;

    public AuthorUseCase(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork ?? throw new ArgumentNullException(nameof(unitOfWork));
    }

    public async Task<Message> DeleteAsync(string correlationId)
    {
        var author = await _unitOfWork.RepositoryType<BookAuthor>()
           .FindAsync(e => e.CorrelationId.Equals(correlationId));

        _unitOfWork.RepositoryType<BookAuthor>().Remove(author.Id);
        await _unitOfWork.CommitAsync();

        return new Message();
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

    public async Task<Message> InsertAsync(AddOrUpdateAuthorDto authorDto)
    {
        var bookAuthor = new BookAuthor
        {
            Name = authorDto.Name,
            Surname = authorDto.Surname,
            Birthday = authorDto.Birthday.SetKindUtc(),
            CorrelationId = Guid.NewGuid().ToString()
        };

        await _unitOfWork.RepositoryType<BookAuthor>().AddAsync(bookAuthor);
        await _unitOfWork.CommitAsync();

        return new Message();
    }

    public async Task<Notifications> UpdateAsync(string correlationId, AddOrUpdateAuthorDto authorDto)
    {
        var notifications = new Notifications();
        var bookAuthor = await _unitOfWork.RepositoryType<BookAuthor>()
                .FindAsync(e => e.CorrelationId.Equals(correlationId));

        if (bookAuthor is null)
        {
            notifications.Add(new Message(1, Level.Exception, "Author not found"));
            return notifications;
        }

        bookAuthor.Name = authorDto.Name;
        bookAuthor.Surname = authorDto.Surname;
        bookAuthor.Birthday = authorDto.Birthday.SetKindUtc();

        _unitOfWork.RepositoryType<BookAuthor>().Update(bookAuthor);
        await _unitOfWork.CommitAsync();

        notifications.Add(new Message(0, Level.Success, "Author updated"));
        return notifications;
    }
}
