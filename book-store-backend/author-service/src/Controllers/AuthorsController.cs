using MediatR;
using Microsoft.AspNetCore.Mvc;

[ApiController, Route("api/[controller]")]
public class AuthorsController : ControllerBase
{
    private readonly ILogger<AuthorsController> _logger;
    private readonly IMediator _mediator;

    public AuthorsController(ILogger<AuthorsController> logger, IMediator mediator)
    {
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [HttpPost]
    public async Task<ActionResult<Unit>> AddNewAuthor([FromBody] AddNewAuthor.Request request)
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
