const App = () => {
  return (
    <div class="body-wrap">
			<header class="site-header reveal-from-bottom">
				<div class="container">
					<div class="site-header-inner">
						<div class="brand">
							<h1 class="m-0">
								<a href="index.html"
									><img
										src="images/logo.svg"
										alt="Cube"
										width="32"
										height="32"
								/></a>
							</h1>
						</div>
						<button
							id="header-nav-toggle"
							class="header-nav-toggle"
							aria-controls="primary-menu"
							aria-expanded="false"
						>
							<span class="screen-reader">Menu</span>
							<span class="hamburger"
								><span class="hamburger-inner"></span
							></span>
						</button>
						<nav id="header-nav" class="header-nav">
							<div class="header-nav-inner">
								<ul
									class="list-reset text-xxs header-nav-right"
								>
									<li><a href="#">Home</a></li>
									<li><a href="#">Features</a></li>
									<li><a href="#">Pricing</a></li>
									<li><a href="#">Showcase</a></li>
								</ul>
								<ul class="list-reset header-nav-right">
									<li>
										<a
											class="
												button
												button-primary
												button-wide-mobile
												button-sm
											"
											href="#"
											>Sign up</a
										>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</header>
			<main class="site-content">
				<section
					class="hero section center-content illustration-section-01"
				>
					<div class="container-sm">
						<div class="hero-inner section-inner">
							<div class="hero-content">
								<h1
									class="mt-0 mb-16 reveal-from-bottom"
									data-reveal-delay="200"
								>
									Landing template for startups
								</h1>
								<div class="container-xs">
									<p
										class="mt-0 mb-32 reveal-from-bottom"
										data-reveal-delay="400"
									>
										Our landing page template works on all
										devices, so you only have to set it up
										once, and get beautiful results forever.
									</p>
								</div>
							</div>
							<div
								class="
									hero-figure
									reveal-from-bottom
									illustration-element-01
								"
								data-reveal-value="20px"
								data-reveal-delay="800"
							>
								<img
									class="has-shadow"
									src="images/hero-image.png"
									alt="Hero image"
									width="896"
									height="504"
								/>
							</div>
						</div>
					</div>
				</section>
				<section class="clients section reveal-fade">
					<div class="container">
						<div
							class="
								clients-inner
								section-inner
								has-top-divider has-bottom-divider
							"
						>
							<ul class="list-reset">
								<li>
									<img
										src="images/clients-01.svg"
										alt="Clients 01"
									/>
								</li>
								<li>
									<img
										src="images/clients-02.svg"
										alt="Clients 02"
									/>
								</li>
								<li>
									<img
										src="images/clients-03.svg"
										alt="Clients 03"
									/>
								</li>
								<li>
									<img
										src="images/clients-04.svg"
										alt="Clients 04"
									/>
								</li>
								<li>
									<img
										src="images/clients-05.svg"
										alt="Clients 05"
									/>
								</li>
							</ul>
						</div>
					</div>
				</section>
				<section class="features-tiles section">
					<div class="container">
						<div class="features-tiles-inner section-inner">
							<div class="tiles-wrap">
								<div class="tiles-item reveal-from-bottom">
									<div class="tiles-item-inner">
										<div class="features-tiles-item-header">
											<div
												class="
													features-tiles-item-image
													mb-16
												"
											>
												<img
													src="images/feature-tile-icon-01.svg"
													alt="Feature tile icon 01"
													width="64"
													height="64"
												/>
											</div>
										</div>
										<div
											class="features-tiles-item-content"
										>
											<h4 class="mt-0 mb-8">
												Join the system
											</h4>
											<p class="m-0 text-sm">
												A pseudo-Latin text used in web
												design, layout, and printing in
												place of things to emphasise
												design.
											</p>
										</div>
									</div>
								</div>
								<div
									class="tiles-item reveal-from-bottom"
									data-reveal-delay="200"
								>
									<div class="tiles-item-inner">
										<div class="features-tiles-item-header">
											<div
												class="
													features-tiles-item-image
													mb-16
												"
											>
												<img
													src="images/feature-tile-icon-02.svg"
													alt="Feature tile icon 02"
													width="64"
													height="64"
												/>
											</div>
										</div>
										<div
											class="features-tiles-item-content"
										>
											<h4 class="mt-0 mb-8">
												Join the system
											</h4>
											<p class="m-0 text-sm">
												A pseudo-Latin text used in web
												design, layout, and printing in
												place of things to emphasise
												design.
											</p>
										</div>
									</div>
								</div>
								<div
									class="tiles-item reveal-from-bottom"
									data-reveal-delay="400"
								>
									<div class="tiles-item-inner">
										<div class="features-tiles-item-header">
											<div
												class="
													features-tiles-item-image
													mb-16
												"
											>
												<img
													src="images/feature-tile-icon-03.svg"
													alt="Feature tile icon 03"
													width="64"
													height="64"
												/>
											</div>
										</div>
										<div
											class="features-tiles-item-content"
										>
											<h4 class="mt-0 mb-8">
												Join the system
											</h4>
											<p class="m-0 text-sm">
												A pseudo-Latin text used in web
												design, layout, and printing in
												place of things to emphasise
												design.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="pricing section">
					<div class="container">
						<div
							class="pricing-inner section-inner has-top-divider"
						>
							<div class="section-header center-content">
								<div class="container-xs">
									<h2 class="mt-0 mb-16">
										Simple, transarent pricing
									</h2>
									<p class="m-0">
										Lorem ipsum is common placeholder text
										used to demonstrate the graphic elements
										of a document or visual presentation.
									</p>
								</div>
							</div>
							<div class="tiles-wrap">
								<div class="tiles-item reveal-from-bottom">
									<div class="tiles-item-inner has-shadow">
										<div class="pricing-item-content">
											<div
												class="
													pricing-item-header
													pb-24
													mb-24
												"
											>
												<div
													class="
														pricing-item-price
														mb-4
													"
												>
													<span
														class="
															pricing-item-price-currency
															h2
														"
														>$</span
													><span
														class="
															pricing-item-price-amount
															h1
															pricing-switchable
														"
														data-pricing-monthly="34"
														data-pricing-yearly="27"
														>27</span
													>
												</div>
												<div
													class="
														text-xs text-color-low
													"
												>
													Lorem ipsum is a common text
												</div>
											</div>
											<div
												class="
													pricing-item-features
													mb-40
												"
											>
												<div
													class="
														pricing-item-features-title
														h6
														text-xs text-color-high
														mb-24
													"
												>
													What’s included
												</div>
												<ul
													class="
														pricing-item-features-list
														list-reset
														text-xs
														mb-32
													"
												>
													<li class="is-checked">
														Excepteur sint occaecat
														velit
													</li>
													<li class="is-checked">
														Excepteur sint occaecat
														velit
													</li>
													<li class="is-checked">
														Excepteur sint occaecat
														velit
													</li>
													<li>
														Excepteur sint occaecat
														velit
													</li>
													<li>
														Excepteur sint occaecat
														velit
													</li>
												</ul>
											</div>
										</div>
										<div class="pricing-item-cta mb-8">
											<a
												class="
													button
													button-primary
													button-block
												"
												href="#"
												>Start free trial</a
											>
										</div>
									</div>
								</div>
								<div
									class="tiles-item reveal-from-bottom"
									data-reveal-delay="200"
								>
									<div class="tiles-item-inner has-shadow">
										<div class="pricing-item-content">
											<div
												class="
													pricing-item-header
													pb-24
													mb-24
												"
											>
												<div
													class="
														pricing-item-price
														mb-4
													"
												>
													<span
														class="
															pricing-item-price-currency
															h2
														"
														>$</span
													><span
														class="
															pricing-item-price-amount
															h1
															pricing-switchable
														"
														data-pricing-monthly="54"
														data-pricing-yearly="47"
														>47</span
													>
												</div>
												<div
													class="
														text-xs text-color-low
													"
												>
													Lorem ipsum is a common text
												</div>
											</div>
											<div
												class="
													pricing-item-features
													mb-40
												"
											>
												<div
													class="
														pricing-item-features-title
														h6
														text-xs text-color-high
														mb-24
													"
												>
													What’s included
												</div>
												<ul
													class="
														pricing-item-features-list
														list-reset
														text-xs
														mb-32
													"
												>
													<li class="is-checked">
														Excepteur sint occaecat
														velit
													</li>
													<li class="is-checked">
														Excepteur sint occaecat
														velit
													</li>
													<li class="is-checked">
														Excepteur sint occaecat
														velit
													</li>
													<li class="is-checked">
														Excepteur sint occaecat
														velit
													</li>
													<li>
														Excepteur sint occaecat
														velit
													</li>
												</ul>
											</div>
										</div>
										<div class="pricing-item-cta mb-8">
											<a
												class="
													button
													button-primary
													button-block
												"
												href="#"
												>Start free trial</a
											>
										</div>
									</div>
								</div>
								<div
									class="tiles-item reveal-from-bottom"
									data-reveal-delay="400"
								>
									<div class="tiles-item-inner has-shadow">
										<div class="pricing-item-content">
											<div
												class="
													pricing-item-header
													pb-24
													mb-24
												"
											>
												<div
													class="
														pricing-item-price
														mb-4
													"
												>
													<span
														class="
															pricing-item-price-currency
															h2
														"
														>$</span
													><span
														class="
															pricing-item-price-amount
															h1
															pricing-switchable
														"
														data-pricing-monthly="74"
														data-pricing-yearly="67"
														>67</span
													>
												</div>
												<div
													class="
														text-xs text-color-low
													"
												>
													Lorem ipsum is a common text
												</div>
											</div>
											<div
												class="
													pricing-item-features
													mb-40
												"
											>
												<div
													class="
														pricing-item-features-title
														h6
														text-xs text-color-high
														mb-24
													"
												>
													What’s included
												</div>
												<ul
													class="
														pricing-item-features-list
														list-reset
														text-xs
														mb-32
													"
												>
													<li class="is-checked">
														Excepteur sint occaecat
														velit
													</li>
													<li class="is-checked">
														Excepteur sint occaecat
														velit
													</li>
													<li class="is-checked">
														Excepteur sint occaecat
														velit
													</li>
													<li class="is-checked">
														Excepteur sint occaecat
														velit
													</li>
													<li class="is-checked">
														Excepteur sint occaecat
														velit
													</li>
												</ul>
											</div>
										</div>
										<div class="pricing-item-cta mb-8">
											<a
												class="
													button
													button-primary
													button-block
												"
												href="#"
												>Start free trial</a
											>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer class="site-footer center-content-mobile">
				<div class="container">
					<div class="site-footer-inner">
						<div class="footer-top space-between text-xxs">
							<div class="brand">
								<a href="index.html"
									><img
										src="images/logo.svg"
										alt="Cube"
										width="32"
										height="32"
								/></a>
							</div>
							<div class="footer-social">
								<ul class="list-reset">
									<li>
										<a href="#"
											><svg
												width="16"
												height="16"
												viewBox="0 0 16 16"
												xmlns="http://www.w3.org/2000/svg"
											>
												<title>Facebook</title>
												<path
													d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
												/></svg
										></a>
									</li>
									<li>
										<a href="#"
											><svg
												width="16"
												height="16"
												viewBox="0 0 16 16"
												xmlns="http://www.w3.org/2000/svg"
											>
												<title>Twitter</title>
												<path
													d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
												/></svg
										></a>
									</li>
									<li>
										<a href="#"
											><svg
												width="16"
												height="16"
												viewBox="0 0 16 16"
												xmlns="http://www.w3.org/2000/svg"
											>
												<title>Instagram</title>
												<g>
													<circle
														cx="12.145"
														cy="3.892"
														r="1"
													/>
													<path
														d="M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"
													/>
													<path
														d="M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"
													/>
												</g></svg
										></a>
									</li>
								</ul>
							</div>
						</div>
						<div
							class="
								footer-bottom
								space-between
								text-xxs
								invert-order-desktop
							"
						>
							<nav class="footer-nav">
								<ul class="list-reset">
									<li><a href="#">Contact</a></li>
									<li><a href="#">About us</a></li>
									<li><a href="#">FAQ's</a></li>
									<li><a href="#">Support</a></li>
								</ul>
							</nav>
							<div class="footer-copyright">
								&copy; 2020 Cube, all rights reserved
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
  );
};

export default App;
