<?php 
/*
	Template Name: Contact Page
*/
?>


<?php get_header(); ?>



<main class="row">
	<section class="content content--contact">

		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

			<h1><?php the_title(); ?></h1>
			<?php the_content(); ?>

		<?php endwhile; endif; ?>

	</section>
</main>

<?php get_footer(); ?>