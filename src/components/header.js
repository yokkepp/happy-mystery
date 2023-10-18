import Image from "next/image";
import React from "react";
import Link from "next/link";

function Header() {
	return (
		<div className=' h-12 bg-gray-100 flex justify-between shadow-sm'>
			<Link href='/'>
				<button className=' h-12 w-12 p-1'>
					<Image src='/images/home.png' width={64} height={64} alt='home' />
				</button>
			</Link>
			<h1 className='text-neutral-800 font-bold text-center  text-2xl leading-[48px]'>
				BirthDay-App
			</h1>
			<div className='h-12 w-12 p-1'></div>
		</div>
	);
}

export default Header;
