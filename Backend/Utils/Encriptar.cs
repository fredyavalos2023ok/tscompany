using Microsoft.EntityFrameworkCore.Infrastructure;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Cryptography;

namespace BackEnd.Utils
{
    public static class Encriptar
    {
        public static string EncriptarPassword(string input)
        {
            MD5 mdSHash = MD5.Create();
            // Convert the input string to a byte array and compute the hash.
            byte[] data = mdSHash.ComputeHash(Encoding.UTF8.GetBytes(input));
            StringBuilder sBuilder = new StringBuilder();
            for (int i = 0; i < data.Length; i++)
            {
                sBuilder.Append(data[i].ToString("x2"));
            }
            return sBuilder.ToString();
        }
        
    }
}
