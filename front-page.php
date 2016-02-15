<?php get_header(); ?>

<?php get_sidebar('home'); ?>

<!-- Start of loop -->
<?php if (have_posts()) : ?>

	<?php while (have_posts()) : the_post(); ?>

		<?php the_content(); ?>

	<?php endwhile; ?>

<?php else : ?>

<?php endif; ?>
<!-- End of loop -->



<?php get_footer(); ?>
