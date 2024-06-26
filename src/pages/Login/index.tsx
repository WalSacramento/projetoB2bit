import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import logoB2bit from '../../assets/img/logo_b2bit.svg'
import useAuthStore  from '../../store/auth/Auth.store'
import { Navigate, useNavigate } from 'react-router-dom'
import { verifyToken } from '../../utils/tokenVerification'

export default function Login() {
  const { login, accessToken } = useAuthStore()
  const navigate = useNavigate()

  if (verifyToken(accessToken)) {
    return <Navigate to="/home" />
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Campo obrigatório'),
    password: Yup.string()
      .required('Campo obrigatório')
      .min(6, 'A senha deve conter no mínimo 6 caracteres')
  })

  const handleSubmit = (values: any) => {
    login(values.email, values.password, navigate)
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="bg-white w-full  sm:w-1/2 md:w-1/3 xl:w-3/12 shadow-2xl mt-4 rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex flex-col justify-center items-center py-6">
            <img src={logoB2bit} alt="Logo b2bit" className="w-10/12" />
          </div>
          <div className="mb-4">
            <label
              className="block text-textBlack text-lg font-bold mb-2"
              htmlFor="email"
            >
              E-mail
            </label>
            <Field
              className="bg-boxGray appearance-none border rounded-lg w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="email"
              id="email"
              placeholder="@gmail.com"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-lg mt-1"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-textBlack text-lg font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <Field
              className=" bg-boxGray appearance-none border rounded-lg w-full py-4 px-3 text-textGray leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="password"
              id="password"
              placeholder="***********"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-lg mt-1"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-full bg-blueB2 text-white text-lg font-bold py-4 rounded-lg focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
