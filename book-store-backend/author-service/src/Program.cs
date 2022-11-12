using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseNpgsql(builder.Configuration.GetConnectionString("PostgreSQL") ?? string.Empty);
});

builder.Services
    .AddScoped<IRepository<BaseEntity>, BaseRepository<BaseEntity>>()
    .AddScoped<IUnitOfWork, UnitOfWork>();

builder.Services
    .AddScoped<IAuthorUseCase, AuthorUseCase>();

builder.Services
    .AddControllers();

builder.Services
    .AddEndpointsApiExplorer()
    .AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

if (app.Environment.IsProduction())
    app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
