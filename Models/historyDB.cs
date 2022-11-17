using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
namespace HesapMakinesi.Models { 

    public class historyDB
    {
        public int Id { get; set; }
        [DataType(DataType.Date)]
        public DateTime ReleaseDate { get; set; }
        public int First { get; set; }
        public char operatr { get; set; }
        public int second { get; set; }
        public int sonuc { get; set; }

    }
    public class historyDbContext : DbContext
    {
        public DbSet<historyDB> historyDBs { get; set; }
    }
}

