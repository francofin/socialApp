using System;
using API.Data;
using API.Interfaces;
using API.Services;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions;

//static can use methods without new instance, config for services that require config
public static class ApplicationServiceExtensions
{

    public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
    {
        services.AddControllers();
        services.AddDbContext<DataContext>(opt =>
        {
            opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
        });
        services.AddCors();
        //Specify the lifetime of the token service, Singleton created first time requested. Good for caching data across whole application
        //Add Transient, created each time requested, considered too short
        //AddScoped created once per client request and is http request, counts as a request. 
        services.AddScoped<ITokenService, TokenService>();

        return services;
    }

}
