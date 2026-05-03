using Microsoft.EntityFrameworkCore;
using backend2.Models;
using Microsoft.Identity.Client;

namespace backend2.Data;
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
        
    }
    public DbSet<Product> Products {get; set; }
}