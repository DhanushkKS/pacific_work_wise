namespace WorkWise.Application.DTOs;

public class EmployeeDto
{
    public string FirstName { get; set; } = null!;
    public string LastName { get; set; } = null!;
    public string Email { get; set; } = null!;
    public DateTime DateOfBirth { get; set; }
    public decimal Salary { get; set; }
    public Guid DepartmentId { get; set; }
}