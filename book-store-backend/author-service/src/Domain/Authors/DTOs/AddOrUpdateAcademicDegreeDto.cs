

using System.ComponentModel.DataAnnotations;

public record AddOrUpdateAcademicDegreeDto {

    public AddOrUpdateAcademicDegreeDto()
    {
        Name = string.Empty;
        School = string.Empty;
        GradeDate = DateTime.Now;
    }
    [Required(ErrorMessage = "You should provide a name value."),
     MaxLength(50)]
    public string Name { get; set; }

    [Required(ErrorMessage = "You should provide a school value."),
     MaxLength(50)]
    public string School { get; set; } 

    [Required(ErrorMessage = "You should provide a gradedate value."),
     MaxLength(50)]
    public DateTime GradeDate { get; set; } 

    [Range(1,int.MaxValue, ErrorMessage ="You should be provide a valid book")]
    public int BookAuthorId { get; set; }
}