import { Button } from "@/components";
import { Input } from "@/components";

export default function Login() {
    return (
        <main className="bg-black m-0 box-border flex justify-center items-center h-screen w-full p-0 font-sans">

            <section className="flex w-2/4 items-center justify-center">
                <div className="w-2/4 divide-solid border-2 rounded-3xl p-10 bg-white" >

                    <h1 className="mb-8 text-center text-4xl font-bold text-black">Login</h1>

                    <h3 className="mb-14 text-center text-xl text-black">
                        Faça login para acessar sua conta
                    </h3>

                    <form>
                        <Input placeholder="Digite seu email">email</Input>

                        <Input placeholder="Digite sua senha">senha</Input>

                        <div className="mb-16 mt-2 flex justify-end pr-4">
                            <a className="font-bold text-gray-400" href="#">
                                Esqueceu sua Senha?
                            </a>
                        </div>

                        <Button>Acessar</Button>
                    </form>
                </div>
            </section>
        </main>
    );
}