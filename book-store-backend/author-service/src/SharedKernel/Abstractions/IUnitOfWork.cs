public interface IUnitOfWork : IDisposable
{
    // IExampleRepository ExampleRepository { get; }

    IRepository<T> RepositoryType<T>() where T : BaseEntity;
    Task CommitAsync(CancellationToken cancellationToken = default(CancellationToken));
    void Commit();
}
