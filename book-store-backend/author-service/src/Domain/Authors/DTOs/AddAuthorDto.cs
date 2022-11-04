using System.ComponentModel.DataAnnotations;

public record AddAuthorDto
{
    public AddAuthorDto()
    {
        Name = string.Empty;
        Surname = string.Empty;
        Birthday = DateTime.Now;
    }

    [Required(ErrorMessage = "You should provide a name value."),
     MaxLength(50)]
    public string Name { get; set; }

    [Required(ErrorMessage = "You should provide a surname value."),
     MaxLength(250)]
    public string Surname { get; set; }

    [Required(ErrorMessage = "You should provide a birthday value.")]
    public DateTime Birthday { get; set; }
}
