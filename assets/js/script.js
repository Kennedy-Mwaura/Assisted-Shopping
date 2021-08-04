
    // SideNav Initialization
    $(".button-collapse").sideNav();


jQuery(document).ready(function () {
    jQuery("button#learn-more").click(function () {
        jQuery("#hidden-details").show();
        jQuery("button#hide").show();
        jQuery("button#learn-more").hide();
    });
    jQuery("button#hide").click(function () {
        jQuery("#hidden-details").hide();
        jQuery("button#learn-more").show();
        jQuery("button#hide").hide();
    });
});
