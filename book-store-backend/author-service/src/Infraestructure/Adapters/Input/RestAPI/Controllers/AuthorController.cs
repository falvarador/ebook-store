using Microsoft.AspNetCore.Mvc;

[ApiController, Route("api/authors")]
public class AuthorController : ControllerBase
{
    private readonly ILogger<AuthorController> _logger;

    public AuthorController(ILogger<AuthorController> logger)
    {
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
    }

    [HttpPost]
    public async Task<ActionResult<Unit>> AddNewAuthor([FromBody] AddAuthorDto.Request request)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        return await _mediator.Send(request);
    }

    [HttpGet]
    public async Task<ActionResult<List<AuthorDto>>> GetAllAuthors()
    {
        return await _mediator.Send(new GetAllAuthors.BookAuthors());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<AuthorDto>> GetAuthorById(string id)
    {
        return await _mediator.Send(new GetAuthorById.AuthorById { CorrelationId = id });
    }
}
