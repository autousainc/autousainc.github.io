// YA --- 05/11/2015 - Les liens de langues s'affichent et se cachent au clic
$(function() {
	var current_language_link = $('.fusion-menu li:nth-last-child(5)');

	current_language_link.on('click', function(e) {
		e.preventDefault();

		$('.fusion-menu li:nth-last-child(4)').toggle();
		$('.fusion-menu li:nth-last-child(3)').toggle();
	});
});

// YA --- 05/02/2016 - Permet de sauter doucement vers une entre sur la page
// Page « La différence ITC » avec une marge au-dessus de l'ancre visée
// Voir https://gist.github.com/HoundstoothSTL/5510082
$(function() {
	$('.itc-points-cles a[href^="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			|| location.hostname == this.hostname)
		{
			var target = $(this.hash),
			headerHeight = 50;

			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - headerHeight
				}, 500);
			
				return false;
			}
		}
	});
});

// YA --- 22/02/2016
// Page « Notre univers »
// L'affichage des citations est rendu dynamique en permettant à l'utilisateur
// de cliquer sur les liens pour afficher les citations d'un groupe de
// personnes lié à ITC d'une manière particulière
$(function() {
	// Blocs contenant les citations
	var testimonialCustomers = $('#testimonial-customers');
	var testimonialSuppliers = $('#testimonial-suppliers');
	var testimonialPartners  = $('#testimonial-partners');

	// Liens au-dessus des citations
	var testimonialCustomersLink = $('[href="#testimonial-customers"]');
	var testimonialSuppliersLink = $('[href="#testimonial-suppliers"]');
	var testimonialPartnersLink = $('[href="#testimonial-partners"]');

	// Clic sur le lien « Client » :
	// - Ajoute la classe « itc-box-active » au parent le plus haut dans la
	//   liste des liens
	// - Supprime cette même classe sur les autres parents des autres liens
	// - Affiche les citations liées aux clients
	// - Cache les citations liées aux autres
	testimonialCustomersLink.click(function(e) {
		e.preventDefault();

		testimonialCustomersLink.parent().parent().parent().addClass('itc-box-active');
		testimonialSuppliersLink.parent().parent().parent().removeClass('itc-box-active');
		testimonialPartnersLink.parent().parent().parent().removeClass('itc-box-active');

		testimonialCustomers.show();
		testimonialSuppliers.hide();
		testimonialPartners.hide();
	});

	// Idem que pour les clients, mais pour les fournisseurs
	testimonialSuppliersLink.click(function(e) {
		e.preventDefault();

		testimonialCustomersLink.parent().parent().parent().removeClass('itc-box-active');
		testimonialSuppliersLink.parent().parent().parent().addClass('itc-box-active');
		testimonialPartnersLink.parent().parent().parent().removeClass('itc-box-active');

		testimonialCustomers.hide();
		testimonialSuppliers.show();
		testimonialPartners.hide();
	});

	// Idem que pour les clients, mais pour les partenaires
	testimonialPartnersLink.click(function(e) {
		e.preventDefault();

		testimonialCustomersLink.parent().parent().parent().removeClass('itc-box-active');
		testimonialSuppliersLink.parent().parent().parent().removeClass('itc-box-active');
		testimonialPartnersLink.parent().parent().parent().addClass('itc-box-active');

		testimonialCustomers.hide();
		testimonialSuppliers.hide();
		testimonialPartners.show();
	});

	// N'affiche que les citations des clients par défaut
	testimonialCustomers.show();
	testimonialSuppliers.hide();
	testimonialPartners.hide();

	// Active le lien « Client » par défaut (pour afficher le triangle)
	testimonialCustomersLink.parent().parent().parent().addClass('itc-box-active');
});
