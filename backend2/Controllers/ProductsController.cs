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
                new Product { Id = 3, Name = "Acqua di Gio", Category = "Men", Price = 30, Image = "/acquadigio.jpg" },
                new Product { Id = 4, Name = "Armani Code", Category = "Men", Price = 30, Image = "/armanicode.jpg" },
                new Product { Id = 5, Name = "Azzaro Wanted", Category = "Men", Price = 30, Image = "/azzarowanted.jpg" },
                new Product { Id = 6, Name = "Versace Eros", Category = "Men", Price = 30, Image = "/versaceeros.jpg" },
                new Product { Id = 7, Name = "Tom Ford Noir", Category = "Men", Price = 30, Image = "/tomford.jpg" },
                new Product { Id = 8, Name = "YSL Y", Category = "Men", Price = 30, Image = "/ysly.jpg" },
                new Product { Id = 9, Name = "Creed Aventus", Category = "Men", Price = 30, Image = "/creedaventus.jpg" },

                new Product { Id = 10, Name = "Black Opium", Category = "Women", Price = 30, Image = "/blackopium.jpg" },
                new Product { Id = 11, Name = "Miss Dior", Category = "Women", Price = 30, Image = "/misssdior.jpg" },
                new Product { Id = 12, Name = "Libre", Category = "Women", Price = 30, Image = "/libre.jpg" },
                new Product { Id = 13, Name = "La Vie Est Belle", Category = "Women", Price = 30, Image = "/laviewestbelle.jpg" },
                new Product { Id = 14, Name = "Good Girl", Category = "Women", Price = 30, Image = "/goodgirl.jpg" },
                new Product { Id = 15, Name = "Flowerbomb", Category = "Women", Price = 30, Image = "/flowerbomb.jpg" },
                new Product { Id = 16, Name = "Chanel Chance", Category = "Women", Price = 30, Image = "/chanelchance.jpg" },
                new Product { Id = 17, Name = "Elie Saab", Category = "Women", Price = 30, Image = "/eliesaab.jpg" },
                new Product { Id = 18, Name = "Golden Bloom", Category = "Women", Price = 30, Image = "/goldenbloom.jpg" },

                new Product { Id = 19, Name = "Born in Roma", Category = "Women", Price = 30, Image = "/borninroma.jpg" },
                new Product { Id = 20, Name = "Midnight Oud", Category = "Unisex", Price = 30, Image = "/midnightoud.jpg" },
                new Product { Id = 21, Name = "Mystic Noir", Category = "Unisex", Price = 30, Image = "/mysticnoir.jpg" },
                new Product { Id = 22, Name = "Ocean Whisper", Category = "Unisex", Price = 30, Image = "/oceanwhisper.jpg" },
                new Product { Id = 23, Name = "Royal Amber", Category = "Unisex", Price = 30, Image = "/royalamber.jpg" },
                new Product { Id = 24, Name = "Velvet Rose", Category = "Unisex", Price = 30, Image = "/velvetrose.jpg" },
                new Product { Id = 25, Name = "Xerjoff Naxos", Category = "Unisex", Price = 30, Image = "/xerjkoffnaxos.jpg" }
            };

        return Ok(products);
    }
}