<?php get_header(); ?>

<main class="main">
  <div class="gallery gallery--flex" id="gallery">

		<!-- cards -->
		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
			<section class='card'>
			  <div class='card__img'>
			    <?php the_post_thumbnail(); ?>
			  </div>
			  <div class='card__cont u-flex u-flex--c'>
			    <h3 class='h6 card__title'><?php the_title(); ?></h3>
			    <p class='h6 card__sub'><?php the_excerpt(); ?></p>
			  </div>
			</section>
		<?php endwhile; else : ?>
			<p><?php _e( 'Sorry, nothing to see here.' ); ?></p>
		<?php endif; ?>

		<!-- end cards -->

  </div>
  <div class="gallery__c-more u-flex u-flex--c">
    <button class="h6 gallery__more btn btn--more" id="more">See All</button>
  </div>
</main>
<div class="x u-abs-c">
  <button class="u-abs-c btn--un"></button>
</div>


<section class="row">

	<?php include 'includes/sidebar.php' ?>

</section>



<?php get_footer(); ?>