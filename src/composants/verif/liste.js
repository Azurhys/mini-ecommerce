import Joi from "joi";

// super if 

export const contactVerif = Joi.object({
    email : Joi.string()
               .min(4)
               .max(255)
               .email({ tlds: { allow: false } })
               .required()
               .messages({
                    "string.min" : "le champ email doit contenir au minimum 4 lettres",
                    "string.email" : "le format de l'email n'est pas valide"
               }),
    message : Joi.string()
                  .min(4)
                  .max(1000)
                  .regex(/^[^<>]*$/)
                  .required()
                  .messages({
                    "string.pattern.base" : "le champ message ne peut pas contenir les caractères suivants : < >"
                  })
})



