public class UnitOfWork : IUnitOfWork
{
    private ApplicationDbContext _context;
    private readonly IDictionary<string, object> _repositories;

    // Custom interfaces respositories
    // private readonly IDemoRepository _demoRepository;

    public UnitOfWork(ApplicationDbContext context)
    //   IDemoRepository demoRepository)
    {
        _repositories = new Dictionary<string, object>();

        _context = context ?? throw new ArgumentNullException(nameof(context));
        // _demoRepository = demoRepository ?? throw new ArgumentNullException(nameof(demoRepository));
    }

    // Custom implements respositories
    // public IDemoRepository DemoRepository => _demoRepository;

    public void Commit()
    {
        _context.SaveChanges();
        _repositories.Clear();
    }

    public async Task CommitAsync(CancellationToken cancellationToken = default(CancellationToken))
    {
        await _context.SaveChangesAsync(cancellationToken);
        _repositories.Clear();
    }

    public IRepository<T> RepositoryType<T>() where T : BaseEntity
    {
        string typeName = typeof(T).Name;

        if (_repositories.Keys.Contains(typeName))
            return _repositories[typeName] as IRepository<T> ?? throw new ArgumentNullException(nameof(IRepository<T>));

        IRepository<T> newRepository = new BaseRepository<T>(_context);

        _repositories.Add(typeName, newRepository);
        return newRepository;
    }

    public void Dispose()
    {
        if (_context is not null)
            _context.Dispose();
    }
}
