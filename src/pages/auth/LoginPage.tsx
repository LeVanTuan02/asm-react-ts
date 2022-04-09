import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { signin } from "../../api/auth";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { updateTitle } from "../../utils";

type InputsType = {
    email: string
    password: string
}

const schema = yup.object().shape({
    email: yup
        .string()
        .required("Vui lòng nhập địa chỉ email")
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email không đúng định dạng"),
    password: yup
        .string()
        .required("Vui lòng nhập mật khẩu")
});

type LoginPageProps = {
    onLogin: () => void
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<InputsType>({ resolver: yupResolver(schema) });

    const navigate = useNavigate();
    const onSubmit: SubmitHandler<InputsType> = async dataInput => {
        try {
            const { data } = await signin(dataInput);
            if (!data.user.active) {
                toast.info("Tài khoản của bạn đã bị khóa, vui lòng liên hệ QTV");
            } else {
                localStorage.setItem("auth", JSON.stringify(data));
                toast.success("Đăng nhập thành công");

                if (data.user.role) {
                    navigate("/admin");
                } else {
                    navigate("/");
                }
                
                onLogin();
            }
            
        } catch (error: any) {
            toast.error(error.response.data.message);
        }
    };

    useEffect(() => {
        updateTitle("Đăng nhập");
    }, []);

    return (
        <section className="container max-w-6xl mx-auto px-3">
            <h1 className="uppercase mt-8 font-semibold text-2xl text-gray-600">Đăng nhập</h1>

            <form action="" className="mb-14" method="POST" onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-3">
                    <label htmlFor="form__login-user" className="font-semibold block mb-1">Địa chỉ email *</label>
                    <input
                        type="text"
                        {...register("email")}
                        id="form__login-user"
                        className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none"
                        placeholder="Nhập địa chỉ email"
                    />
                    <div className="text-sm text-red-500 mt-0.5">{errors.email?.message}</div>
                </div>

                <div className="mt-3">
                    <label htmlFor="form__login-password" className="font-semibold block mb-1">Mật khẩu *</label>
                    <input
                        type="password"
                        {...register("password")}
                        id="form__login-password"
                        className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none"
                        placeholder="Mật khẩu"
                    />
                    <div className="text-sm text-red-500 mt-0.5">{errors.password?.message}</div>
                </div>

                <div className="flex mt-3 items-center">
                    <input type="checkbox" name="" id="login_remember" />
                    <label htmlFor="login_remember" className="ml-2 font-semibold select-none">Ghi nhớ mật khẩu</label>
                </div>

                <button className="select-none mt-4 px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Đăng nhập</button>

                <Link to="/forgot" className="block mt-1">Quên mật khẩu?</Link>
            </form>
        </section>
    )
}

export default LoginPage;