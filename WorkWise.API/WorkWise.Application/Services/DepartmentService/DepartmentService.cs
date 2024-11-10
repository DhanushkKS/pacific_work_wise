using WorkWise.Application.DTOs;
using WorkWise.Application.Repositories;
using WorkWise.Domain.Entities;

namespace WorkWise.Application.Services.DepartmentService;

public class DepartmentService: IDepartmentService
{
    private readonly IDepartmentRepository _departmentRepository;

    public DepartmentService(IDepartmentRepository departmentRepository)
    {
        _departmentRepository = departmentRepository;
    }

    public IEnumerable<DepartmentDto> GetAll()
    {
        var departments = _departmentRepository.GetAll();
        return departments.Select(d => new DepartmentDto
        {
            Code = d.Code,
            Name = d.Name,
        });
    }

    public Guid Create(DepartmentDto department)
    {
        var departmentEntity = new Department
        {
            Code = department.Code,
            Name = department.Name,
        };
        return _departmentRepository.Create(departmentEntity);
    }

    public void Update(Guid id, DepartmentDto department)
    {
        var departmentEntity = new Department
        {
            Id = id,
            Code = department.Code,
            Name = department.Name,
        };
        _departmentRepository.Update(departmentEntity);
    }

    public void Delete(Guid id)
    {
       _departmentRepository.Delete(id);
    }
}