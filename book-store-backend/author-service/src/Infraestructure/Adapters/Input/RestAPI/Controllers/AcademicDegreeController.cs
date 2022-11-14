using Microsoft.AspNetCore.Mvc;

[ApiController, Route("api/academicDegree")]
public class AcademicDegreeController : ControllerBase
{
    private readonly IAcademicDegreeUseCase _academicUseCase;
    private readonly ILogger<AcademicDegreeController> _logger;

    public AcademicDegreeController(IAcademicDegreeUseCase academicUseCase, ILogger<AcademicDegreeController> logger)
    {
        _academicUseCase = academicUseCase ?? throw new ArgumentNullException(nameof(academicUseCase));
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
    }

    [HttpDelete]
    public async Task<ActionResult<Message>> DeleteAcademicDegree([FromQuery] string correlationId)
    {
        await _academicUseCase.DeleteAsync(correlationId);
        return NoContent();
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<AcademicDegreeDto>>> GetAllAcademicDegree()
    {
        return Ok(await _academicUseCase.GetAllAsync());
    }

    [HttpGet("{correlationId}")]
    public async Task<ActionResult<AcademicDegreeDto>> GetAcademicDegreeById(string correlationId)
    {
        return await _academicUseCase.GetAsync(correlationId);
    }

    [HttpPost]
    public async Task<ActionResult<Message>> AddNewAcademicDegree([FromBody] AddOrUpdateAcademicDegreeDto request)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        return await _academicUseCase.InsertAsync(request);
    }

    [HttpPut]
    public async Task<ActionResult<Message>> UpdateAcademicDegree([FromQuery] string correlationId, [FromBody] AddOrUpdateAcademicDegreeDto request)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        return await _academicUseCase.UpdateAsync(correlationId, request);
    }
}
