public record AcademicDegreeDto{

      public int Id { get; set; }

    public string? Name { get; set; }

    public string? School { get; set; }

    public DateTime? GradeDate { get; set; }

    public string? BookCorrelationId { get; set; }
    public string? CorrelationId { get; set; }
}