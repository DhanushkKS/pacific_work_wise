using WorkWise.Domain.Entities;

namespace WorkWise.Application.Repositories;

public interface IDepartmentRepository
{
   IEnumerable<Department>  GetAll();
    Department  GetById(Guid id);
    Guid Create(Department department);
    void Update(Department department);
    void Delete(Guid departmentId);
    
}