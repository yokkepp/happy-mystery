import Image from "next/image";
import Link from "next/link";
export default function Home() {
	return (
		<div className='p-5'>
			<h1 className='text-2xl text-center py-10 underline'>進め方</h1>
			<div className=''>
				<p className='my-2'>このイベントは、リアルとバーチャルの複合型です。</p>
				<p className='my-2'>
					1階にあるヒントをもとに攻略することで脱出することができます。
				</p>
				<p className='my-2'>
					1階にあるものと、現在使用しているスマートフォンを使って脱出しましょう！
				</p>
				<p className='my-2 text-red-500'>
					※このアプリは、デバイス上に一時的にデータを保存するため、サイトを再読み込みしてしまうとデータが消えてしまいますので、ご注意ください。
				</p>
			</div>
			<div className='w-full h-[100vw] relative my-5'>
				<Image
					className=' object-contain'
					src='/images/escape.jpg'
					fill
					alt='escape'
				/>
			</div>
			<div className='w-full text-center'>
				<Link href='/chapter1aijvn'>
					<button className=' bg-green-600 px-10 py-3 rounded-md mb-5'>
						START →
					</button>
				</Link>
			</div>
		</div>
	);
}
