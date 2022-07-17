using System.ComponentModel;

namespace EmployeeCRUD.API.Models
{
    public abstract class EntityBase
    {
        public int Id { get; set; } 
        public DateTime CreateDate { get; set; }
    }
}