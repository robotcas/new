!function(n){null!=window.astra&&(astraSingleProductAjax={quick_view_enable:astra.shop_quick_view_enable||!1,ajax_add_to_cart_enable:astra.single_product_ajax_add_to_cart||!1,init:function(){this._bind()},_bind:function(){astraSingleProductAjax.ajax_add_to_cart_enable&&n(document).on("click","body.single-product .product:not(.product-type-external) button.single_add_to_cart_button",astraSingleProductAjax._processAjaxRequest),astraSingleProductAjax.quick_view_enable&&n(document.body).on("click","#ast-quick-view-content .product:not(.product-type-external) button.single_add_to_cart_button",astraSingleProductAjax._processAjaxRequest),n(document.body).on("added_to_cart",astraSingleProductAjax._updateButton),n("form.variations_form").on("woocommerce_variation_has_changed",astraSingleProductAjax._updateSaleBadge)},_processAjaxRequest:function(a){a.preventDefault();a=n(this).closest("form");if(!a[0].checkValidity())return a[0].reportValidity(),!1;var r,t,e=n(this),d=n(this).val()||"";n('input[name="variation_id"]').val();e.hasClass("disabled")||(e.removeClass("added"),e.addClass("loading"),r=n('input[name="quantity"]').val(),n(".woocommerce-grouped-product-list-item").length&&(t=n("input.qty"),r=[],n.each(t,function(a,t){var e=n(this).attr("name");e=(e=e.replace("quantity[","")).replace("]",""),e=parseInt(e),n(this).val()&&(r[e]=n(this).val())})),t=a.serialize(),n.ajax({url:astra.ajax_url,type:"POST",data:"action=astra_add_cart_single_product&add-to-cart="+d+"&"+t,success:function(a){n(document.body).trigger("wc_fragment_refresh"),n(document.body).trigger("added_to_cart",[a.fragments,a.cart_hash,e]),"undefined"!=typeof wc_add_to_cart_params&&"yes"===wc_add_to_cart_params.cart_redirect_after_add&&(window.location=wc_add_to_cart_params.cart_url)}}))},_updateButton:function(a,t,e,r){r=void 0!==r&&r,n("button.single_add_to_cart_button").length&&(n(r).removeClass("loading"),n(r).addClass("added"),astra.is_cart||0!==n(r).parent().find(".added_to_cart").length||n(r).after(' <a href="'+astra.cart_url+'" class="added_to_cart wc-forward" title="'+astra.view_cart+'">'+astra.view_cart+"</a>"),n(document.body).trigger("wc_cart_button_updated",[r]))},_updateSaleBadge:function(a){var t,e,r=n(this),d=r.find(".variation_id").val();""!=d&&"sale-percentage"==(r=r.closest(".product-type-variable").find("span.onsale")).data("notification")&&void 0!==(t=r.data("sale"))[d]&&(e=(e=r.data("sale-per-text")).replace("[value]",t[d]),r.text(e))}},n(function(){astraSingleProductAjax.init()}))}(jQuery);