using Microsoft.AspNetCore.Mvc;
using WorkWise.Application.DTOs;
using WorkWise.Application.Services.EmployeeService;

namespace WorkWise.Presentation.Controllers;

public class EmployeeController:ApiBaseController
{
    private readonly IEmployeeService _employeeService;

    public EmployeeController(IEmployeeService employeeService)
    {
        _employeeService = employeeService;
    }

    [HttpGet]
    public ActionResult<IEnumerable<EmployeeDto>> GetEmployees()
    {
        return Ok(_employeeService.GetAll());
    }

    [HttpPost]
    public ActionResult<int> AddEmployee([FromBody] EmployeeDto employee)
    {
        var id = _employeeService.Create(employee);
        return CreatedAtAction(nameof(GetEmployees), new { id }, employee);
    }

    [HttpPut("{id:guid}")]
    public IActionResult UpdateEmployee([FromRoute] Guid id, [FromBody] EmployeeDto employee)
    {
        _employeeService.Update(id, employee);
        return NoContent();
    }

    [HttpDelete("{id:guid}")]
    public IActionResult DeleteEmployee([FromRoute] Guid id)
    {
        _employeeService.Delete(id);
        return NoContent();
    }
}