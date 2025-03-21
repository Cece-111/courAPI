import Joi from "joi"

export interface UpdateProductRequest {
    id: number,
    name: string,
    price: number
}

export const UpdateProductValidation = Joi.object<UpdateProductRequest>({
    id: Joi.number().required(),
    name: Joi.string()
        .min(3)
        .required(),
    price: Joi.number()
        .required(),
}).options({ abortEarly: false })