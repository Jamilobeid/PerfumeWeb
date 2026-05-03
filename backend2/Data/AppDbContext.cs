using Microsoft.EntityFrameworkCore;
using backend2.Models;
using Microsoft.Identity.Client;

namespace backend2.Data;
public class AppDBContext : DbContext
{
    public AppDBContext(DbContextOptions<AppDBContext> options) : base(options)
    {
        
    }
    public DbSet<Product> Products {get; set; }
}