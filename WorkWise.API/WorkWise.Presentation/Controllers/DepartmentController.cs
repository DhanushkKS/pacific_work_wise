using Microsoft.AspNetCore.Mvc;
using WorkWise.Application.DTOs;
using WorkWise.Application.Services.DepartmentService;

namespace WorkWise.Presentation.Controllers;

public class DepartmentController:ApiBaseController
{
    private readonly IDepartmentService _departmentService;

    public DepartmentController(IDepartmentService departmentService)
    {
        _departmentService = departmentService;
    }

    [HttpGet]
    public ActionResult<IEnumerable<DepartmentDto>> GetAll()
    {
        return Ok(_departmentService.GetAll());
    }

    [HttpPost]
    public ActionResult<int> Create([FromBody] DepartmentDto department)
    {
        var id = _departmentService.Create(department);
        return CreatedAtAction(nameof(GetAll), new { id }, department);
    }

    [HttpPut("{id:guid}")]
    public IActionResult Update([FromRoute] Guid id, [FromBody] DepartmentDto department)
    {
        _departmentService.Update(id, department);
        return NoContent();
    }

    [HttpDelete("{id:guid}")]
    public IActionResult Delete([FromRoute] Guid id)
    {
        _departmentService.Delete(id);
        return NoContent();
    }
    
    
    
}