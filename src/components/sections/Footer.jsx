export default function Footer() {
    const year = new Date().getFullYear();
    
    return (
        <footer class="py-5 bg-dark text-white">
            {/* <ul class="nav justify-content-center pb-3 mb-3">
                <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Home</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Features</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
            </ul> */}
            <div className="container">
                <p class="text-center">© {year} Alvaro B. Rodriguez</p>
                <p class="text-center">If you reached this far make sure to use the form to contact me!</p>
            </div>
        </footer>
    )
}