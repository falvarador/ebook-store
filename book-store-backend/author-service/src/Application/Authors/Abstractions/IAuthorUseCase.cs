public interface IAuthorUseCase
{
    Task<Message> InsertAsync(AddAuthorDto addAuthorDto);
}
