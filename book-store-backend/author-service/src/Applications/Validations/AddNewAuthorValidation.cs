using FluentValidation;

public class AddNewAuthorValidation : AbstractValidator<AddNewAuthor.Request>
{
    public AddNewAuthorValidation()
    {
        RuleFor(x => x.Name).NotEmpty().NotNull();
        RuleFor(x => x.Surname).NotEmpty().NotNull();
        RuleFor(x => x.Birthday).NotEmpty();
    }
}
