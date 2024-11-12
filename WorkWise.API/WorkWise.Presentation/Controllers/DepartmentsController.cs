using Microsoft.AspNetCore.Mvc;
using WorkWise.Application.DTOs;
using WorkWise.Application.Services.DepartmentService;

namespace WorkWise.Presentation.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DepartmentsController : ControllerBase
{
    private readonly IDepartmentService _departmentService;

    public DepartmentsController(IDepartmentService departmentService)
    {
        _departmentService = departmentService;
    }

    [HttpGet]
    public ActionResult<IEnumerable<DepartmentDto>> GetAll()
    {
        try
        {
            var departments = _departmentService.GetAll();
            return Ok(departments);
        }
        catch (Exception ex)
        {
            return StatusCode(500, "An error occurred while retrieving departments.");
        }
    }
    
    [HttpGet("{id:guid}")]
    public ActionResult<EmployeeDisplayDto> GetById([FromRoute] Guid id)
    {
        try
        {
            var department = _departmentService.GetById(id);
            return Ok(department);

        }
        catch (Exception ex)
        {
            return StatusCode(500, "An error occurred while retrieving departments.");
        }
    }
    
    [HttpPost]
    public ActionResult<int> Create([FromBody] DepartmentDto department)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        try
        {
            var id = _departmentService.Create(department);
            return CreatedAtAction(nameof(GetAll), new { id }, department);
        }
        catch (ArgumentException ex)
        {
            return BadRequest(ex.Message);
        }
        catch (Exception ex)
        {
            return StatusCode(500, "An error occurred while creating the department.");
        }
    }

    [HttpPut("{id:guid}")]
    public IActionResult Update([FromRoute] Guid id, [FromBody] DepartmentDto department)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        try
        {
            _departmentService.Update(id, department);
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
            return StatusCode(500, "An error occurred while updating the department.");
        }
    }

    [HttpDelete("{id:guid}")]
    public IActionResult Delete([FromRoute] Guid id)
    {
        try
        {
            _departmentService.Delete(id);
            return NoContent();
        }
        catch (KeyNotFoundException ex)
        {
            return NotFound(ex.Message); 
        }
        catch (Exception ex)
        {
            return StatusCode(500, "An error occurred while deleting the department.");
        }
    }
}
