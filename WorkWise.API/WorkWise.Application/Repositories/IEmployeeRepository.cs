using WorkWise.Domain.Entities;

namespace WorkWise.Application.Repositories;

public interface IEmployeeRepository
{
    IEnumerable<Employee> GetAll();
    
    Employee GetById(Guid id);
    Guid Create(Employee employee);
    void Update(Employee employee);
    void Delete(Guid id);
    
}