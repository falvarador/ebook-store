public class AcadademicDegreeUseCase : ICademicDegreeUseCase
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
            BookAuthorId = e.BookAuthorId,
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
            BookAuthorId = academicDegree.BookAuthorId,
            CorrelationId = academicDegree.CorrelationId,
        };
    }

    public async Task<Message> InsertAsync(AddOrUpdateAcademicDegreeDto academicDegreeDto)
    {
        var academicDegree = new AcademicDegree
        {
             Name = academicDegreeDto.Name,
            School = academicDegreeDto.School,
            GradeDate = academicDegreeDto.GradeDate.SetKindUtc(),
            BookAuthorId = academicDegreeDto.BookAuthorId,
            CorrelationId = Guid.NewGuid().ToString()
        };

        await _unitOfWork.RepositoryType<AcademicDegree>().AddAsync(academicDegree);
        await _unitOfWork.CommitAsync();

        return new Message();
    }

    public async Task<Message> UpdateAsync(string correlationId, AddOrUpdateAcademicDegreeDto academicDegreeDto)
    {
        var academicDegree = new AcademicDegree
        {
            Name = academicDegreeDto.Name,
            School = academicDegreeDto.School,
            GradeDate = academicDegreeDto.GradeDate.SetKindUtc(),
            BookAuthorId = academicDegreeDto.BookAuthorId,
            CorrelationId = correlationId
        };

        _unitOfWork.RepositoryType<AcademicDegree>().Update(academicDegree);
        await _unitOfWork.CommitAsync();

        return new Message();
    }
}
