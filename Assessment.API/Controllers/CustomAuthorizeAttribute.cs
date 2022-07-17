using Microsoft.AspNetCore.Mvc.Filters; 
using System.Web.Http; 

namespace EmployeeCRUD.API.Controllers
{ 
   
    public class CustomAuthorizeAttribute : AuthorizeAttribute
    {
        protected override bool IsAuthorized(System.Web.Http.Controllers.HttpActionContext actionContext)
        {
            return true;
        }
    }
     
}