using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Web;

namespace WebApiSendGridmail.Models
{
    public class usercontext:DbContext
    {
        public usercontext():base("Data Source=.\\SQLEXPRESS; Initial catalog=ULogin;Integrated security=true;")
        {
           
        }
        public DbSet<Userlogin> Userlist { get; set; }
    }
}