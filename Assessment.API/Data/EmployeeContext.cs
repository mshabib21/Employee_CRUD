using EmployeeCRUD.API.Models;
using Microsoft.EntityFrameworkCore;
 
namespace EmployeeCRUD.API.Data
{
    public partial class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions options) : base(options)
        {
        } 
        public virtual DbSet<Employee> Employee { get; set; }
         
    }
}