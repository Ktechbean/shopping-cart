using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApiSendGridmail.Models;

namespace WebApiSendGridmail.Controllers
{
    public class UserloginController : ApiController
    {
      public   usercontext database = new usercontext();
        [HttpGet]
      public object add_defaultuser(string name,string password)
      {
 Userlogin jj = database.Userlist.Where(x =>  (x.Username == name)).FirstOrDefault();
 if (jj == null)
 {

     database.Userlist.Add(new Userlogin() { Username = name, Password = password });

     database.SaveChanges();
     return new { IsSuccess = 1 };  //when username does not exist and new user name sent is added in database.
 }
 else
 {
     return new { IsSuccess = 0};  //when username exist allready or its present in database.
 }


      }
                  // POST: api/subcategories
          [HttpPost]     
        public  object PostUser(Userlogin User)
        {
           /* if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }*/
            
            Userlogin jj = database.Userlist.Where(x => (x.Password == User.Password) && (x.Username == User.Username)).FirstOrDefault(); 
            if(jj==null)
            {
                return new {isvalid=0};
            }
            return new { isvalid = 1};
            
        }

    }
}
