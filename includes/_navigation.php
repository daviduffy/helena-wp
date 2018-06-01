<!-- nav -->
<nav class="nav<?php echo ($navClass ? " nav--$navClass" : ''); ?>">
  <ul class="nav__ul u-flex">
    <li class="nav__li<?php echo (is_category('commercials') ? ' nav__li--active' : ''); ?>">
        <a href="/category/commercials" class="nav__a btn--un u-flex">
          <i class="nav__fa nav__fa--i fa fa-star-o" aria-hidden="true"></i>
          <i class="nav__fa fa fa-circle" aria-hidden="true"></i>
          <h2 class="h6 nav__a-title">commercials</h2>
        </a>
    </li>
    <li class="nav__li<?php echo (is_category('illustrations') ? ' nav__li--active' : ''); ?>">
        <a href="/category/illustrations" class="nav__a btn--un u-flex">
          <i class="nav__fa nav__fa--i fa fa-picture-o" aria-hidden="true"></i>
          <i class="nav__fa fa fa-circle" aria-hidden="true"></i>
          <h2 class="h6 nav__a-title">illustrations</h2>
        </a>
    </li>
    <li class="nav__li<?php echo (is_category('features') ? ' nav__li--active' : ''); ?>">
        <a href="/category/features" class="nav__a btn--un u-flex">
          <i class="nav__fa nav__fa--i fa fa-film" aria-hidden="true"></i>
          <i class="nav__fa fa fa-circle" aria-hidden="true"></i>
          <h2 class="h6 nav__a-title">features</h2>
        </a>
    </li>
    <li class="nav__li<?php echo (is_category('videos') ? ' nav__li--active' : ''); ?>">
        <a href="/category/videos" class="nav__a btn--un u-flex">
          <i class="nav__fa nav__fa--i fa fa-television" aria-hidden="true"></i>
          <i class="nav__fa fa fa-circle" aria-hidden="true"></i>
          <h2 class="h6 nav__a-title">music videos</h2>
        </a>
    </li>
  </ul>
</nav>

<!-- end nav -->