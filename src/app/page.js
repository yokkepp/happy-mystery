import Image from "next/image";
import Link from "next/link";
export default function Home() {
	return (
		<div className='p-5'>
			<h1 className='text-2xl text-center py-10 underline'>プロローグ</h1>
			<p>
				誕生日を迎えたM子さんは、子供達のサプライズによって、リビングに閉じ込められてしまった。
				ヒントがあったのは、このサイトのURLだけ。
				謎解きが得意とは言えないM子さんは、必死に脱出を試みるのだった。
			</p>
			<div className='w-full h-[300px] relative my-5'>
				<Image
					className=' object-contain'
					src='/images/prison.png'
					fill
					alt='escape'
				/>
			</div>
			<div className='w-full text-center'>
				<Link href='/howto'>
					<button className=' bg-green-600 px-10 py-3 rounded-md mb-5'>
						NEXT
					</button>
				</Link>
			</div>
		</div>
	);
}
