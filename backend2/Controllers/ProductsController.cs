using Microsoft.AspNetCore.Mvc;
using backend2.Models;

namespace backend2.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    [HttpGet]
    public ActionResult<IEnumerable<Product>> GetProducts()
    {
        var products = new List<Product>
        {
            new Product { Id = 1, Name = "Dior Sauvage", Category = "Men", Price = 30, Image = "/sauvage.jpg" },
            new Product { Id = 2, Name = "Bleu de Chanel", Category = "Men", Price = 30, Image = "/bluedechanel.jpg" },
            new Product { Id = 3, Name = "Miss Dior", Category = "Women", Price = 30, Image = "/missdior.jpg" }
        };

        return Ok(products);
    }
}