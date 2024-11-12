using WorkWise.Application.DTOs;

namespace WorkWise.Application.Services.EmployeeService;

public interface IEmployeeService
{
    IEnumerable<EmployeeDisplayDto> GetAll();
    
    EmployeeDisplayDto GetById(Guid id);
    Guid Create(EmployeeDto employee);
    void Update(Guid id, EmployeeDto employee);
    void Delete(Guid id);
}