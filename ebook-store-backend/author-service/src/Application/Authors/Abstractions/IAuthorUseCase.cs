public interface IAuthorUseCase
{
    Task<Message> DeleteAsync(string correlationId);
    Task<IEnumerable<AuthorDto>> GetAllAsync();
    Task<AuthorDto> GetAsync(string correlationId);
    Task<Message> InsertAsync(AddOrUpdateAuthorDto authorDto);
    Task<Notifications> UpdateAsync(string correlationId, AddOrUpdateAuthorDto authorDto);
}
