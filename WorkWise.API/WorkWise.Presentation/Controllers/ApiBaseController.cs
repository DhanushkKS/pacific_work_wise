using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace WorkWise.Presentation.Controllers;

[ApiController]
[Route(BaseApiPath + "/[controller]")]
[EnableCors("AllowOrigin")]
public class ApiBaseController : ControllerBase
{
    private const string BaseApiPath = "/api/v1";
}