public interface IAuthorUseCase
{
    Task<Message> DeleteAsync(string correlationId);
    Task<IEnumerable<AuthorDto>> GetAllAsync();
    Task<AuthorDto> GetAsync(string correlationId);
    Task<Message> InsertAsync(AddOrUpdateAuthorDto authorDto);
    Task<Message> UpdateAsync(string correlationId, AddOrUpdateAuthorDto authorDto);
}
