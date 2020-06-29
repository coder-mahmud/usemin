<?php


// Attorney Shortcode
function usemin_attorney_shortcode( $atts, $content = null  ) {
	extract( shortcode_atts( array(
		'first_slug' 	=> '',
		'second_slug' 	=> '',
		'third_slug' 	=> '',
		'fourth_slug' 	=> '',
		'fifth_slug' 	=> '',
	), $atts ) ); ob_start(); ?>

	<div class="attorneys">

	<?php
		$args = array(
			'post_type' => 'attorney',
			'posts_per_page' => -1,
			'order_by' => 'post',
			'order' => 'ASC'
		);

		$att_query = new WP_Query($args);
		if( $att_query-> have_posts()): while($att_query -> have_posts()) : $att_query-> the_post();
	?>
	
	
		<div class="single_attorney">
			<a class="attorney_content" href="#" style="background-image:url('');" >
				<img src="<?php the_post_thumbnail_url('full'); ?>" alt="">
				<div class="attorney_overlay">
					<div class="overlay_content">
						<div class="name_holder">
							<h2 class="name"><?php the_title(); ?></h2>
						</div>
						
						<h5 class="designation"><?php the_field('designation'); ?></h5>
					</div>
				</div>

			</a>

			<div class="attorney_popup">
				<div class="closer">
					<img src="<?php echo get_home_url().'/wp-content/uploads/2020/06/close.png' ?>" alt="">
				</div>
				<div class="image">
					<img src="<?php the_field('bigger_image'); ?>" alt="">
				</div>

				<div class="text">
					<div class="info_block">
						<h4 class="title">Name</h4>
						<h2 class="value"><?php the_title(); ?></h2>
					</div>

					<div class="info_block">
						<h4 class="title">Title</h4>
						<h2 class="value"><?php the_field('designation'); ?></h2>
					</div>

					<div class="info_block">
						<h4 class="title">Background</h4>
						<p><?php the_content(); ?></p>
					</div>

					<?php 
						if(get_field('special_skill')):
					?>

					<div class="info_block">
						<h4 class="title">Speciality</h4>
						<h3 class="value"><?php the_field('special_skill'); ?></h3>
					</div>

					<?php endif; ?>

					<div class="info_block">
						<?php if(get_field('facebook') || get_field('twitter') || get_field('linkedin') || get_field('youtube') || get_field('instagram')): ?>
						<h4 class="title">Get Connected</h4>
						<?php endif; ?>
						<div class="socials">
							<?php if(get_field('facebook')):  ?>
							<a href="<?php the_field('facebook'); ?>"><i class="fab fa-facebook-f"></i></a>
							<?php endif; ?>

							<?php if(get_field('twitter')):  ?>
							<a href="<?php the_field('twitter'); ?>"><i class="fab fa-twitter"></i></a>
							<?php endif; ?>

							<?php if(get_field('linkedin')):  ?>
							<a href="<?php the_field('linkedin'); ?>"><i class="fab fa-linkedin-in"></i></a>
							<?php endif; ?>

							<?php if(get_field('youtube')):  ?>
							<a href="<?php the_field('youtube'); ?>"><i class="fab fa-youtube"></i></a>
							<?php endif; ?>

							<?php if(get_field('instagram')):  ?>
							<a href="<?php the_field('instagram'); ?>"><i class="fab fa-instagram"></i></a>
							<?php endif; ?>
						</div>
					</div>
					

					
				</div>
			</div>

		</div>
	

	<?php endwhile; endif; wp_reset_postdata();?>
	
	</div>



	
<?php	
return ob_get_clean();
}
add_shortcode('attorney','usemin_attorney_shortcode');
