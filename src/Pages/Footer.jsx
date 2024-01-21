import Rating from "../components/Rating"


const Footer = () => {
	return (
		<footer class="" id="Footer">
			<div class="mx-auto w-full max-w-screen-xl px-8 py-6 lg:py-8">
				<div class="md:flex md:justify-center">
					<div class="mb-6 md:mb-0">
						<a href="#" class="flex justify-center">
							<img
								src="/LogoTKJ3.png"
								alt=""
								className="h-[4.5rem] w-[4.5rem] right-2 relative rounded-full brightness-200"
							/>
							<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
						</a>
					</div>
					<div class="grid grid-cols-2 sm:grid-cols-3">
					<div className="flex mt-4 justify-center sm:mt-0">
							<ul class="text-gray-400 dark:text-gray-400 font-medium">
								<li class="mb-2">
								<h2 class="mb-4 text-sm font-semibold uppercase text-white">CREATED BY</h2>
								<a href="https://www.tiktok.com/@boyscode0163?_t=8iYJRQOD53S&_r=1" class="hover:underline">
										Boys Code
									</a>
								</li>
								<li>
									<a href="https://www.instagram.com/randii0163/?hl=id" class="hover:underline">
										Randi
									</a>
								</li>
							</ul>
							
							</div>
						
					
						<div className="flex mt-4 justify-center sm:mt-0">
							<ul class="text-gray-400 dark:text-gray-400 font-medium">
								<li class="mb-2">
								<h2 class="mb-4 text-sm font-semibold uppercase text-white">Follow us</h2>
									<a href="https://www.instagram.com/unesco.mandupann/?hl=id" class="hover:underline ">
										Instagram
									</a>
								</li>
								<li>
									<a href="https://www.youtube.com/@BelajarCoding0163" class="hover:underline">
										Youtube
									</a>
								</li>
							</ul>
							</div>
						

						<div className="hidden md:block">
							<Rating />
						</div>
					</div>
					
					<div className="flex items-center justify-center mt-8  md:hidden">
						{/* RATING */}
						<Rating />
					</div>
				</div>
				<hr class="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<div class="sm:flex sm:items-center sm:justify-center">
					<div class="flex mt-4 justify-center sm:mt-0">
						<p className="text-[0.7rem] text-white opacity-70">
							© {new Date().getFullYear()} Kelas XI IPS 1 | Di Kelola Oleh Siswa IPS 1
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
