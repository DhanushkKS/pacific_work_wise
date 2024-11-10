using WorkWise.Application.DTOs;
using WorkWise.Application.Repositories;
using WorkWise.Domain.Entities;

namespace WorkWise.Application.Services.EmployeeService;

public class EmployeeService:IEmployeeService
{
    private readonly IEmployeeRepository _employeeRepository;

    public EmployeeService(IEmployeeRepository employeeRepository)
    {
        _employeeRepository = employeeRepository;
    }

    public IEnumerable<EmployeeDto> GetAll()
    {
        var employees = _employeeRepository.GetAll();
        return employees.Select(e => new EmployeeDto
        {
            FirstName = e.FirstName, 
            LastName = e.LastName,
            Email = e.Email,
            DateOfBirth = e.DateOfBirth,
            Salary = e.Salary,
            DepartmentId = e.DepartmentId
        });
    }

    public Guid Create(EmployeeDto employee)
    {
        var employeeEntity = new Employee
        {
            FirstName = employee.FirstName,
            LastName = employee.LastName,
            Email = employee.Email,
            DateOfBirth = employee.DateOfBirth,
            Salary = employee.Salary,
            DepartmentId = employee.DepartmentId
        };
        return _employeeRepository.Create(employeeEntity);
    }

    public void Update(Guid id, EmployeeDto employee)
    {
        var employeeEntity = new Employee
        {
            Id = id,
            FirstName = employee.FirstName,
            LastName = employee.LastName,
            Email = employee.Email,
            DateOfBirth = employee.DateOfBirth,
            Salary = employee.Salary,
            DepartmentId = employee.DepartmentId
        };
        _employeeRepository.Update(employeeEntity);
    }

    public void Delete(Guid id)
    {
        _employeeRepository.Delete(id);
    }
}