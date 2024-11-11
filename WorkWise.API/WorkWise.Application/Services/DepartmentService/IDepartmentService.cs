using WorkWise.Application.DTOs;

namespace WorkWise.Application.Services.DepartmentService;

public interface IDepartmentService
{
    IEnumerable<DepartmentDto> GetAll();
    Guid Create(DepartmentDto department);
    void Update(Guid id, DepartmentDto department);
    void Delete(Guid id);
}