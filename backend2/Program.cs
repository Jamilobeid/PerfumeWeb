using backend2.Data;
using backend2.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors("AllowReactApp");

app.UseStaticFiles();

app.UseHttpsRedirection();

app.MapControllers();

// Seed products into database
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();

    if (!context.Products.Any())
    {
        context.Products.AddRange(
            new Product { Name = "Dior Sauvage", Category = "Men", Price = 30, Image = "/sauvage.jpg" },
            new Product { Name = "Bleu de Chanel", Category = "Men", Price = 30, Image = "/bluedechanel.jpg" },
            new Product { Name = "Acqua di Gio", Category = "Men", Price = 30, Image = "/acquadigio.jpg" },
            new Product { Name = "Armani Code", Category = "Men", Price = 30, Image = "/armanicode.jpg" },
            new Product { Name = "Azzaro Wanted", Category = "Men", Price = 30, Image = "/azzarowanted.jpg" },
            new Product { Name = "Versace Eros", Category = "Men", Price = 30, Image = "/versaceeros.jpg" },
            new Product { Name = "Tom Ford Noir", Category = "Men", Price = 30, Image = "/tomford.jpg" },
            new Product { Name = "YSL Y", Category = "Men", Price = 30, Image = "/ysly.jpg" },
            new Product { Name = "Creed Aventus", Category = "Men", Price = 30, Image = "/creedaventus.jpg" },

            new Product { Name = "Black Opium", Category = "Women", Price = 30, Image = "/blackopium.jpg" },
            new Product { Name = "Miss Dior", Category = "Women", Price = 30, Image = "/misssdior.jpg" },
            new Product { Name = "Libre", Category = "Women", Price = 30, Image = "/libre.jpg" },
            new Product { Name = "La Vie Est Belle", Category = "Women", Price = 30, Image = "/laviewestbelle.jpg" },
            new Product { Name = "Good Girl", Category = "Women", Price = 30, Image = "/goodgirl.jpg" },
            new Product { Name = "Flowerbomb", Category = "Women", Price = 30, Image = "/flowerbomb.jpg" },
            new Product { Name = "Chanel Chance", Category = "Women", Price = 30, Image = "/chanelchance.jpg" },
            new Product { Name = "Elie Saab", Category = "Women", Price = 30, Image = "/eliesaab.jpg" },
            new Product { Name = "Golden Bloom", Category = "Women", Price = 30, Image = "/goldenbloom.jpg" },
            new Product { Name = "Born in Roma", Category = "Women", Price = 30, Image = "/borninroma.jpg" },

            new Product { Name = "Midnight Oud", Category = "Unisex", Price = 30, Image = "/midnightoud.jpg" },
            new Product { Name = "Mystic Noir", Category = "Unisex", Price = 30, Image = "/mysticnoir.jpg" },
            new Product { Name = "Ocean Whisper", Category = "Unisex", Price = 30, Image = "/oceanwhisper.jpg" },
            new Product { Name = "Royal Amber", Category = "Unisex", Price = 30, Image = "/royalamber.jpg" },
            new Product { Name = "Velvet Rose", Category = "Unisex", Price = 30, Image = "/velvetrose.jpg" },
            new Product { Name = "Xerjoff Naxos", Category = "Unisex", Price = 30, Image = "/xerjkoffnaxos.jpg" }
        );

        context.SaveChanges();
    }
}

app.Run();