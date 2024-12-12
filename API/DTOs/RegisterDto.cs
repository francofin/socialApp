using System;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class RegisterDto
{
    //using this way passes it up as username, can use [Required] attr on top
    [MaxLength(250)]
    public required string Username { get; set; }

    public required string Password { get; set; }

}
