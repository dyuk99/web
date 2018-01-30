new Vue({
    el: "#root",
    data: {
        isDefaultTopNav : false,
        scrolled: false
    },
    methods: {
        changeMenu: function () {
            this.isDefaultTopNav = !this.isDefaultTopNav;
        },
        handleScroll: function () {
            console.log(window.scrollY);
            if (window.scrollY >= 300) {
                this.scrolled = true;
            } else {
                this.scrolled = false;
            }
        }
    },
    created: function() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed: function() {
        window.removeEventListener('scroll', this.handleScroll);
    }
});