using System.ComponentModel.DataAnnotations;

public record AddAuthorDto
{
    [Required(ErrorMessage = "You should provide a name value."),
     MaxLength(50)]
    public string? Name { get; set; }

    [Required(ErrorMessage = "You should provide a surname value."),
     MaxLength(250)]
    public string? Surname { get; set; }

    [Required(ErrorMessage = "You should provide a birthday value.")]
    public DateTime? Birthday { get; set; }
}
