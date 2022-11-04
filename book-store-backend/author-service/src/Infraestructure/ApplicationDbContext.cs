using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
        BookAuthors = Set<BookAuthor>();
        AcademicDegrees = Set<AcademicDegree>();
    }

    public DbSet<BookAuthor> BookAuthors { get; set; }
    public DbSet<AcademicDegree> AcademicDegrees { get; set; }
}
