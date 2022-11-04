public class AuthorUseCase : IAuthorUseCase
{
    private readonly IUnitOfWork _unitOfWork;

    public AuthorUseCase(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork ?? throw new ArgumentNullException(nameof(unitOfWork));
    }

    public async Task<Message> InsertAsync(AddAuthorDto addAuthorDto)
    {
        var balanceAccount = _mapper.Map<BalanceAccount>(balanceAccountDto);

        await _unitOfWork.RepositoryType<BookAuthor>().AddAsync(balanceAccount);
        await _unitOfWork.CommitAsync();

        return new Message();
    }
}
