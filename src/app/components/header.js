export default function Header(){
    return (

        <div className='container mx-auto flex '>
            <img src='https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg'></img>
            <div className='flex flex-grow  text-center space-x-6 place'>
                <button className='ml-auto text-center place-self-center font-medium' >
                    Crypto Taxes
                </button>
                <button className='text-center place-self-center font-medium'>
                    Free Tools
                </button>
                <button className='place-self-center font-medium'>
                    Resource Center
                </button>
                <button className='place-self-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-md p-2 text-white px-6 font-medium'>
                    Get Started
                </button>
            </div>
        </div>

    )
}