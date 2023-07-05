import { useRef } from "react"

interface FormularioProps {
    a: string
    b: string
    c: string
    d: string
}

export const Formulario = ({a, b, c, d}:FormularioProps) => {
        
const formRef = useRef<HTMLFormElement>(null)

const resetFormulario = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    formRef.current?.reset()
}

    return(
        <div className="md:w-1/3 bg-slate-100 opacity-90 p-8 rounded-2xl">
            <form onSubmit={resetFormulario} ref={formRef} className="flex flex-col">
                <input placeholder={a} required={true} className="p-2 m-3 rounded placeholder:italic"/>
                <input placeholder={b} type="tel" required={true} minLength={8} maxLength={14} className="p-2 m-3 rounded input-number placeholder:italic"/>
                <input placeholder={c} type="email" required={true} className="p-2 m-3 rounded placeholder:italic"/>
                <textarea placeholder={d} required={true} className="resize-none p-2 m-3 rounded placeholder:italic h-32"/>
                <button className='text-lime-600 bg-slate-200 hover:bg-slate-400 active:bg-slate-600 opacity-90 rounded p-2'>Enviar</button>
            </form>
        </div>
    )
}