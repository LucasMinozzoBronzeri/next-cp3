import logo from "../../../public/116px-UEFA_Champions_League_logo_2_svg.png"

const Header = () => {
    return (
        <>
        <header>
            <div className= "flex items-center bg-blue-800 grid grid-cols-3 gap-2 place-content-center h-60"><img className="flex justify-start scale-50" src="116px-UEFA_Champions_League_logo_2_svg.png" alt="Logo" />
            <p className= "flex justify-center text-4xl">Os melhores filmes estão aqui</p>
            </div>
        </header>
        </>
    );
};

export default Header;