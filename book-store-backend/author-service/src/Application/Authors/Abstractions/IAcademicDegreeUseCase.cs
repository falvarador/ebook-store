public interface ICademicDegreeUseCase
{
    Task<Message> DeleteAsync(string correlationId);
    Task<IEnumerable<AcademicDegreeDto>> GetAllAsync();
    Task<AcademicDegreeDto> GetAsync(string correlationId);
    Task<Message> InsertAsync(AddOrUpdateAcademicDegreeDto academicDegreeDto);
    Task<Message> UpdateAsync(string correlationId, AddOrUpdateAcademicDegreeDto academicDegreeDto);
}
