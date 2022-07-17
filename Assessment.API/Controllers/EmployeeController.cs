
using EmployeeCRUD.API.Data;
using EmployeeCRUD.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EmployeeCRUD.API.Controllers
{
    [CustomAuthorizeAttribute]
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : Controller
    {
        private readonly EmployeeContext employeeContext;
        public EmployeeController(EmployeeContext employeeContext)
        {
            this.employeeContext = employeeContext;
        }


        [HttpGet]
        [Route("FindAll")]
        public async Task<IActionResult> FindAll()
        {
            var employees = await employeeContext.Employee.ToListAsync();

            return Ok(employees);
        }
         
        [HttpGet]
        [Route("FindById")]
        public async Task<IActionResult> FindById(int id)
        {
                var employee = await employeeContext.Employee.FirstOrDefaultAsync(x => x.Id == id);
            if (employee != null)
                return Ok(employee);
            else
                return NotFound("Employee Not Found");
        }
          
        [HttpPost]
        [Route("Add")]
        public async Task<IActionResult> Add([FromBody] Employee employee)
        {
            await employeeContext.Employee.AddAsync(employee);
            await employeeContext.SaveChangesAsync();

            return CreatedAtAction(nameof(FindById), employee.Id, employee);
        }


        [HttpPost]
        [Route("Update")]
        public async Task<IActionResult> Update(int id, [FromBody] Employee employee)
        {
            var existingEmployee = await employeeContext.Employee.FirstOrDefaultAsync(x => x.Id == id);
            if (existingEmployee != null)
            {
                existingEmployee.Email = employee.Email;
                existingEmployee.PhoneNumber = employee.PhoneNumber;
                existingEmployee.Name = employee.Name;

                await employeeContext.SaveChangesAsync();
                return Ok(existingEmployee);
            }
            else
                return NotFound("Employee Not Found");

        }
         
        [HttpDelete]
        [Route("Delete")]
        public async Task<IActionResult> Delete(int id)
        {
            var existingEmployee = await employeeContext.Employee.FirstOrDefaultAsync(x => x.Id == id);
            if (existingEmployee != null)
            {
                employeeContext.Remove(existingEmployee);
                await employeeContext.SaveChangesAsync();

                return Ok(existingEmployee);
            }
            else
                return NotFound("Employee Not Found");
        }

    }
}
