using Microsoft.AspNetCore.Mvc;
using WorkWise.Application.DTOs;
using WorkWise.Application.Services.EmployeeService;

namespace WorkWise.Presentation.Controllers;


public class EmployeesController : ApiBaseController
{
    private readonly IEmployeeService _employeeService;

    public EmployeesController(IEmployeeService employeeService)
    {
        _employeeService = employeeService;
    }

    [HttpGet]
    public ActionResult<IEnumerable<EmployeeDisplayDto>> GetEmployees()
    {
        try
        {
            var employees = _employeeService.GetAll();
            return Ok(employees);
        }
        catch (Exception ex)
        {
            return StatusCode(500, "An error occurred while retrieving employees.");
        }
    }

    [HttpGet("{id:guid}")]
    public ActionResult<EmployeeDisplayDto> GetEmployee([FromRoute] Guid id)
    {
        try
        {
            var employee = _employeeService.GetById(id);
            if (employee == null)
                return NotFound($"Employee with ID {id} not found.");

            return Ok(employee);
        }
        catch (Exception ex)
        {
            return StatusCode(500, "An error occurred while retrieving the employee.");
        }
    }

    [HttpPost]
    public ActionResult<int> AddEmployee([FromBody] EmployeeDto employee)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        try
        {
            var id = _employeeService.Create(employee);
            return CreatedAtAction(nameof(GetEmployee), new { id }, employee);
        }
        catch (ArgumentException ex)
        {
            return BadRequest(ex.Message); 
        }
        catch (Exception ex)
        {
            return StatusCode(500, "An error occurred while adding the employee.");
        }
    }

    [HttpPut("{id:guid}")]
    public IActionResult UpdateEmployee([FromRoute] Guid id, [FromBody] EmployeeDto employee)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        try
        {
            _employeeService.Update(id, employee);
            return NoContent();
        }
        catch (KeyNotFoundException ex)
        {
            return NotFound(ex.Message); 
        }
        catch (ArgumentException ex)
        {
            return BadRequest(ex.Message); 
        }
        catch (Exception ex)
        {
            return StatusCode(500, "An error occurred while updating the employee.");
        }
    }

    [HttpDelete("{id:guid}")]
    public IActionResult DeleteEmployee([FromRoute] Guid id)
    {
        try
        {
            _employeeService.Delete(id);
            return NoContent();
        }
        catch (KeyNotFoundException ex)
        {
            return NotFound(ex.Message); 
        }
        catch (Exception ex)
        {
            return StatusCode(500, "An error occurred while deleting the employee.");
        }
    }
}
