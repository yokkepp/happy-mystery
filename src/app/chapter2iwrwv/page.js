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
		if (answer === "翔") {
			setCheck(true);
			setFirstCheck(false);
		} else {
			setCheck(false);
			setFirstCheck(false);
		}
	};
	return (
		<div className='p-5'>
			{check === true ? (
				<h1 className='text-3xl text-center pt-10  text-green-500'>2</h1>
			) : (
				<h1 className='text-3xl text-center pt-10 underline'>Chapter2</h1>
			)}
			<h2 className='text-center mt-3 pb-10'>エイリアン？</h2>
			<div className=''>
				<p className='my-2'>
					リビングに生息している、「5本足のエイリアン」の頭の裏にはメッセージが書かれているようだ。彼らからのメッセージが意味するものとは何か？
				</p>
			</div>
			<div className='w-full h-[300px] relative my-5'>
				<Image
					className=' object-contain'
					src='/images/alien.png'
					fill
					alt='escape'
				/>
			</div>
			<div className='my-3'>
				<input
					type='text'
					className='w-full p-3 rounded-md mb-5 text-gray-900 text-lg'
					placeholder='答えを入力してください'
					onChange={(e) => handleChange(e)}
					value={answer}
				/>

				{check && firstCheck === false ? (
					<>
						<p className='text-green-500 font-bold text-lg text-center'>
							正解！
						</p>
						<p className='text-green-500 text-center'>
							次のChapterを解放しよう。
						</p>

						<Image
							src={"/images/nextstep.jpeg"}
							className='mx-auto my-5'
							width={200}
							height={200}
							alt=''
						/>
					</>
				) : (
					<p className={firstCheck ? "hidden" : "text-red-600 text-center"}>
						回答が間違っているようだ・・・
					</p>
				)}
			</div>
			<div className='w-full text-center'>
				{check === true ? (
					<Link href={"/chapter3uidpa"}>
						<button className=' bg-orange-600 px-10 py-3 rounded-md mb-5'>
							次のChapterへ
						</button>
					</Link>
				) : (
					<button
						className=' bg-green-600 px-10 py-3 rounded-md mb-5'
						onClick={handleCheck}>
						回答する
					</button>
				)}
			</div>
		</div>
	);
}
