using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

public class BaseRepository<T> : IRepository<T>
    where T : BaseEntity
{
    protected readonly ApplicationDbContext _context;
    protected readonly DbSet<T> _entitySet;

    public BaseRepository(ApplicationDbContext context)
    {
        _context = context ?? throw new ArgumentNullException(nameof(context));
        _entitySet = context.Set<T>();
    }

    public IEnumerable<T> FindAll(Expression<Func<T, bool>>? predicate = null, params Expression<Func<T, object>>[] includeProperties)
    {
        if (predicate is null)
            return Search(includeProperties).ToList();

        return Search(predicate, includeProperties).ToList();
    }

    public T Find(Expression<Func<T, bool>>? predicate = null, params Expression<Func<T, object>>[] includeProperties)
    {
        if (predicate is null)
            return Search(includeProperties).SingleOrDefault() ?? throw new InvalidOperationException("No entity found");

        return Search(predicate, includeProperties).SingleOrDefault() ?? throw new InvalidOperationException("No entity found");
    }

    public T FindById(params object[] keyValues)
    {
        return _entitySet.Find(keyValues) ?? throw new InvalidOperationException("No entity found");
    }

    public async Task AddAsync(T entity)
    {
        await _entitySet.AddAsync(entity);
    }

    public async Task AddRangeAsync(ICollection<T> entities)
    {
        await _entitySet.AddRangeAsync(entities);
    }

    public async Task<IEnumerable<T>> FindAllAsync(Expression<Func<T, bool>>? predicate = null, params Expression<Func<T, object>>[] includeProperties)
    {
        if (predicate is null)
            return await Search(includeProperties).ToListAsync();

        return await Search(predicate, includeProperties).ToListAsync();
    }

    public async Task<T> FindAsync(Expression<Func<T, bool>>? predicate = null,
                                    params Expression<Func<T, object>>[] includeProperties)
    {
        if (predicate is null)
            return await Search(includeProperties).SingleOrDefaultAsync() ?? throw new InvalidOperationException("No entity found");

        return await Search(predicate, includeProperties).SingleOrDefaultAsync() ?? throw new InvalidOperationException("No entity found");
    }

    public async Task<T> FindByIdAsync(params object[] keyValues)
    {
        return await _entitySet.FindAsync(keyValues) ?? throw new InvalidOperationException("No entity found");
    }

    public void Add(T entity)
    {
        _entitySet.Add(entity);
    }

    public void AddRange(ICollection<T> entities)
    {
        _entitySet.AddRange(entities);
    }

    public void Remove(params object[] keyValues)
    {
        var entity = this.FindById(keyValues);
        _entitySet.Remove(entity);
    }

    public void RemoveRange(ICollection<T> entities)
    {
        _entitySet.RemoveRange(entities);
    }

    public void Update(T entity)
    {
        _entitySet.Update(entity);
    }

    public void UpdateRange(ICollection<T> entities)
    {
        _entitySet.UpdateRange(entities);
    }

    private IQueryable<T> Search(params Expression<Func<T, object>>[] includeProperties)
    {
        if (includeProperties is null || !includeProperties.Any())
        {
            return _entitySet;
        }

        IQueryable<T> queryable = includeProperties.Aggregate(_entitySet.AsQueryable(), (current, includeProperty) => current.Include(includeProperty));

        return queryable;
    }

    private IQueryable<T> Search(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] includeProperties)
    {
        if (includeProperties is null || !includeProperties.Any())
        {
            return _entitySet.Where(predicate);
        }

        IQueryable<T> queryable = includeProperties.Aggregate(_entitySet.AsQueryable(), (current, includeProperty) => current.Include(includeProperty));

        return queryable.Where(predicate);
    }
}
