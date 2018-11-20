using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace Rosbank.Controllers
{
    [Route("api/template")]
    [ApiController]
    public class TemplateController
    {

        [HttpGet]
        public List<UserTemplateEnum> getEnumNames()
        {
            return new List<UserTemplateEnum>{
                new UserTemplateEnum{
                    name="Хранит большие деньги на счетах",
                    id=0,
                },
                new UserTemplateEnum{
                    name="Выходит в ноль",
                    id=1,
                },
                new UserTemplateEnum{
                    name="Необходим кредит",
                    id=2,
                }
            };
        }


    }
}