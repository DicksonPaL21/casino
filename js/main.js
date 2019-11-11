var slideIndex = 1
showDivs( slideIndex )

function plusDivs( n ) {
  showDivs( slideIndex += n )
}

function currentDiv( n ) {
  showDivs( slideIndex = n )
}

function showDivs( n ) {
  var i
  var imgs = document.querySelectorAll( '.carousel img' )
  var indicators = document.querySelectorAll( '.carousel .indicator' )

  if ( n > imgs.length ) slideIndex = 1

  if ( n < 1 ) slideIndex = imgs.length

  for ( i = 0; i < imgs.length; i++ ) {
    imgs[i].style.display = 'none'
  }

  for ( i = 0; i < indicators.length; i++ ) {
    indicators[i].classList.remove( 'active' )
  }

  imgs[slideIndex - 1].style.display = 'block'
  indicators[slideIndex - 1].classList.add( 'active' )
}

var pageIndex = 1
pagination( pageIndex )

function setIndexPage( n ) {
  pagination( pageIndex = n )
}

function pagination( n ) {
  var i
  var imgs = document.querySelectorAll( '.pagination img' )
  var indicators = document.querySelectorAll( '.pagination .indicator' )

  if ( n > imgs.length ) pageIndex = 1

  if ( n < 1 ) pageIndex = imgs.length

  for ( i = 0; i < imgs.length; i++ ) {
    imgs[i].style.display = 'none'
  }

  for ( i = 0; i < indicators.length; i++ ) {
    indicators[i].classList.remove( 'active' )
  }

  imgs[pageIndex - 1].style.display = 'block'
  indicators[pageIndex - 1].classList.add( 'active' )
}

const numItemsToGenerate = 10;

function renderAd( size, id, index ) {
  fetch( `https://source.unsplash.com/${size}/?pocker+game/${id}` ).then( ( response ) => {
    var ad_container = document.querySelectorAll( '.ad' )[index]
    ad_container.innerHTML = `<img class="ad-picture" src="${response.url}" alt="source.unsplash.com"/>`
  } )
}

function ads() {
  let indexSize = 4
  for ( var i = 0; i < indexSize; i++ ) {
    renderAd( '600x600', ( Math.random() * 1342 ) + 300, i )
  } setTimeout( ads, 15000 )
} ads()
