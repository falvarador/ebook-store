using System.Linq.Expressions;

public interface IRepository<T>
    where T : BaseEntity
{
    IEnumerable<T> FindAll(Expression<Func<T, bool>>? predicate = null, params Expression<Func<T, object>>[] includeProperties);
    T Find(Expression<Func<T, bool>>? predicate = null, params Expression<Func<T, object>>[] includeProperties);
    T FindById(params object[] keyValues);
    Task AddAsync(T entity);
    Task AddRangeAsync(ICollection<T> entities);
    Task<IEnumerable<T>> FindAllAsync(Expression<Func<T, bool>>? predicate = null, params Expression<Func<T, object>>[] includeProperties);
    Task<T> FindAsync(Expression<Func<T, bool>>? predicate = null, params Expression<Func<T, object>>[] includeProperties);
    Task<T> FindByIdAsync(params object[] keyValues);
    void Add(T entity);
    void AddRange(ICollection<T> entities);
    void Remove(params object[] keyValues);
    void RemoveRange(ICollection<T> entities);
    void Update(T entity);
    void UpdateRange(ICollection<T> entities);
}
