public class AcadademicDegreeUseCase : IAcademicDegreeUseCase
{
    private readonly IUnitOfWork _unitOfWork;

    public AcadademicDegreeUseCase(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork ?? throw new ArgumentNullException(nameof(unitOfWork));
    }

    public async Task<Message> DeleteAsync(string correlationId)
    {
        var author = await _unitOfWork.RepositoryType<AcademicDegree>()
           .FindAsync(e => e.CorrelationId.Equals(correlationId));

        _unitOfWork.RepositoryType<AcademicDegree>().Remove(author.Id);
        await _unitOfWork.CommitAsync();

        return new Message();
    }

    public async Task<IEnumerable<AcademicDegreeDto>> GetAllAsync()
    {
        var academicDegree = await _unitOfWork.RepositoryType<AcademicDegree>()
            .FindAllAsync();

        return academicDegree.Select(e => new AcademicDegreeDto
        {
            Name = e.Name,
            School = e.School,
            GradeDate = e.GradeDate,
            BookCorrelationId = e.BookAuthor.CorrelationId,
            CorrelationId = e.CorrelationId,
        });
    }

    public async Task<AcademicDegreeDto> GetAsync(string correlationId)
    {
        var academicDegree = await _unitOfWork.RepositoryType<AcademicDegree>()
           .FindAsync(e => e.CorrelationId.Equals(correlationId));

        return new AcademicDegreeDto
        {
            Name = academicDegree.Name,
            School = academicDegree.School,
            GradeDate = academicDegree.GradeDate,
            BookCorrelationId = academicDegree.BookAuthor.CorrelationId,
            CorrelationId = academicDegree.CorrelationId,
        };
    }

    public async Task<Message> InsertAsync(AddOrUpdateAcademicDegreeDto academicDegreeDto)
    {
        var bookAuthor = await _unitOfWork.RepositoryType<BookAuthor>().FindAsync(author => author.Equals(academicDegreeDto.BookCorrelationId));
        if (bookAuthor is null) throw new ArgumentNullException(nameof(bookAuthor));

        var academicDegree = new AcademicDegree
        {
            Name = academicDegreeDto.Name,
            School = academicDegreeDto.School,
            GradeDate = academicDegreeDto.GradeDate.SetKindUtc(),
            BookAuthorId = bookAuthor.Id,
            CorrelationId = Guid.NewGuid().ToString(),
        };

        await _unitOfWork.RepositoryType<AcademicDegree>().AddAsync(academicDegree);
        await _unitOfWork.CommitAsync();

        return new Message();
    }

    public async Task<Message> UpdateAsync(string correlationId, AddOrUpdateAcademicDegreeDto academicDegreeDto)
    {

        var bookAuthor = await _unitOfWork.RepositoryType<BookAuthor>().FindAsync(author => author.Equals(academicDegreeDto.BookCorrelationId));

        if (bookAuthor is null) throw new ArgumentNullException(nameof(bookAuthor));

        var academicDegree = new AcademicDegree
        {
            Name = academicDegreeDto.Name,
            School = academicDegreeDto.School,
            GradeDate = academicDegreeDto.GradeDate.SetKindUtc(),
            BookAuthorId = bookAuthor.Id,
            CorrelationId = correlationId
        };

        _unitOfWork.RepositoryType<AcademicDegree>().Update(academicDegree);
        await _unitOfWork.CommitAsync();

        return new Message();
    }
}
