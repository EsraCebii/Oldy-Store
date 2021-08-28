import * as yup from "yup";

const validations = yup.object().shape({
    email: yup
    .string()
    .email("Geçerli bir email giriniz.")
    .required("Zorunlu alan."),
    password: yup
    .string()
    .min(3, "Parolanız en az 3 karakter olmalıdır.")
    .required(),
    passwordCorfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Parolalar uyuşmuyor.")
    .required(),
})
export default validations;