const page = () => {
	return (
		<div className={'flex flex-col items-center justify-center'}>
			<div className="visual-video relative">
				<video autoPlay loop muted>
					<source src="/videos/cleanTrim.webm" type="video/webm" />
					<source src="/videos/cleanTrim.mp4" type="video/mp4" />
				</video>
				<div className="bg absolute left-0 top-0 z-10 h-full w-full bg-achromatic-black/70"></div>
			</div>
		</div>
	)
}
export default page
