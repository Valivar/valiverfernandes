import React,{useRef, useEffect} from 'react';
const Header = () => {
    // const pathname='src\components\UI\Modal.jsx';

    const headerRef = useRef(null);
    const menuRef  = useRef(null);

    const stickyHeaderFunc = ()=>{
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('sticky_header')
            }else{
                headerRef.current.classList.remove('sticky_header')
            }
        })
    }
    useEffect(()=>{
        stickyHeaderFunc()
        return window.removeEventListener('scroll',stickyHeaderFunc)
    },[]);

    const handleClick = e=>{
        e.preventDefault()

        const targetAttr = e.target.getAttribute('href')
        const location = document.querySelector(targetAttr).offsetTop
        window.scrollTo({
            top:location- 80,
            left: 0,
        });
    };
    const toggleMenu =  ()=> menuRef.current.classList.toggle('show_menu')

    return <header ref={headerRef} className="w-full h-[60px] leading-[80px] flex items-center justify-between">
        <div className="container">
            <div className="flex items-center justify-between w-full">
                {/*===========logo===========*/}
                <div className="flex items-center gap-[10px]">
                    <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
                        V
                    </span>
                    <div className="leading-[20px]">
                        <h2 className="text-xl text-smallTextColor font-[700]">Valivar A Fernandes</h2>
                        
                    </div>
                </div>
                {/*======================logo end===============*/}
                {/*======================menu start===============*/}
                <div className="menu" ref={menuRef} onClick={toggleMenu}>
                    <ul className="flex items-center gap-10">
                        <li><a onClick={handleClick} className="text-smallTextColor font-[600]" href="#about">About</a></li>
                        <li><a onClick={handleClick} className="text-smallTextColor font-[600]" href="#education">Skills</a></li>
                        <li><a onClick={handleClick} className="text-smallTextColor font-[600]" href="#portfolio">Project</a></li>
                        <li><a onClick={handleClick} className="text-smallTextColor font-[600]" href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div onClick={toggleMenu} className='flex items-center'>
                    <span className='text-2xl text-smallTextColor md:hidden cursor-pointer'><i class="ri-menu-line"></i></span>
                </div>
                {/*======================menu end===============*/}
                
            </div>

        </div>
    </header>


        
    
}; 
export default Header;