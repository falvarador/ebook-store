public interface IAuthorUseCase
{
    Task<IEnumerable<AuthorDto>> GetAllAsync();
    Task<AuthorDto> GetAsync(string correlationId);
    Task<Message> InsertAsync(AddAuthorDto addAuthorDto);
}
