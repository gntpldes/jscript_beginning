Vue.directive('scroll', {
    inserted: function(el, binding){
        let f = function(evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f);
            }
        };
        window.addEventListener('scroll', f); 
    },
});

new Vue({
    el: '.app', 
    methods: {
        handleScroll: function(evt, el){
            if (window.scrollY > 50){
                TweenMax.to(el, 1.5, {
                    y: -10, 
                    opacity: 1, 
                    ease: Sine.easeOut
                })
            }
            return window.scrollY > 100; 
        }
    }
}); 

Vue.directive('tack', {
    bind(el, binding, vnode) {
        el.style.position = 'fixed'; 
        el.style.top = binding.value.top + 'px'; 
        el.style.right = binding.value.right + 'px'; 
    }
});

