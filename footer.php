<?php wp_footer(); ?>

	<!-- Scripts -->
	<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
	<script>
		(function(i, s, o, g, r, a, m) {
			i['GoogleAnalyticsObject'] = r;
			i[r] = i[r] || function() {
				(i[r].q = i[r].q || []).push(arguments)
			}, i[r].l = 1 * new Date();
			a = s.createElement(o),
				m = s.getElementsByTagName(o)[0];
			a.async = 1;
			a.src = g;
			m.parentNode.insertBefore(a, m)
		})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
		ga('create', 'UA-XXXXXXXX-X', 'auto');
		ga('send', 'pageview');
	</script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/main.js"></script>
	<!-- hidden background loaders -->
	<div class="bg-load bg-load1"></div>
	<div class="bg-load bg-load2"></div>
	<div class="bg-load bg-load3"></div>
	<div class="bg-load bg-load4"></div>

	</body>

	</html>
