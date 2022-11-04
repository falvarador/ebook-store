using Microsoft.AspNetCore.Mvc;

[ApiController, Route("api/authors")]
public class AuthorController : ControllerBase
{
    private readonly IAuthorUseCase _authorUseCase;
    private readonly ILogger<AuthorController> _logger;

    public AuthorController(IAuthorUseCase authorUseCase, ILogger<AuthorController> logger)
    {
        _authorUseCase = authorUseCase ?? throw new ArgumentNullException(nameof(authorUseCase));
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<AuthorDto>>> GetAllAuthors()
    {
        return Ok(await _authorUseCase.GetAllAsync());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<AuthorDto>> GetAuthorById(string correlationId)
    {
        return await _authorUseCase.GetAsync(correlationId);
    }

    [HttpPost]
    public async Task<ActionResult<Message>> AddNewAuthor([FromBody] AddAuthorDto request)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        return await _authorUseCase.InsertAsync(request);
    }
}
