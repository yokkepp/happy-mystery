"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
export default function Home() {
	const [answer, setAnswer] = useState("");
	const [check, setCheck] = useState(0);
	const [firstCheck, setFirstCheck] = useState(true);

	const handleChange = (e) => {
		setAnswer(e.target.value);
	};

	const handleCheck = () => {
		if (answer === "OMEDETOU") {
			setCheck(true);
			setFirstCheck(false);
		} else {
			setCheck(false);
			setFirstCheck(false);
		}
	};
	return (
		<div className='p-5'>
			<h1 className='text-3xl text-center pt-10 underline text-orange-500'>
				Congratulations!!
			</h1>
			<h2 className='text-center mt-3 pb-10'>全ての問題をクリア！</h2>
			<div className=''>
				<p className='my-2'>
					全ての問題をクリアしたM子さんは、無事脱出に成功し気持ちの良い誕生日を迎えるのであった。
				</p>
				<p>今年も、M子さんにとって成長と幸せの年になりますように☆</p>
			</div>
			<div className='w-full h-[100vw] relative my-1'>
				<Image
					className=' object-contain'
					src='/images/outofprison.png'
					fill
					alt='escape'
				/>
			</div>
			<p className='text-center pb-10'>
				残されたキーボックスの謎は解けたかな？
			</p>
			<div className='w-full text-center'>
				<Link href={"/"}>
					<button
						className=' bg-gray-500 px-10 py-3 rounded-md mb-5'
						onClick={handleCheck}>
						TOPに戻る
					</button>
				</Link>
			</div>
		</div>
	);
}
