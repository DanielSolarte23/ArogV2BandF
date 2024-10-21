export default function Modal({ isOpen, onClose, children }) {

    if (!isOpen) return null

    return (
        <div className='fixed top-12 left-0 w-full h-full  flex justify-center items-center'>
            <div className='bg-white p-2 rounded-lg relative w-5/6 h-[80%] shadow-2xl border-2 border-zinc-100 box-border'>
                <button className='absolute top-2 right-2 bg-verde-principal rounded-md p-1 cursor-pointer' onClick={onClose}>
                    Cerrar
                </button>
                {children}
            </div>
        </div>
    )
}
