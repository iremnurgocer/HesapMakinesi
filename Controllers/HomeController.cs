using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using HesapMakinesi.Models;

namespace HesapMakinesi.Controllers
{

   
    public class HomeController : Controller
    {
        
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult history(int x)
        {
            ViewData["first"] = x;
            return View();
        }


    }
}