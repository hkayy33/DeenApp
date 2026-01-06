using DeenTutorFinderApi.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace DeenTutorFinderApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) 
            : base(options)
        {}
            
            public DbSet<Tutor> Tutors {get; set;}
            public DbSet<Review> Reviews {get;set;}
            public DbSet<User> Users {get;set;}


        // Add your DbSets here later
        // public DbSet<Tutor> Tutors { get; set; }
    }
}