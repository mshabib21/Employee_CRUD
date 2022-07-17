namespace EmployeeCRUD.API.Models
{
    public class Employee : EntityBase
    { 
        public string Name { get; set; }  
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
    }
}