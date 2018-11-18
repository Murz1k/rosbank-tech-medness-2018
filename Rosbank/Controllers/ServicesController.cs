using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace Rosbank.Controllers
{
    [Route("api/services")]
    [ApiController]
    public class ServicesController
    {

        [HttpGet]
        public List<UserTemplateEnum> GetServicesNames()
        {
            return new List<UserTemplateEnum>{
                new UserTemplateEnum{
                    name="Депозит",
                    id=0,
                },
                new UserTemplateEnum{
                    name="Бухгалтерия",
                    id=1,
                },
                new UserTemplateEnum{
                    name="Овердрафт",
                    id=2,
                }
            };
        }


    }
}