using System;
using API.Entities;

namespace API.Interfaces;

public interface ITokenService
{
    //What we want to return a string.
    string CreateToken(AppUser user);
}
