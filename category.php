<?php get_header(); ?>

<main class="main">
  <div class="gallery gallery--flex" id="gallery" >
		<!-- regular cards -->
		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
			<button class='card card--small' id="post_<?php echo get_the_ID(); ?>" onClick='toggleBackdrop.focus(this);'>
			  <div class='card__img'>
			    <?php the_post_thumbnail(); ?>
			  </div>
			  <div class='card__cont u-flex u-flex--c'>
			    <h3 class='h6 card__title'><?php the_title(); ?></h3>
			    <p class='h6 card__sub'><?php the_excerpt(); ?></p>
			  </div>
			</button>
		<?php endwhile; else : ?>
			<p><?php _e( 'Sorry, nothing to see here.' ); ?></p>
		<?php endif; ?>

		<!-- end cards -->

  </div>
  <!-- large cards -->
	<div class="gallery__backdrop" id="backdrop"></div>
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
  	<section class='card card--large' id="post_<?php echo get_the_ID(); ?>_lg">
  	  <div class='card__img'>
  	    <?php the_post_thumbnail(); ?>
  	  </div>
  	  <div class='card__cont u-flex'>
  	  	<div class='card__cont-1'>
	  	    <h3 class='h6 card__title'><?php the_title(); ?></h3>
	  	    <p class='h6 card__sub'><?php the_excerpt(); ?></p>
	  	    <button class="card__close btn--un" id="post_<?php echo get_the_ID(); ?>_close">
	  	    	<i>&times;</i>
		  	    &nbsp;close
		  	  </button>
  	  	</div>
  	  	<div class='card__cont-2'>
	  	    <p class='h6 card__sub'><?php the_content(); ?></p>
  	  	</div>
  	  </div>
  	</section>
  <?php endwhile; else : ?>
  <?php endif; ?>
</main>

<section class="row">

	<?php include 'includes/sidebar.php' ?>

</section>



<?php get_footer(); ?>