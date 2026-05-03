using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using backend2.Data;
using backend2.Models;

namespace backend2.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CartController : ControllerBase
{
    private readonly AppDbContext _context;

    public CartController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public ActionResult<List<Product>> GetCart()
    {
        var cartJson = HttpContext.Session.GetString("cart");

        if (string.IsNullOrEmpty(cartJson))
            return Ok(new List<Product>());

        var cart = JsonSerializer.Deserialize<List<Product>>(cartJson);
        return Ok(cart);
    }

    [HttpPost("{productId}")]
    public async Task<IActionResult> AddToCart(int productId)
    {
        var product = await _context.Products.FindAsync(productId);

        if (product == null)
            return NotFound("Product not found");

        var cartJson = HttpContext.Session.GetString("cart");
        var cart = string.IsNullOrEmpty(cartJson)
            ? new List<Product>()
            : JsonSerializer.Deserialize<List<Product>>(cartJson)!;

        cart.Add(product);

        HttpContext.Session.SetString("cart", JsonSerializer.Serialize(cart));

        return Ok(cart);
    }

    [HttpDelete("{productId}")]
    public IActionResult RemoveFromCart(int productId)
    {
        var cartJson = HttpContext.Session.GetString("cart");

        if (string.IsNullOrEmpty(cartJson))
            return Ok(new List<Product>());

        var cart = JsonSerializer.Deserialize<List<Product>>(cartJson)!;

        var item = cart.FirstOrDefault(p => p.Id == productId);

        if (item != null)
            cart.Remove(item);

        HttpContext.Session.SetString("cart", JsonSerializer.Serialize(cart));

        return Ok(cart);
    }

    [HttpDelete]
    public IActionResult ClearCart()
    {
        HttpContext.Session.Remove("cart");
        return Ok(new List<Product>());
    }
}